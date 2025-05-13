import { LitElement, html, nothing } from 'lit';
import { TaskStatus } from '@lit/task';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { msg, localized } from '@lit/localize';

import { svgAddon, svgArrowLeft, svgArrowRight, svgCross, svgSearch } from '../../assets/assets';
import { allLocales } from '../../generated/locale-codes';
import '../addons-loader/addons-loader';

import { widgetStyles } from './styles';
import { getLocale, setLocale } from './localization';
import { Addon, Category, WidgetState } from './types';
import { createTaskCategories, createTaskAddons, createTaskInstall, createTaskUninstall } from './tasks';
import { removeRedundantHTML, retrievePerex, localeCategoryName, createAbsoluteLink } from './utils';

/**
 * Main addons widget Lit web component.
 *
 * This component provides a user interface for browsing, searching, and managing addons
 * for the ABRA Flexi system. It supports localization, pagination, and integration with
 * external APIs for fetching addon data.
 *
 * @example
 * ```html
 * <addons-widget addons-per-page="12" locale-select partner-id="123"></addons-widget>
 * ```
 */
@localized()
@customElement('addons-widget')
export class WidgetElement extends LitElement {

    // ---------------------- STYLES ---------------------- //
    static styles = widgetStyles;

    // ---------------------- PROPERTIES ---------------------- //
    @property({ type: Number }) addonsPerPage: number = 12;
    @property({ type: String }) installEndpoint?: string;
    @property({ type: Boolean }) localeSelect: boolean = false;
    @property({ type: Number }) partnerId?: number;

    // ---------------------- STATES ---------------------- //
    @state() private _categories: Category[] = [];
    @state() private _currentAddons: Addon[] = [];
    @state() private _addonsPageNum: number = 0;
    @state() private _addonsTotalPages: number = 0;
    @state() private _widgetState: WidgetState = 'overview';
    @state() private _selectedAddon: Addon | null = null;
    @state() private _selectedCategory: number | null = null;
    @state() private _searchPhrase: string = "";
    @state() private _selectedLocale: string = getLocale();
    @state() private _installedAddons: Set<number> = new Set<number>;
    @state() private _cycleInstall: boolean = false;
    @state() private _cycleUninstall: boolean = false;
    @state() private _onlyByPartner: boolean = true;

    // ---------------------- LIT TASKS ---------------------- //
    private _taskCategories = createTaskCategories(this);
    private _taskAddons = createTaskAddons(this);
    private _taskInstall = createTaskInstall(this);
    private _taskUninstall = createTaskUninstall(this);

    // ---------------------- LIFECYCLE METHODS ---------------------- //
    /**
     * Called when the component is updated.
     * Scrolls the content area to the top after each update.
     * @param changedProperties Map of changed properties.
     */
    updated(changedProperties: Map<string | number | symbol, unknown>) {
        super.updated(changedProperties);
        const contentElement = this.shadowRoot?.getElementById('content');
        if (contentElement) {
            contentElement.scrollTop = 0;
        }
    }

    // ---------------------- STATES/PROPS CHANGING METHODS ---------------------- //
    /**
     * Changes the widget state to 'overview'.
     * Resets installation and uninstallation cycles.
     */
    _goBack() {
        this._widgetState = 'overview';
        this._cycleInstall = false;
        this._cycleUninstall = false;
    }

    /**
     * Changes the widget state to 'detail' and sets the selected addon.
     * @param event Event triggered by clicking on an addon card.
     */
    _goToDetail(event: Event) {
        const target = event.currentTarget as HTMLElement;
        const addonId = target.dataset.id;

        if (addonId) {
            this._selectedAddon = this._currentAddons.find(addon => addon.id === parseInt(addonId, 10)) || null;
            this._widgetState = 'detail';
        }
    }
    /**
     * Updates the selected category and resets the page number.
     * @param e Event triggered by changing the category dropdown.
     */
    _updateCategory(e: Event) {
        this._addonsPageNum = 0;
        this._selectedCategory = parseInt((e.target as HTMLSelectElement).value);
    }

    /**
     * Resets the search phrase and selected category.
     */
    _resetSearch() {
        this._addonsPageNum = 0;
        this._searchPhrase = "";
        // have to reset category this way, because changing this._selectedCategory does not rerender selected option
        const selectCategory = this.shadowRoot?.getElementById("selectCategory") as HTMLSelectElement;
        if (selectCategory) {
            selectCategory.value = "";
            selectCategory.dispatchEvent(new Event("change"));
        }
    }

    /**
     * Sets the search phrase from the input field and resets the page number.
     */
    _search() {
        this._addonsPageNum = 0;
        this._searchPhrase = (this.shadowRoot.getElementById("search") as HTMLInputElement).value;
    }

