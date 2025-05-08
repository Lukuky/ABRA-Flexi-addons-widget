import { LitElement, html, css, nothing } from 'lit';
import { Task } from '@lit/task';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { msg, localized } from '@lit/localize';
import { configureLocalization } from '@lit/localize';
import { sourceLocale, targetLocales, allLocales } from './generated/locale-codes.js';

import './loader.ts';

/**
 * Pre-rendering localizations
 * Specified in locale-codes.js generated from lit-localize.json
 */
const localizedTemplates = new Map(
    targetLocales.map((locale) => [locale, import(`./generated/locales/${locale}.js`)])

);

/**
 * Configure localization
 * Locales from localizedTemplates
 */
const { getLocale, setLocale } = configureLocalization({
    sourceLocale,
    targetLocales,
    loadLocale: async (locale: "de" | "en" | "sk") => localizedTemplates.get(locale),
});

/**
 * Two only possible states of the widget
 * overview ~ of all/filtered addons, paginated
 * detail ~ focus on one addon with more informations
 */
type WidgetState = 'overview' | 'detail';

/**
 * Categories of addons
 * keys from Flexibee API response
 */
interface Category {
    id: number,
    nameCs: string,
    nameSk: string,
    nameEn: string,
    nameDe: string,
    active: boolean
}

interface Partner {
    id: number,
    logo: string,
    name: string,
    url: string
}

/**
 * Addons informations
 * keys from Flexibee API
 * include only used keys, not all from API response
 */
interface Addon {
    active: boolean,
    api: boolean,
    categories: string[],
    code: string,
    description: string,
    developer: string,
    hasPrice: boolean,
    id: Number,
    installScript: string | null,
    linkMore: string | null,
    name: string,
    partner: Partner,
    perex: string,
    photo: URL,
    uninstallScript: string | null,
    variants: string[],
    www: string | null
}

/**
 * Addons response structure from Flexibee API
 * include only used informations
 */
interface AddonsSearch {
    totalPages: number,
    content: Addon[]
};

/**
 * Main addons widget Lit web component
 */
