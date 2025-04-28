import { LitElement, html, css } from 'lit';
import { Task } from '@lit/task';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { msg, localized } from '@lit/localize';
import { configureLocalization } from '@lit/localize';
import { sourceLocale, targetLocales, allLocales } from '../generated/locale-codes.js';
import './loader.ts';

/**
 * Pre-rendering localizations
 * Specified in locale-codes.js generated from lit-localize.json
 */
const localizedTemplates = new Map(
    targetLocales.map((locale) => [locale, import(`../generated/locales/${locale}.js`)])

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

/**
 * Addons informations
 * keys from Flexibee API
 * include only used keys, not all from API response
 */
interface Addon {
    active: boolean,
    api: boolean,
    backgroundColor: string,
    categories: string[],
    code: string | null,
    description: string,
    developer: string,
    id: Number,
    isPrivate: boolean,
    perex: string,
    photo: URL
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
        :host {
            font-family: var(--font-family, Arial, sans-serif);
            font-size: 0.9rem;
            --card-height: 15rem;
            --card-gap: 1rem;
            --main-border: solid #ccc 0.2rem;
            --main-border-radius: 0.5rem;
            --input-border: solid #666 0.1rem;
            --input-border-radius: 0.3rem;
        }

        * {
            padding: 0;
            margin: 0;
        }

        button, select, input {
            font-size: 1.1rem;
            border: var(--input-border);
            border-radius: var(--input-border-radius);
            background-color: var(--bg-color-primary, #eee);
            max-width: 100%;
            padding: 0.2em;
        }

        label {
            color: black;
        }
        
        #container {
            display: flex;
            flex-flow: column nowrap;
            align-items: stretch;
            border: var(--main-border);
            border-radius: var(--main-border-radius);
            background-color: var(--bg-color-primary, #ddd);
            padding: 0.5em;
        }

        .panel {
            display: grid;
            align-items: center;
            grid-template-columns: 1fr auto 1fr;
            gap: 1em;
        }

        .panel .centered {
            grid-column-start: 2;
            text-align: center;
        }

        header, footer {
            padding: 0.3em;
        }

        #buttonBack {
            justify-self: left;
        }

        #selectLocale {
            justify-self: end;
        }

        #content {
            height: calc(var(--min-rows, 2) * (var(--card-height) + var(--card-gap)) + var(--card-gap));
            padding: var(--card-gap);
            overflow-y: scroll;
            border: var(--border-main);
            background-color: var(--bg-color-main, #eee);
        }

        #content.extended {
            height: var(--max-rows, 4);
        }

        #searchFilters {
            grid-column-start: 1;
            grid-column-end: 4;
            order: 2;
            /* position: relative; */
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            gap: 1em;
        }

        .cards {
            display: flex;
            flex-flow: row wrap;
            overflow-y: scroll;
            gap: var(--card-gap);
        }

        .addon {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            flex-grow: 1;
            text-align: center;
            gap: var(--card-gap);
            width: 13em;
            height: var(--card-height);
            padding: 1em;
            background-color: #fff;
            box-shadow: none;
            transition: box-shadow 0.2s ease-in;
            cursor: pointer;
        }

        .addon:hover {
            box-shadow: 0 0 1em #bbb;
        }

        .addon img {
            object-fit: contain;
            max-width: 80%;
            height: 4em;
        }
        .addon p {
            overflow-y: hidden;
        }

        .loading {
            h1, h2, h3, p {
                filter: blur(0.5em);
            }
        }

        .loading:hover {
            box-shadow: none;
            cursor: progress;
        }

        .addon addons-loader {
            --size: 3em;
            margin: 0.5em;
        }

        .detail h2 {
            padding: 1em 0 0.5em 0;
        }

        .detail li {
            margin-left: 1em;
        }

        .detail img {
            max-width: 100%;
            margin: 0.5em;
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
    private _TaskCategories = new Task(this, {

        task: async ([], { signal }) => {
            const url = new URL('https://support.flexibee.eu/api/categories');
            const request = new Request(url);
            const response = await fetch(request, { signal });

            if (!response.ok) { throw new Error(response.status.toString()); }

            const data: Category[] = await response.json();
            console.log(data);
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
            const request = new Request(url);
            const response = await fetch(request, { signal });

            if (!response.ok) { throw new Error(response.status.toString()); }

            const data: AddonsSearch = await response.json();
            console.log(data);
            this._addonsTotalPages = data.totalPages;
            this._currentAddons = data.content;

            return data;
        },

        args: () => [this._selectedLocale, this._selectedCategory, this._addonsPageNum, this.addonsPerPage, this._searchPhrase]

    });


    // ---------------------- CONSTRUCTOR ---------------------- //
    /**
     * Initialise component and fetch addons categories for filtering
     */
    constructor() {
        super();
        this._TaskCategories.run();
        this._TaskCategories.taskComplete.then((categories) => {
            this._categories = categories || [];
        }).catch((error) => {
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
    _removeStyles(element: HTMLElement): void {
        Array.from(element.getElementsByTagName('style')).forEach(style => style.parentNode?.removeChild(style));
        Array.from(element.getElementsByTagName('*')).forEach(element => {
            element.removeAttribute("style");
            element.removeAttribute("color");
        });
    }

    /**
     * Getting perex out of addon fetched from Flexibee API
     * @param addon Addon to retrieve perex from
     * @returns addon perex in HTML
     */
    _retrievePerex(addon: Addon) {
        const perex = document.createElement('p');
        perex.innerHTML = addon.perex;
        this._removeStyles(perex);
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
                <button id="buttonBack" @click="${this._goBack}">${msg("Zpět", { id: "buttonBack" })}</button>
                <h1 class='centered'>Název doplňku</h1>
                `
                : html`
                <h1 class='centered'>${msg('Doplňky ABRA Flexi', { id: 'title' })}</h1>
                <div id='searchFilters'>
                    <label for='selectCategory'>${msg("Kategorie", { id: "labelCategory" })}
                        <select id='selectCategory' @change="${this._updateCategory}">
                            <option value="">--${msg("Všechny", { id: "optionAll" })}--</option>
                    ${this._categories.map((category) => {
                    return html`
                        <option value="${category.id}" ?selected="${category.id === this._selectedCategory}">${this._localeCategoryName(category)}</option>
                    `;
                })}
                        </select>
                    </label>
                    <div>
                        <label>${msg("Vyhledat", { id: "labelSearch" })}
                            <input type="text" id="search" value="${this._searchPhrase}" @keydown="${this._searchOnEnter}"/>
                        </label>
                        <button @click="${this._resetSearch}">${msg("Reset", { id: "buttonResetSearch" })}</button>
                        <button @click="${this._search}">${msg("Vyhledat", { id: "buttonSearch" })}</button>
                    </div>
                </div>
                `}
                <label id="selectLocale">${msg("Jazyk", { id: "labelLanguage" })}
                    <select @change=${this._localeChanged}>
                        ${allLocales.map((locale) => html`
                            <option .value=${locale} ?selected=${locale === this._selectedLocale}>
                                ${locale}
                            </option>`
                )}
                    </select>
                </label>
            </header>
        `;
    }

    /**
     * Render component content in pseudo-state of loading fetching addons
     * Composed to have layout style same as result
     * @returns #content with addons "empty" cards
     */
    _renderPreview() {
        return html`
        <div id='content' class='cards' tabindex='0'>
            ${Array.from({ length: this.addonsPerPage }, (_, i) => html`
                <article class='addon loading'>
                    <addons-loader></addons-loader>
                    <h2>Doplněk ABRA Flexi</h2>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                </article>
            `)}
        </div>`;
    }

    /**
     * Render function for cards of widget in #content
     * tabindex has to be present in <a> element because it has no href
     * @returns #content with addon cards
     */
    _renderOverview() {
        return html`
        <div id='content' class='cards' tabindex='0'>
        ${repeat(this._currentAddons, (addon) => addon.id, (addon) => html`
            <a class='addon' tabindex='0' @click="${() => this._goToDetail(addon)}">
                <article>
                    <image src='${addon.photo.toString()}'></image>
                    <h2>Název doplňku</h2>
                    ${this._retrievePerex(addon)}
                </article>
            </a>
            `)}
        </div>`;
    }

    /**
     * Render detail of selected addon as a component content
     * @returns style unified description of addon
     */
    _renderDetail() {
        const newContent = document.createElement('div');
        newContent.id = 'content';
        newContent.classList.add('detail');
        newContent.innerHTML = this._selectedAddon.description;
        this._removeStyles(newContent);
        return newContent;
    }

    /**
     * Render footer for both widget states
     * @returns footer element centered with pager (overview) or install button (detail)
     */
    _renderFooter() {
        return html`
        <footer class="panel">
                ${this._widgetState == 'detail'
                // <image src='${this._selectedAddon.photo.toString()}'></image>
                ? html`
                <button class="centered" @click="${() => { }}">${msg('Instalovat', { id: 'install' })}</button>
                `
                : html`
                <div class="panel centered">
                    ${this._addonsPageNum == 0 ? `` : html`<button @click="${() => this._addonsPageNum--}"> < </button>`}
                    <div class="centered">
                        ${this._addonsPageNum + 1}/${this._addonsTotalPages}
                    </div>
                    ${this._addonsPageNum + 1 < this._addonsTotalPages ? html`<button @click="${() => this._addonsPageNum++}"> > </button>` : ""}
                </div>
                `
            }
        </footer>`;
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
                ? this._addons.render({
                    initial: () => html`<p>Waiting to start task</p>`,
                    pending: () => this._renderPreview(),
                    complete: () => this._renderOverview(),
                    error: (error) => html`<p>Oops, something went wrong: ${error}</p>`,
                })
                : this._renderDetail()
            }
            ${this._renderFooter()}
        <slot></slot>
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