    /**
     * Changes the locale based on the selected value.
     * @param event Event triggered by changing the locale dropdown.
     */
    _localeChanged(event: Event) {
        this._selectedLocale = (event.target as HTMLSelectElement).value;
        setLocale(this._selectedLocale);
    }

    /**
     * Changes onlyByPartner state according to checkbox value and reset page number.
     * @param event Event triggered by changing by-partner checkbox.
     */
    _onlyByPartnerChanged(event: Event) {
        this._addonsPageNum = 0;
        this._onlyByPartner = (event.target as HTMLInputElement).checked;
    }

    /**
     * Triggers a search when the Enter key is pressed in the search input.
     * @param e Keyboard event.
     */
    _searchOnEnter(e: Event) {
        if ((e as KeyboardEvent).key === "Enter") {
            this._search();
        }
    }

    /**
     * Starts the addon installation process.
     */
    _install() {
        this._taskInstall.run();
    }

    /**
     * Starts the addon uninstallation process.
     */
    _uninstall() {
        this._taskUninstall.run();
    }

    /**
     * Checks if an installation or uninstallation process is in progress.
     * @returns True if a process is in progress, otherwise false.
     */
    _inProgress() {
        return this._taskInstall.status === TaskStatus.PENDING || this._taskUninstall.status === TaskStatus.PENDING;
    }

    // ---------------------- RENDERING ---------------------- //
    /**
     * Renders the header of the widget.
     *
     * The header displays the title of the widget or the name of the selected addon
     * in the detail view. It also includes a back button in the detail view and
     * an optional locale selection dropdown.
     *
     * @returns The header template.
     */
    _renderHeader() {
        return html`
            <header class="panel wide">
                ${this._widgetState == 'detail'
                ? html`
                <button class='btnEmpty left' ?hidden=${this._inProgress()} @click="${this._goBack}">${msg("Zpět na přehled", { id: "buttonBack" })}</button>
                <h1 class='centered'>${this._selectedAddon.name}</h1>
                `
                : html`
                <h1 class='centered'>${msg('Doplňky ABRA Flexi', { id: 'title' })}</h1>
                `}
                ${this.localeSelect == true
                ? html`<div class="selectWrapper right">
                    <label for="selectLocale">${msg("Jazyk", { id: "labelLanguage" })}</label>
                    <select id="selectLocale" @change="${this._localeChanged}">
                        ${allLocales.map((locale) => html`
                            <option .value=${locale} ?selected=${locale === this._selectedLocale}>
                                ${locale}
                            </option>
                            `)}
                    </select>
                </div>`
                : nothing}
            </header>
        `;
    }

    /**
     * Renders the search filters section.
     *
     * This section includes a category dropdown, a search input field, and an optional
     * checkbox for filtering addons by partner. It allows users to filter and search
     * for addons.
     *
     * @returns The search filters template.
     */
    _renderSearchFilters() {
        return html`
        <div class="panel wide">
            <div class="selectWrapper left">
                <label for='selectCategory'>${msg("Kategorie", { id: "labelCategory" })}</label>
                <select id='selectCategory' @change="${this._updateCategory}">
                    <option value="">--${msg("Všechny", { id: "optionAll" })}--</option>
        ${this._categories.map((category) => {
            return html`
                <option value="${category.id}" ?selected="${category.id === this._selectedCategory}">${localeCategoryName(category, this._selectedLocale)}</option>
            `;
        })}
                </select>
            </div>
            ${this.partnerId
                ? html`
                    <div class="checkboxWrapper centered">
                        <input type="checkbox" id="onlyByPartner" .checked=${this._onlyByPartner} @change="${this._onlyByPartnerChanged}" />
                        <label for="onlyByPartner">${msg("Pouze vlastní", { id: "only-by-partner" })}</label>
                    </div>`
                : nothing}
            <div class='searchWrapper right'>
                <button @click="${this._search}" aria-label='Search phrase'>
                    ${svgSearch()}
                </button>
                <label for='search'>${msg("Vyhledat", { id: "labelSearch" })}</label>
                <input type="text" id="search" value="${this._searchPhrase}" @keydown="${this._searchOnEnter}"/>
                <button @click="${this._resetSearch}" aria-label='Reset search phrase'>
                    ${svgCross()}
                </button>
            </div>
        </div>
        `;

    }