@localized()
@customElement('addons-widget')
export class WidgetElement extends LitElement {
    // ---------------------- STYLES ---------------------- //
    /**
     * All styles applied to widget component
     * Changes only able with rewriting styles for addons-widget selector
     * or by specifying undefined CSS variables rewriting default values
     */
    static styles = css`
        /**
        * There is no possible to use @font-face or @import in Lit yet, 
        * nighter importing font in <link> in render HTML does not work.
        * Therefore it is need to already have the font imported in the 
        * hosting page and use variable --font-family to pass it here.
        * More about the issue here:
        * https://github.com/lit/lit-element/issues/793
        */
        :host {
            // customizable variables;
            --font-family: var(--custom-font-family, 'Gotham-Medium', 'Open Sans', Arial, serif);
            --font-size: var(--custom-font-size, 1rem);
            --color-primary: var(--custom-color-primary, #0e5dbb);
            --text-color-primary: var(--custom-text-color-primary, #000000);
            --text-color-secondary: var(--custom-text-color-secondary, #6d6d70);
            --bg-color-primary: var(--custom-bg-color-primary, #fafafa);
            --bg-color-secondary: var(--custom-bg-color-secondary, #f4f4f4);
            --bg-color-interactive: var(--custom-bg-color-interactive, #ffffff);
            --border-primary: var(--custom-border-primary, solid #aaaaaa 0.1em);
            --border-interactive: var(--custom-border-interactive, solid #9c9c9c 0.1em);
            --border-radius-primary: var(--custom-border-radius-primary, 0.4em);
            --border-radius-interactive: var(--custom-border-radius-interactive, 0.4em);
            // inner variables;
            --addon-card-gap: 1em;
            --addon-card-height: 15em;
            --around-gap: 0.7em;
        }

        * {
            font-family: var(--font-family);
            font-weight: light;
            padding: 0;
            margin: 0;
        }

        h1 {
            font-size: 1.6em;
            font-weight: normal;
        }

        h2 {
            font-size: 1.3em;
            font-weight: normal;
        }

        p, li {
            font-weight: lighter;
            line-height: 1.3em;
        }

        button, select, .searchWrapper, .addon {
            font-size: 1em;
            padding: 0.4em;
            border: var(--border-interactive);
            border-radius: var(--border-radius-interactive);
            background-color: var(--bg-color-interactive);
        }

        button, select, .addon {
            cursor: pointer;
        }

        button > img {
            vertical-align: middle;
        }

        label {
            font-size: 0.7em;
        }

        #container {
            display: grid;
            grid-template-columns: 1fr;
            justify-items: stretch;
            border: var(--border-primary);
            border-radius: var(--border-radius-primary);
            background-color: var(--bg-color-primary);
            padding: var(--around-gap);
        }

        #content {
            overflow-y: scroll;
            height: 39.39em;
            border: var(--border-primary);
            border-radius: var(--border-radius-primary);
            margin: var(--around-gap) 0;
        }

        #content.extended {
            height: var(--max-rows, 4);
        }

        #searchFilters {
            display: flex;
            flex-flow: row wrap;
            align-items: stretch;
            justify-content: space-between;
            padding-top: 1em;
            gap: 1em;
        }

        #pager img {
            padding: 0.2em 0.3em;
        }

        .panel {
            display: grid;
            align-items: center;
            grid-template-columns: 1fr auto 1fr;
            gap: 1em;
        }

        .panel .left {
            grid-column-start: 1;
            justify-self: flex-start;
        }

        .panel .centered {
            grid-column-start: 2;
            justify-self: center;
        }

        .panel .right {
            grid-column-start: 3;
            justify-self: flex-end;
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            justify-content: stretch;
            align-content: start;
            gap: var(--addon-card-gap);
            padding: var(--addon-card-gap);
            background-color: var(--bg-color-secondary);
        }

        @media screen and (max-width: 70em) {
            .cards {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        @media screen and (max-width: 50em) {
            .cards {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media screen and (max-width: 30em) {
            .cards {
                grid-template-columns: 1fr;
            }
        }

        .addon {
            position: relative;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            flex-grow: 1;
            text-align: center;
            gap: 0.6em;
            height: var(--addon-card-height);
            padding: 1.5em;
            background-color: var(--bg-color-interactive);
            box-shadow: none;
            transition: box-shadow 0.2s ease-in;
            cursor: pointer;
        }

        .addon:hover {
            box-shadow: 0 0.5em 1em #bbb;
        }

        .addon img {
            object-fit: contain;
            max-width: 70%;
            height: 3em;
        }

        .addon .addonPerex {
            overflow-y: hidden;
        }

        .addon .addonNote {
            position: absolute;
            bottom: 1em;
            width: 100%;
            padding-top: 3em;
            color: var(--text-color-secondary);
            /* background-color: var(--bg-color-interactive); */
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--bg-color-interactive), var(--bg-color-interactive));
        }

        .loading {
            justify-content: center;
        }

        .loading:hover {
            box-shadow: none;
            cursor: progress;
        }

        .loading addons-loader {
            --size: 3em;
            --main-color: var(--color-primary);
        }

        .detail {
            display: flex;
            flex-flow: column;
            align-content: center;
            max-width: 50em;
            padding: 2em;
            margin: 0 auto;
        }
        
        .detail > * {
            grid-column: 2;
        }

        .detail h2 {
            padding: 1em 0 0.5em 0;
        }

        .detail p,
        .detail ul {
            padding-bottom: 1em;
        }

        .detail li {
            margin-left: 1em;
        }

        .detail img {
            max-width: 90%;
            margin: 0.5em 0;
        }

        .detail .perex {
            color: var(--text-color-secondary);
        }

        .banner {
            display: flex;
            flex-direction: column;
            align-content: center;
            align-items: center;
            justify-content: center;
            text-align: center;
            width: 100%;
            height: 100%;
            gap: 0.5em;
        }

        .btnEmpty {
            color: var(--color-primary);
            border-color: var(--color-primary);
        }

        .btnFull {
            color: var(--bg-color-interactive);
            background-color: var(--color-primary);
            border-color: var(--color-primary);
        }

        .selectWrapper {
            position: relative;
        }

        label {
            position: absolute;
            left: 1em;
            top: -0.8em;
            padding: 0 0.3em;
            background-color: var(--bg-color-interactive);
        }

        .searchWrapper {
            position: relative;
            display: flex;
            flex-flow: row nowrap;
            align-items: stretch;
            gap: 0.2em;
            padding: 0;
            background-color: var(--bg-color-interactive);
        }

        .searchWrapper > input {
            font-size: 1em;
            width: 9em;
            padding: 0 0.2em;
            border: none;
            background-color: none;
        }

        .searchWrapper:focus {
            border: none;
        }

        .searchWrapper > button {
            padding: 0.3em;
            border: none;
        }

        .searchWrapper img {
            height: 1.5em;
        }

        .partner {
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            gap: 1em;
        }

        .partner > img {
            height: 1.5em;
        }

        .partner span {
            color: var(--text-color-secondary);
        }
    `;

