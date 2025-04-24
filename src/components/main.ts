import { LitElement, html, css } from 'lit';
import { Task } from '@lit/task';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import './loader.ts';

type WidgetState = 'overview' | 'detail';

interface Category {
    id: number,
    nameCs: string,
    nameSk: string,
    nameEn: string,
    nameDe: string,
    active: true
}

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

interface AddonsSearch {
    first: boolean,
    last: boolean,
    totalPages: number,
    content: Addon[]

};

@customElement('addons-widget')
export class WidgetElement extends LitElement {
    static styles = css`
        :host {
            font-family: var(--font-family, Arial, sans-serif);
            font-size: 0.9rem;
            --card-height: 15rem;
            --card-gap: 1rem;
            --border-main: solid #ccc 0.2em;
        }

        * {
            /* border: solid black 0.01em; */
            padding: 0;
            margin: 0;
        }

        button, select, input {
            font-size: 1.1rem;
            border: var(--border-main);
            background-color: var(--bg-color-primary, #eee);
            max-width: 100%;
            padding: 0.2em;
        }
        
        #container {
            display: flex;
            flex-flow: column nowrap;
            align-items: stretch;
            border: var(--border-main);
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
            color: #666;
        }

        #buttonBack {
            justify-self: left;
        }

        #selectLanguage {
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

        /* #searchFilters label {
            position: absolute;
            top: -1em;
        } */

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

    static languages = ['cz', 'sk', 'en', 'de'];

    @state()
    private _categories: Category[] = [];

    @state()
    private _currentAddons: Addon[] = [];

    @state()
    private _addonsPageNum: number = 0;

    @state()
    private _addonsTotalPages: number = 0;

    @state()
    private _widgetState: WidgetState = 'overview';

    @state()
    private _selectedAddon: Addon | null = null;

    @state()
    private _language: string = WidgetElement.languages[0];

    @state()
    private _selectedCategory: number | null = null;

    @state()
    private _searchPhrase: string = "";

    @property({ type: Number })
    addonsPerPage = 8;

    private _TaskCategories = new Task(this, {

        task: async ([], { signal }) => {
            let url = new URL('https://support.flexibee.eu/api/categories');
            const request = new Request(url);
            const response = await fetch(request, { signal });

            if (!response.ok) { throw new Error(response.status.toString()); }

            const data: Category[] = await response.json();
            console.log(data);
            return data;
        },

        args: () => [this._addonsPageNum, this.addonsPerPage]

    });

    private _addons = new Task(this, {

        task: async ([langOpt, category, page, size, search], { signal }) => {
            let url = new URL('https://support.flexibee.eu/api/addons/search');
            // url.searchParams.append('langOpt', `\'${langOpt}\'`);
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

        args: () => [this._language, this._selectedCategory, this._addonsPageNum, this.addonsPerPage, this._searchPhrase]

    });

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

    _goBack() {
        this._widgetState = 'overview';
    }

    _goToDetail(addon: Addon) {
        this._selectedAddon = addon;
        this._widgetState = 'detail';
    }

    _updateCategory(e: Event) {
        this._addonsPageNum = 0;
        this._selectedCategory = parseInt((e.target as HTMLSelectElement).value);
    }

    _clear() {
        this._addonsPageNum = 0;
        (this.shadowRoot.getElementById("search") as HTMLInputElement).value = "";
        this._searchPhrase = "";
    }

    _search() {
        this._addonsPageNum = 0;
        this._searchPhrase = (this.shadowRoot.getElementById("search") as HTMLInputElement).value;
        console.log(this._searchPhrase);
    }

    _renderHeader() {
        return html`
            <header class="panel">
                ${this._widgetState == 'detail'
                ? html`
                <button id="buttonBack" @click="${this._goBack}">Back</button>
                <h1 class='centered'>Název doplňku</h1>
                `
                : html`
                <h1 class='centered'>Doplňky ABRA Flexi</h1>
                <div id='searchFilters'>
                    <label for='selectCategory'>Category
                        <select id='selectCategory' @change="${this._updateCategory}">
                            <option value="">--All--</option>
                            ${this._categories.map((category) => {
                    let name: string;
                    switch (this._language) {
                        case 'cz': name = category.nameCs;
                            break;
                        case 'sk': name = category.nameSk;
                            break;
                        case 'en': name = category.nameEn;
                            break;
                        case 'de': name = category.nameDe;
                            break;
                        default: throw ("Intern language incobatibility");
                    }
                    return html`
                            <option value="${category.id}" ?selected="${category.id === this._selectedCategory}">${name}</option>
                        `;
                })}
                        </select>
                    </label>
                    <div>
                        <input type="text" id="search" value="${this._searchPhrase}"/>
                        <button @click="${this._clear}">Clear</button>
                        <button @click="${this._search}">Search</button>
                    </div>
                </div>
                `}
                <select id="selectLanguage">
                    ${WidgetElement.languages.map((code) => html`
                        <option value="${code}">${code}</option>
                    `)}
                </select>
            </header>
        `;
    }

    _renderPreview() {
        return html`
        <div id='content' class='cards'>
            ${Array.from({ length: this.addonsPerPage }, (_, i) => html`
                <article class='addon loading'>
                    <addons-loader></addons-loader>
                    <h2>Doplněk ABRA Flexi</h2>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                </article>
            `)}
        </div>`;
    }

    _removeStyles(element: HTMLElement): void {
        Array.from(element.getElementsByTagName('style')).forEach(style => style.parentNode?.removeChild(style));
        Array.from(element.getElementsByTagName('*')).forEach(element => {
            element.removeAttribute("style");
            element.removeAttribute("color");
        });
    }

    _retrievePerex(addon: Addon) {
        const perex = document.createElement('p');
        perex.innerHTML = addon.perex;
        this._removeStyles(perex);
        return perex;
    }

    _renderOverview() {
        return html`
        <div id='content' class='cards'>
        ${repeat(this._currentAddons, (addon) => addon.id, (addon) => html`
                <article class='addon' @click="${() => this._goToDetail(addon)}">
                    <image src='${addon.photo.toString()}'></image>
                    <h2>Název doplňku</h2>
                    ${this._retrievePerex(addon)}
                </article>
            `)}
        </div>`;
    }

    _renderDetail() {
        const newContent = document.createElement('div');
        newContent.id = 'content';
        newContent.classList.add('detail');
        newContent.innerHTML = this._selectedAddon.description;
        this._removeStyles(newContent);
        return newContent;
    }

    _renderFooter() {
        return html`
        <footer class="panel">
                ${this._widgetState == 'detail'
                // <image src='${this._selectedAddon.photo.toString()}'></image>
                ? html`
                <button class="centered" @click="${() => { }}">Instalovat</button>
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