    /**
     * Renders the tags for the selected addon.
     *
     * This section displays metadata about the selected addon, such as its categories
     * and supported variants, in a tag-like format.
     *
     * @returns The addon tags template.
     */
    _renderAddonTags() {
        return html`
            <dl id='addonTags'>
                <dt>${msg('Kategorie', { id: 'category' })}</dt>
                ${repeat(this._selectedAddon.categories, (name) => html`
                <dd class='tag'>${name}</dd>
                `)}
                ${this._selectedAddon.variants.length !== 0
                ? html`<dt>${msg('Vhodné pro varianty', { id: 'for-variants' })}</dt>
                ${repeat(this._selectedAddon.variants, (name) => html`
                <dd class='tag'>${name}</dd>
                `)}`
                : nothing}
            </dl>
        `;

    }

    /**
     * Renders the overview of addons.
     *
     * This function displays a grid of addon cards. Each card represents an addon
     * with its name, logo, and additional metadata. It also handles loading and error
     * states for fetching addons.
     *
     * @returns The overview template.
     */
    _renderOverview() {
        return this._taskAddons.render({
            pending: () => html`
            <div class='cards'>
                ${Array.from({ length: this.addonsPerPage }, (_, i) => html`
                    <div class='cardWrapper'>
                        <article class='addon loading'>
                            <addons-loader></addons-loader>
                        </article>
                    </div>
                `)}
            </div>`,
            complete: () => html`
            ${this._currentAddons.length > 0
                    ? html`
                <div class='cards'>
                ${repeat(this._currentAddons, (addon) => addon.id, (addon) => html`
                    <div class='cardWrapper'>
                    <article class='addon' tabindex='0' data-id="${addon.id}" @click="${this._goToDetail}">
                        ${addon.photo
                            ? html`<img alt='addon ${addon.id} logo' src='${addon.photo.toString()}'>`
                            : svgAddon()
                        }
                        <h2>${addon.name}</h2>
                        ${retrievePerex(addon)}
                        <span class='addonNote'>
                            ${addon.installed
                            ? html`${msg('Instalovaný', { id: 'installed' })}`
                            : html`${addon.hasPrice
                                ? html`${msg('Zpoplatněno', { id: 'paid' })}`
                                : html`${msg('Zdarma', { id: 'free' })}`
                                }`
                        }
                        </span>
                    </article>
                    </div>
                        `)
                        }
                </div>`
                    : html`
                    <div class='banner'>
                        <p>${msg('Nebyl nalezen žádný doplněk.', { id: 'error-addon-search' })}</p>
                        <button class='btnEmpty' @click='${this._resetSearch}'>${msg('Zobrazit všechny', { id: 'show-all' })}</button>
                    </div>
            `}
            `,
            error: () => html`
                <div class='banner'>
                    <p>${msg('Nastala chyba, doplňky se nepodařilo načíst.', { id: 'error-addon-fetch' })}</p>
                    <a href=''>
                        <button class='btnEmpty' @click='${this.requestUpdate}'>${msg('Zkusit znovu', { id: 'try-again' })}</button>
                    </a>
                </div>
            `,
        })
    }

    /**
     * Renders the detail view of the selected addon.
     *
     * This function displays detailed information about the selected addon, including
     * its description, installation/uninstallation status, and any associated actions.
     * It also handles loading and error states for installation/uninstallation tasks.
     *
     * @returns The detail view template.
     */
    _renderDetail() {
        if (this._cycleInstall) {
            return this._taskInstall.render({
                pending: () => html`
                <div class='banner'>
                    <addons-loader></addons-loader>
                    <p>${msg('Probíhá instalace doplňku', { id: 'installing-addon' })}</p>
                </div>
                `,
                complete: () => html`
                    <div class='banner'>
                        <div class='banner'>
                            <p>${msg('Doplněk byl úspěšně nainstalován', { id: 'success-installing-addon' })}</p>
                            <button id='backToDetail' class='btnEmpty' @click='${() => { this._cycleInstall = false }}'>${msg('Zpět na detail', { id: 'back-to-detail' })}</button>
                        </div>
                    </div>
                `,
                error: () => html`
                    <div class='banner'>
                        <p>${msg('Nastala chyba při instalaci doplňku', { id: 'error-installing-addon' })}</p>
                        <button class='btnEmpty' @click='${() => { this._cycleInstall = false }}'>${msg('Zkusit znovu', { id: 'try-again' })}</button>
                    </div>
                `}
            )
        }
        if (this._cycleUninstall) {
            return this._taskUninstall.render({
                pending: () => html`
                    <div class='banner'>
                        <addons-loader></addons-loader>
                        <p>${msg('Probíhá odinstalace doplňku', { id: 'uninstalling-addon' })}</p>
                    </div>
                    `,
                complete: () => html`
                    <div class='banner'>
                        <div class='banner'>
                            <p>${msg('Doplněk byl úspěšně odinstalován', { id: 'success-uninstalling-addon' })}</p>
                            <button id='backToDetail' class='btnEmpty' @click='${() => { this._cycleUninstall = false }}'>${msg('Zpět na detail', { id: 'back-to-detail' })}</button>
                        </div>
                    </div>
                `,
                error: () => html`
                        <div class='banner'>
                            <p>${msg('Nastala chyba při odinstalaci doplňku', { id: 'error-uninstalling-addon' })}</p>
                            <button class='btnEmpty' @click='${() => { this._cycleUninstall = false }}'>${msg('Zkusit znovu', { id: 'try-again' })}</button>
                        </div>
                    `}
            )
        }
        const detail = document.createElement('div');
        detail.classList.add('detail');
        detail.innerHTML = this._selectedAddon.description;
        removeRedundantHTML(detail);
        return detail;
    }