    // ---------------------- STATES ---------------------- //
    /**
     * All categories of addons
     * to be fetched from Flexibee API
     */
    @state()
    private _categories: Category[] = [];

    /**
     * Addons in current page in overview
     */
    @state()
    private _currentAddons: Addon[] = [];

    /**
     * Number of current page of addons overview
     * Nulled each time the filter parameters are changed
     */
    @state()
    private _addonsPageNum: number = 0;

    /**
     * Total number of pages for currently filtered addons
     */
    @state()
    private _addonsTotalPages: number = 0;

    /**
     * State of the widget
     * overview (default) or detail
     */
    @state()
    private _widgetState: WidgetState = 'overview';

    /**
     * Selected addon that is exposed in detail state
     */
    @state()
    private _selectedAddon: Addon | null = null;

    /**
     * Filtering addons category in overview
     */
    @state()
    private _selectedCategory: number | null = null;

    /**
     * Phrase in text input to be full-text searched among addons
     */
    @state()
    private _searchPhrase: string = "";

    /**
     * Selected locale modifying messages and switching among fetched data
     */
    @state()
    private _selectedLocale: string = getLocale();

    /**
     * Maximum amount of addons on one page of overview
     */
    @property({ type: Number })
    addonsPerPage = 8;

    // ---------------------- LIT TASKS ---------------------- //
    /**
     * Task to setup locales
     */
    private _TaskLocales = new Task(this, {

        task: async ([selectedLocale]) => {
            if (selectedLocale !== getLocale()) {
                allLocales.forEach(async locale => {
                    if (selectedLocale === locale) {
                        await setLocale(selectedLocale);
                        this.requestUpdate();
                        return;
                    }
                });
            }
        },

        args: () => [this._selectedLocale]

    });

    /**
     * Task fetching all addons categories from Flexibee API to component's state
     */
    public _TaskCategories = new Task(this, {

        task: async ([], { signal }) => {
            const url = new URL('https://support.flexibee.eu/api/categories');
            const response = await fetch(url, { signal });

            if (!response.ok) { throw new Error(response.status.toString()); }

            const data: Category[] = await response.json() as Array<Category>;
            this._categories = data;
            return data;
        },

        args: () => []

    });

    /**
     * Task fetching amount of addons from Flexibee API
     * Run each time on attributes change, so whenever filter or page changes
     */
    private _addons = new Task(this, {

        task: async ([langOpt, category, page, size, search], { signal }) => {
            let url = new URL('https://support.flexibee.eu/api/addons/search');
            url.searchParams.append('langOpt', langOpt);
            if (category) url.searchParams.append('categoryId', category.toString());
            url.searchParams.append('page', page.toString());
            url.searchParams.append('size', size.toString());
            if (search) url.searchParams.append('search', search);
            const response = await fetch(url, { signal });

            if (!response.ok) { throw new Error(response.status.toString()); }

            const data: AddonsSearch = await response.json() as AddonsSearch;
            this._addonsTotalPages = data.totalPages;
            this._currentAddons = data.content;
            console.log(data);
            return data;
        },

        args: () => [this._selectedLocale, this._selectedCategory, this._addonsPageNum, this.addonsPerPage, this._searchPhrase]

    });


    // ---------------------- CALLBACK FUNCTION ---------------------- //
    /**
     * Fetch categories after connecting to DOM
     */
    connectedCallback(): void {
        super.connectedCallback();

        this._TaskCategories.run();
        this._TaskCategories.taskComplete.catch((error) => {
            console.error('Failed to fetch categories:', error);
            this._categories = [];
        });
    }


    // ---------------------- STATES CHANGING ---------------------- //
    /**
     * Change state (from detail) to overview
     */
    _goBack() {
        this._widgetState = 'overview';
    }

