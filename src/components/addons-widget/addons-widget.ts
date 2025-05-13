import { LitElement, html, nothing } from 'lit';
import { Task, TaskStatus } from '@lit/task';
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
 * Main addons widget Lit web component
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
    updated(changedProperties: Map<string | number | symbol, unknown>) {
        super.updated(changedProperties);

        // Scroll #content to the top after each update
        const contentElement = this.shadowRoot?.getElementById('content');
        if (contentElement) {
            contentElement.scrollTop = 0;
        }
    }

    // ---------------------- STATES CHANGING ---------------------- //
    /**
     * Change state (from detail) to overview
     */
    _goBack() {
        this._widgetState = 'overview';
        this._cycleInstall = false;
        this._cycleUninstall = false;
    }

    /**
     * Change state to detail and set addon to be shown
     * @param addon Addon to be shown in detail
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
     * Update category on categories select element change
     * Nulling the page number
     * @param e Event for targeting select for the value
     */
    _updateCategory(e: Event) {
        this._addonsPageNum = 0;
        this._selectedCategory = parseInt((e.target as HTMLSelectElement).value);
    }

    /**
     * Reset page number to zero and setting search phrase to empty string
     */
    _resetSearch() {
        this._addonsPageNum = 0;
        (this.shadowRoot.getElementById("search") as HTMLInputElement).value = "";
        this._searchPhrase = "";
        this._selectedCategory = null;
    }

    /**
     * Set searchPhrase from text input (and cause fetching new addons)
     * Nulling the page number
     */
    _search() {
        this._addonsPageNum = 0;
        this._searchPhrase = (this.shadowRoot.getElementById("search") as HTMLInputElement).value;
    }

    /**
     * Changing locale according to window.location URL
     * @param event Event to target select element with locale codes
     */
    _localeChanged(event: Event) {
        this._selectedLocale = (event.target as HTMLSelectElement).value;
        setLocale(this._selectedLocale);
    }

    _searchOnEnter(e: Event) {
        if ((e as KeyboardEvent).key === "Enter") {
            this._search();
        }
    }

    _install() {
        this._taskInstall.run();
    }

    _uninstall() {
        this._taskUninstall.run();
    }

    _inProgress() {
        return this._taskInstall.status === TaskStatus.PENDING || this._taskUninstall.status === TaskStatus.PENDING;
    }

    // ---------------------- RENDERING ---------------------- //
    /**
     * Compose header of the component for both widget states
     * @returns HTML with component header
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
                        <input type="checkbox" id="onlyByPartner" .checked=${this._onlyByPartner} @change="${(e: Event) => this._onlyByPartner = (e.target as HTMLInputElement).checked}" />
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

    _renderAddonTags() {
        return html`
            <dl id='addonTags'>
                <dt>${msg('Kategorie', { id: 'category' })}</dt>
                ${repeat(this._selectedAddon.categories, (name) => html`
                <dd class='tag'>${name}</dd>
                `)}
                <dt>${msg('Vhodné pro varianty', { id: 'for-variants' })}</dt>
                ${repeat(this._selectedAddon.variants, (name) => html`
                <dd class='tag'>${name}</dd>
                `)}
            </dl>
        `;

    }

    /**
     * Render function for cards of widget in #content
     * tabindex has to be present in <a> element because it has no href
     * @returns #content with addon cards
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
     * Render detail of selected addon as a component content
     * @returns style unified description of addon
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
                            <p>${msg('Doplněk byl úspěšně odinstalován', { id: 'success-installing-addon' })}</p>
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
     * Render footer for both widget states
     * @returns footer element centered with pager (overview) or install button (detail)
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
                                <a class="centered" href="https://www.abra.eu/flexi/" target="_blank">
                                    <button class="btnFull right" > ${msg('Instalovat ve Flexi', { id: 'install-in-flexi' })} </button>
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
     * Main render function composing all render functions
     * Lit library use this function as component content default
     * component styles are applied on this DOM level
     * @returns component template inner HTML
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