    /**
     * Renders the footer of the widget.
     *
     * The footer displays navigation controls for pagination in the overview state
     * or action buttons (e.g., install/uninstall) in the detail state. It also includes
     * partner information and links if available.
     *
     * @returns The footer template.
     */
    _renderFooter() {
        return html`
            <footer class="panel wide">
            ${this._widgetState == 'detail'
                ? html`
                        ${this._selectedAddon.partner
                        ? html`
                            <div class='partner left'>
                                <img src='${this._selectedAddon.partner.logo}'>
                                ${this._selectedAddon.partner.url
                                ? html`
                                    <a href="${createAbsoluteLink(this._selectedAddon.partner.url)}" target="_blank">
                                        <span>${this._selectedAddon.partner.name}</span>
                                    </a>
                                `
                                : html`<span>${this._selectedAddon.partner.name}</span>`}
                            </div>
                        `
                        : nothing}
                        ${this._selectedAddon.linkMore
                        ? html`
                            <a class="centered" href="${createAbsoluteLink(this._selectedAddon.linkMore)}" target="_blank">
                                <button class="btnEmpty" > ${msg('Zjistit více', { id: 'more-info' })} </button>
                            </a>
                        `
                        : nothing}
                        ${this._selectedAddon.installScript
                        ? this.installEndpoint
                            ? !this._selectedAddon.installed
                                ? html`
                                    <button id="installButton" class="btnFull right" ?hidden=${this._inProgress()} @click="${this._install}" > ${msg('Instalovat', { id: 'install' })} </button>
                                `
                                : html`
                                    <button id="uninstallButton" class="btnFull right" ?hidden=${this._inProgress()} @click="${this._uninstall}" > ${msg('Odinstalovat', { id: 'uninstall' })} </button>
                                `
                            : html`
                                <a class="right" href="https://www.abra.eu/flexi/" target="_blank">
                                    <button class="btnFull" > ${msg('Instalovat ve Flexi', { id: 'install-in-flexi' })} </button>
                                </a>
                            `
                        : nothing}
                        `
                : html`
                    <div id='pager' class="panel centered" ?visible="${this._addonsTotalPages == 0}" >
                        <button @click="${() => this._addonsPageNum--}" ?hidden="${this._addonsPageNum == 0}" aria-label='Previous page'>
                            ${svgArrowLeft()}
                        </button>
                    ${this._addonsTotalPages > 0
                        ? html`
                        <div class="centered">
                            ${this._addonsPageNum + 1}/${this._addonsTotalPages}
                        </div>
                        `
                        : nothing}
                        <button @click="${() => this._addonsPageNum++}" ?hidden="${this._addonsPageNum + 1 >= this._addonsTotalPages}" aria-label='Next page'>
                            ${svgArrowRight()}
                        </button>
                    </div>
                    `
            }
            </footer>
        `;
    }

    /**
     * Main render function composing all render functions.
     *
     * This function combines the header, content, and footer sections to create the
     * complete widget layout. It dynamically switches between the overview and detail
     * views based on the current widget state.
     *
     * @returns The complete widget template.
     */
    render() {
        return html`
        <div id='container'>
            ${this._renderHeader()}
            ${this._widgetState == 'overview'
                ? this._renderSearchFilters()
                : this._renderAddonTags()
            }
            <div id='content' tabindex='0'>
            ${this._widgetState == 'overview'
                ? this._renderOverview()
                : this._renderDetail()
            }
            </div>
            ${this._renderFooter()}
        </div>`;
    }
}

/**
 * Add type-checking for WidgetElement
 * https://lit.dev/docs/components/defining/#typescript-typings
 */
declare global {
    interface HTMLElementTagNameMap {
        "addons-widget": WidgetElement;
    }
}