    /**
     * Change state to detail and set addon to be shown
     * @param addon Addon to be shown in detail
     */
    _goToDetail(addon: Addon) {
        this._selectedAddon = addon;
        this._widgetState = 'detail';
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
    }

    /**
     * Set searchPhrase from text input (and cause fetching new addons)
     * Nulling the page number
     */
    _search() {
        this._addonsPageNum = 0;
        this._searchPhrase = (this.shadowRoot.getElementById("search") as HTMLInputElement).value;
    }

    // ---------------------- SUPP FUNCTIONS ---------------------- //
    /**
     * Remove all style elements and attributes from element subtree including color attribute
     * Used for unify descriptions and perexes from Flexibee API
     * @param element root of DOM subtree to have removed styles
     */
    _removeRedundantHTML(element: HTMLElement): void {
        Array.from(element.getElementsByClassName('icon')).forEach(icon => icon.parentNode?.removeChild(icon));
        Array.from(element.getElementsByTagName('br')).forEach(br => br.parentNode?.removeChild(br));
        Array.from(element.getElementsByTagName('style')).forEach(style => style.parentNode?.removeChild(style));
        Array.from(element.getElementsByTagName('*')).forEach(element => {
            element.removeAttribute("style");
            element.removeAttribute("color");
        });
        Array.from(element.getElementsByTagName('p')).forEach(paragraph => {
            if (!paragraph.textContent?.trim() && paragraph.children.length === 0) {
                paragraph.parentNode?.removeChild(paragraph);
            }
        });
    }

    /**
     * Getting perex out of addon fetched from Flexibee API
     * @param addon Addon to retrieve perex from
     * @returns addon perex in HTML
     */
    _retrievePerex(addon: Addon) {
        const perex = document.createElement('p');
        perex.classList.add('addonPerex');
        perex.innerHTML = addon.perex;
        this._removeRedundantHTML(perex);
        return perex;
    }

    /**
     * Changing locale according to window.location URL
     * @param event Event to target select element with locale codes
     */
    _localeChanged(event: Event) {
        this._selectedLocale = (event.target as HTMLSelectElement).value;
        // this._TaskLocales.run();
    }

    _localeCategoryName(category: Category) {
        switch (this._selectedLocale) {
            case 'cs': return category.nameCs;
            case 'sk': return category.nameSk;
            case 'en': return category.nameEn;
            case 'de': return category.nameDe;
            default: return category.nameCs;
        }
    }
    _searchOnEnter(e: Event) {
        if ((e as KeyboardEvent).key === "Enter") {
            this._search();
        }
    }

    _getAddonPhoto(addon: Addon): string {
        if (addon.photo) {
            return addon.photo.toString();
        }
        return new URL('./assets/addon.svg', import.meta.url).toString();
    }

    _createAbsoluteLink(url: string) {
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        return `https://${url}`
    }

    // ---------------------- RENDERING ---------------------- //
    /**
     * Compose header of the component for both widget states
     * @returns HTML with component header
     */
    _renderHeader() {
        return html`
            <header class="panel">
                ${this._widgetState == 'detail'
                ? html`
                <button id="button-back" class='btnEmpty left' @click="${this._goBack}">${msg("Zpět na přehled", { id: "buttonBack" })}</button>
                <h1 class='centered'>${this._selectedAddon.name}</h1>
                `
                : html`
                <h1 class='centered'>${msg('Doplňky ABRA Flexi', { id: 'title' })}</h1>
                <!-- <label id="selectLocale">${msg("Jazyk", { id: "labelLanguage" })}
                    <select @change=${this._localeChanged}>
                        ${allLocales.map((locale) => html`
                            <option .value=${locale} ?selected=${locale === this._selectedLocale}>
                                ${locale}
                            </option>`
                )}
                    </select>
                </label> -->
                `}
            </header>
        `;
    }

