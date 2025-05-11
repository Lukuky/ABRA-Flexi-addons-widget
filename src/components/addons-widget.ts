import { LitElement, html, css, nothing } from 'lit';
import { Task, TaskStatus } from '@lit/task';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { msg, localized } from '@lit/localize';
import { configureLocalization } from '@lit/localize';

import { svgAddon, svgArrowLeft, svgArrowRight, svgCross, svgSearch } from '../assets/assets';
import { sourceLocale, targetLocales, allLocales } from '../generated/locale-codes';
import './addons-loader';
/**
 * Pre-rendering localizations
 * Specified in locale-codes.js generated from lit-localize.json
 */
import { templates as deTemplates } from '../generated/locales/de';
import { templates as enTemplates } from '../generated/locales/en';
import { templates as skTemplates } from '../generated/locales/sk';

const localizedTemplates = new Map([
    ['de', deTemplates],
    ['en', enTemplates],
    ['sk', skTemplates]
]);

/**
 * Configure localization
 * Locales from localizedTemplates
 */
const { getLocale, setLocale } = configureLocalization({
    sourceLocale,
    targetLocales,
    loadLocale: async (locale: "de" | "en" | "sk") => {
        const templates = localizedTemplates.get(locale);
        return { templates };
    },
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
    id: number,
    installScript?: string,
    installed?: boolean,
    linkMore?: string,
    name: string,
    partner: Partner,
    perex: string,
    photo: URL,
    uninstallScript?: string,
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
            --font-family: Arial, serif;
            --font-size: 1rem;
            --color-primary: #0e5dbb;
            --text-color-primary: #000000;
            --text-color-secondary: #6d6d70;
            --bg-color-primary: #fafafa;
            --bg-color-secondary: #f4f4f4;
            --bg-color-interactive: #ffffff;
            --bg-color-tag: #dbdbdb;
            --border-primary: solid #aaaaaa 0.1em;
            --border-interactive: solid #9c9c9c 0.1em;
            --border-radius-primary: 0.4em;
            --border-radius-interactive: 0.4em;
            --icons-color: var(--text-color-secondary);
            --addon-overview-height: 20em;
            --addon-overview-margin: 0.6em;
            --overview-rows: 2;
            --margin-container: 0;
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

        button > svg {
            vertical-align: middle;
        }

        label {
            font-size: 0.7em;
        }

        svg path {
            stroke: var(--icons-color);
        }

        select {
            min-width: 6em;
        }

        #container {
            display: grid;
            grid-template-columns: 1fr;
            justify-items: stretch;
            border: var(--border-primary);
            border-radius: var(--border-radius-primary);
            background-color: var(--bg-color-primary);
            padding: 1em;
            margin: var(--margin-container);
        }

        #content {
            overflow-y: scroll;
            height: calc(var(--overview-rows) * var(--addon-overview-height) + 2 * var(--addon-overview-margin));
            border: var(--border-primary);
            border-radius: var(--border-radius-primary);
            margin: 1em 0;
        }

        #searchFilters {
            display: flex;
            flex-flow: row wrap;
            align-items: stretch;
            justify-content: space-between;
            padding-top: 1em;
            gap: 1em;
        }

        #pager svg {
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
            text-align: center;
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
            padding: var(--addon-overview-margin);
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

        .cardWrapper {
            display: flex;
            align-items: stretch;
            height: var(--addon-overview-height);
        }

        .addon {
            position: relative;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            flex-grow: 1;
            text-align: center;
            gap: 0.6em;
            padding: 1.5em;
            margin: var(--addon-overview-margin);
            background-color: var(--bg-color-interactive);
            box-shadow: none;
            transition: box-shadow 0.2s ease-in;
            cursor: pointer;
        }

        .addon:hover {
            box-shadow: 0 0.5em 1em #bbb;
        }

        .addon img,
        .addon svg {
            object-fit: contain;
            max-width: 70%;
            height: 3em;
        }

        .addon svg path {
            stroke: var(--text-color-primary);
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

        addons-loader {
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

        .searchWrapper svg {
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

       #addonTags {
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-items: center;
            gap: 0.8em;
            padding-top: 0.5em;
        }

       #addonTags dt {
            color: var(--text-color-secondary);
        }

       #addonTags dt:after {
            content: ':';
        }

       #addonTags dd {
            font-size: 0.8em;
            padding: 0.5em;
            border-radius: var(--border-radius-interactive);
            background-color: var(--bg-color-tag);
        }

    `;

    // ---------------------- PROPERTIES ---------------------- //
    /**
     * Maximum amount of addons on one page of overview
     */
    @property({ type: Number })
    addonsPerPage: number = 12;

    @property({ type: String })
    installEndpoint?: string;

    @property({ type: Boolean })
    localeSelect: boolean = false;

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

    @state()
    private _installedAddons: Set<number> = new Set<number>;

    @state()
    private _cycleInstall: boolean = false;

    @state()
    private _cycleUninstall: boolean = false;

    // ---------------------- LIT TASKS ---------------------- //
    /**
     * Task to setup locales
     */
    private _taskLocales = new Task(this, {

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
    private _taskCategories = new Task(this, {
        autoRun: true,

        args: () => [],

        task: async ([], { signal }) => {
            const url = new URL('https://support.flexibee.eu/api/categories');
            const response = await fetch(url, { signal });

            if (!response.ok) { throw new Error(response.status.toString()); }

            const data: Category[] = await response.json() as Array<Category>;
            this._categories = data;
            return data;
        },

    });

    /**
     * Task fetching amount of addons from Flexibee API
     * Run each time on attributes change, so whenever filter or page changes
     */
    private _taskAddons = new Task(this, {
        autoRun: true,

        args: () => [this._selectedLocale, this._selectedCategory, this._addonsPageNum, this.addonsPerPage, this._searchPhrase, this.installEndpoint, this._installedAddons],

        task: async ([langOpt, category, page, size, search, installEndpoint, installedAddons], { signal }) => {
            let url = new URL('https://support.flexibee.eu/api/addons/search');
            url.searchParams.append('langOpt', langOpt);
            if (category) url.searchParams.append('categoryId', category.toString());
            url.searchParams.append('page', page.toString());
            url.searchParams.append('size', size.toString());
            if (search) url.searchParams.append('search', search);

            const response = await fetch(url, { signal });

            if (!response.ok) {
                throw new Error(response.status.toString());
            }

            const data: AddonsSearch = await response.json() as AddonsSearch;

            this._addonsTotalPages = data.totalPages;

            if (installEndpoint) {
                this._currentAddons = data.content.map(addon => ({
                    ...addon,
                    installed: installedAddons.has(addon.id),
                }));
                console.log("2");
            }

            return data;
        }
    });

    private _taskInstall = new Task(this, {
        autoRun: false,

        args: () => [],

        task: async ([], { signal }) => {
            this._cycleInstall = true;
            if (!this.installEndpoint
                || !this._selectedAddon
                || !this._selectedAddon.installScript) {
                throw new Error("Missing properties for installing.");
            }
            // TODO install addon using installScript

            // Mock wait for install
            await new Promise(resolve => setTimeout(resolve, 5000));

            this._installedAddons.add(this._selectedAddon.id);
            // this._taskAddons.run();
            this._selectedAddon.installed = true;
        }
    });

    private _taskUninstall = new Task(this, {
        autoRun: false,

        args: () => [],

        task: async ([], { signal }) => {
            this._cycleUninstall = true;
            if (!this.installEndpoint
                || !this._selectedAddon
                || !this._selectedAddon.uninstallScript) {
                throw new Error();
            }
            // TODO uninstall addon using uninstallScript

            // Mock wait for uninstall
            await new Promise(resolve => setTimeout(resolve, 3000));

            this._installedAddons.delete(this._selectedAddon.id);
            // this._taskAddons.run();
            this._selectedAddon.installed = false;
        }
    });

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

    _createAbsoluteLink(url: string) {
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        return `https://${url}`
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
            <header class="panel">
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
                    <label id="selectLocale">${msg("Jazyk", { id: "labelLanguage" })}</label>
                    <select id='selectLocale' @change="${this._localeChanged}">
                        ${allLocales.map((locale) => html`
                            <option .value=${locale} ?selected=${locale === this._selectedLocale}>
                                ${locale}
                            </option>`
                )}
                    </select>
                </div>`
                : nothing}
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
                    ${svgSearch()}
                </button>
                <label for='search'>${msg("Vyhledat", { id: "labelSearch" })}</label>
                <input type="text" id="search" value="${this._searchPhrase}" @keydown="${this._searchOnEnter}"/>
                <button @click="${this._resetSearch}">
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
                    <article class='addon' tabindex='0' @click="${() => this._goToDetail(addon)}">
                        ${addon.photo
                            ? html`<img src='${addon.photo.toString()}'>`
                            : svgAddon()
                        }
                        <h2>${addon.name}</h2>
                        ${this._retrievePerex(addon)}
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
                            <button class='btnEmpty' @click='${() => { this._cycleInstall = false }}'>${msg('Zpět na detail', { id: 'back-to-detail' })}</button>
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
                            <button class='btnEmpty' @click='${() => { this._cycleUninstall = false }}'>${msg('Zpět na detail', { id: 'back-to-detail' })}</button>
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
                        ? this.installEndpoint
                            ? !this._selectedAddon.installed
                                ? html`
                                    <button class="btnFull right" ?hidden=${this._inProgress()} @click="${this._install}" > ${msg('Instalovat', { id: 'install' })} </button>
                                `
                                : html`
                                    <button class="btnFull right" ?hidden=${this._inProgress()} @click="${this._uninstall}" > ${msg('Odinstalovat', { id: 'uninstall' })} </button>
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
                        <button @click="${() => this._addonsPageNum--}" ?hidden="${this._addonsPageNum == 0}" >
                            ${svgArrowLeft()}
                        </button>
                    ${this._addonsTotalPages > 0
                        ? html`
                        <div class="centered">
                            ${this._addonsPageNum + 1}/${this._addonsTotalPages}
                        </div>
                        `
                        : nothing}
                        <button @click="${() => this._addonsPageNum++}" ?hidden="${this._addonsPageNum + 1 >= this._addonsTotalPages}" >
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