    _renderSearchFilters() {
        return html`
        <div id='searchFilters'>
            <div class="selectWrapper">
                <label for='selectCategory'>${msg("Kategorie", { id: "labelCategory" })}</label>
                <select id='selectCategory' @change="${this._updateCategory}">
                    <option value="">--${msg("Všechny", { id: "optionAll" })}--</option>
        ${this._categories.map((category) => {
            return html`
                <option value="${category.id}" ?selected="${category.id === this._selectedCategory}">${this._localeCategoryName(category)}</option>
            `;
        })}
                </select>
            </div>
            <div class='searchWrapper'>
                <button @click="${this._search}">
                    <img src='${new URL('./assets/search.svg', import.meta.url).toString()}'>
                </button>
                <label for='search'>${msg("Vyhledat", { id: "labelSearch" })}</label>
                <input type="text" id="search" value="${this._searchPhrase}" @keydown="${this._searchOnEnter}"/>
                <button @click="${this._resetSearch}">
                    <img src='${new URL('./assets/cross.svg', import.meta.url).toString()}'>
                </button>
            </div>
        </div>
        `;

    }

    _renderAddonTags() {
        return html`
        <div id='addonTags'>
            <dl>
                <dt>${msg('Kategorie', { id: 'category' })}</dt>
            </dl>
        </div>
        `;

    }

    /**
     * Render function for cards of widget in #content
     * tabindex has to be present in <a> element because it has no href
     * @returns #content with addon cards
     */
    _renderOverview() {
        return this._addons.render({
            pending: () => html`
            <div class='cards'>
                ${Array.from({ length: this.addonsPerPage }, (_, i) => html`
                    <article class='addon loading'>
                        <addons-loader></addons-loader>
                    </article>
                `)}
            </div>`,
            complete: () => html`
            ${this._currentAddons.length > 0
                    ? html`
                <div class='cards'>
                ${repeat(this._currentAddons, (addon) => addon.id, (addon) => html`
                <article class='addon' tabindex='0' @click="${() => this._goToDetail(addon)}">
                    <img src='${this._getAddonPhoto(addon)}'>
                    <h2>${addon.name}</h2>
                    ${this._retrievePerex(addon)}
                        <span class='addonNote'>
                        ${addon.hasPrice
                            ? html`
                            ${msg('Zpoplatněno', { id: 'paid' })}
                        `
                            : html`
                            ${msg('Zdarma', { id: 'free' })}
                        `
                        }
                </span>
                </article>
                `)}
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
        const detail = document.createElement('div');
        detail.classList.add('detail');
        detail.innerHTML = this._selectedAddon.description;
        this._removeRedundantHTML(detail);
        return detail;
    }

    /**
     * Render footer for both widget states
     * @returns footer element centered with pager (overview) or install button (detail)
     */
    _renderFooter() {
        return html`
            <footer class="panel">
            ${this._widgetState == 'detail'
                ? html`
                        ${this._selectedAddon.partner
                        ? html`
                            <div class='partner left'>
                                <img src='${this._selectedAddon.partner.logo}'>
                                ${this._selectedAddon.partner.url
                                ? html`
                                    <a href="${this._createAbsoluteLink(this._selectedAddon.partner.url)}" target="_blank">
                                        <span>${this._selectedAddon.partner.name}</span>
                                    </a>
                                `
                                : html`<span>${this._selectedAddon.partner.name}</span>`}
                            </div>
                        `
                        : nothing}
                        ${this._selectedAddon.linkMore
                        ? html`
                            <a class="centered" href="${this._createAbsoluteLink(this._selectedAddon.linkMore)}" target="_blank">
                                <button class="btnEmpty" > ${msg('Zjistit více', { id: 'more-info' })} </button>
                            </a>
                        `
                        : nothing}
                        ${this._selectedAddon.installScript
                        ? html`
                            <button class="btnFull right" @click="${() => { }}" > ${msg('Instalovat', { id: 'install' })} </button>
                        `
                        : nothing}
                        `
                : html`
                    <div id = 'pager' class="panel centered" ?visible = "${this._addonsTotalPages == 0}" >
                        <button @click="${() => this._addonsPageNum--}" ?hidden = "${this._addonsPageNum == 0}" >
                            <img src='${new URL('./assets/arrow-left.svg', import.meta.url).toString()}' >
                        </button>
                    ${this._addonsTotalPages > 0
                        ? html`
                        <div class="centered">
                            ${this._addonsPageNum + 1}/${this._addonsTotalPages}
                        </div>
                        `
                        : nothing}
                        <button @click="${() => this._addonsPageNum++}" ?hidden = "${this._addonsPageNum + 1 >= this._addonsTotalPages}" >
                            <img src='${new URL('./assets/arrow-right.svg', import.meta.url).toString()}' >
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
                : nothing
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