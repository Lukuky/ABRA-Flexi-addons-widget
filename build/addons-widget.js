import { css, LitElement, html } from 'lit';
import { Task } from '@lit/task';
import { property, customElement, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { configureLocalization, localized, msg } from '@lit/localize';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const sourceLocale = `cs`;
const targetLocales = [
    `de`,
    `en`,
    `sk`,
];
const allLocales = [
    `cs`,
    `de`,
    `en`,
    `sk`,
];

let LoaderElement = class LoaderElement extends LitElement {
    constructor() {
        super(...arguments);
        this.size = 6;
    }
    render() {
        return html `
        <div class="loader"></div>
        `;
    }
};
LoaderElement.styles = css `
        :host {
            font-family: var(--font-family, Arial, sans-serif);
            font-size: 0.9rem;
            --width-height: var(--size, 2em);
            --border-size: 0.3em;
        }

        .loader {
            width: var(--width-height);
            height: var(--width-height);
            border: var(--border-size) solid var(--background-color, #eee); 
            border-top: var(--border-size) solid var(--main-color, #fb4);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
        }
    `;
__decorate([
    property({ type: Number })
], LoaderElement.prototype, "size", void 0);
LoaderElement = __decorate([
    customElement('addons-loader')
], LoaderElement);

const localizedTemplates = new Map(targetLocales.map((locale) => [locale, import(`../generated/locales/${locale}.js`)]));
const { getLocale, setLocale } = configureLocalization({
    sourceLocale,
    targetLocales,
    loadLocale: (locale) => __awaiter(void 0, void 0, void 0, function* () { return localizedTemplates.get(locale); }),
});
let WidgetElement = class WidgetElement extends LitElement {
    constructor() {
        super();
        this._categories = [];
        this._currentAddons = [];
        this._addonsPageNum = 0;
        this._addonsTotalPages = 0;
        this._widgetState = 'overview';
        this._selectedAddon = null;
        this._selectedCategory = null;
        this._searchPhrase = "";
        this.addonsPerPage = 8;
        this._TaskCategories = new Task(this, {
            task: (_a, _b) => __awaiter(this, [_a, _b], void 0, function* ([], { signal }) {
                let url = new URL('https://support.flexibee.eu/api/categories');
                const request = new Request(url);
                const response = yield fetch(request, { signal });
                if (!response.ok) {
                    throw new Error(response.status.toString());
                }
                const data = yield response.json();
                console.log(data);
                return data;
            }),
            args: () => [this._addonsPageNum, this.addonsPerPage]
        });
        this._addons = new Task(this, {
            task: (_a, _b) => __awaiter(this, [_a, _b], void 0, function* ([category, page, size, search], { signal }) {
                let url = new URL('https://support.flexibee.eu/api/addons/search');
                if (category)
                    url.searchParams.append('categoryId', category.toString());
                url.searchParams.append('page', page.toString());
                url.searchParams.append('size', size.toString());
                if (search)
                    url.searchParams.append('search', search);
                const request = new Request(url);
                const response = yield fetch(request, { signal });
                if (!response.ok) {
                    throw new Error(response.status.toString());
                }
                const data = yield response.json();
                console.log(data);
                this._addonsTotalPages = data.totalPages;
                this._currentAddons = data.content;
                return data;
            }),
            args: () => [this._selectedCategory, this._addonsPageNum, this.addonsPerPage, this._searchPhrase]
        });
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
    _goToDetail(addon) {
        this._selectedAddon = addon;
        this._widgetState = 'detail';
    }
    _updateCategory(e) {
        this._addonsPageNum = 0;
        this._selectedCategory = parseInt(e.target.value);
    }
    _clear() {
        this._addonsPageNum = 0;
        this.shadowRoot.getElementById("search").value = "";
        this._searchPhrase = "";
    }
    _search() {
        this._addonsPageNum = 0;
        this._searchPhrase = this.shadowRoot.getElementById("search").value;
    }
    _removeStyles(element) {
        Array.from(element.getElementsByTagName('style')).forEach(style => { var _a; return (_a = style.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(style); });
        Array.from(element.getElementsByTagName('*')).forEach(element => {
            element.removeAttribute("style");
            element.removeAttribute("color");
        });
    }
    _retrievePerex(addon) {
        const perex = document.createElement('p');
        perex.innerHTML = addon.perex;
        this._removeStyles(perex);
        return perex;
    }
    _localeChanged(event) {
        const newLocale = event.target.value;
        const url = new URL(window.location.href);
        if (url.searchParams.get('locale') !== newLocale) {
            url.searchParams.set('locale', newLocale);
            window.location.assign(url.href);
        }
    }
    _renderHeader() {
        return html `
            <header class="panel">
                ${this._widgetState == 'detail'
            ? html `
                <button id="buttonBack" @click="${this._goBack}">Back</button>
                <h1 class='centered'>Název doplňku</h1>
                `
            : html `
                <h1 class='centered'>${msg('Doplňky ABRA Flexi', { id: 'title' })}</h1>
                <div id='searchFilters'>
                    <label for='selectCategory'>Category
                        <select id='selectCategory' @change="${this._updateCategory}">
                            <option value="">--All--</option>
                            ${this._categories.map((category) => {
                let name;
                console.log();
                switch (getLocale.toString()) {
                    case 'cs':
                        name = category.nameCs;
                        break;
                    case 'sk':
                        name = category.nameSk;
                        break;
                    case 'en':
                        name = category.nameEn;
                        break;
                    case 'de':
                        name = category.nameDe;
                        break;
                    default: name = category.nameCs;
                }
                return html `
                            <option value="${category.id}" ?selected="${category.id === this._selectedCategory}">${name}</option>
                        `;
            })}
                        </select>
                    </label>
                    <div>
                        <label>Search
                            <input type="text" id="search" value="${this._searchPhrase}"/>
                        </label>
                        <button @click="${this._clear}">Clear</button>
                        <button @click="${this._search}">Search</button>
                    </div>
                </div>
                `}
                <label>Language
                    <select @change=${this._localeChanged}>
                        ${allLocales.map((locale) => html `
                            <option .value=${locale} ?selected=${locale === getLocale()}>
                                ${locale}
                            </option>`)}
                    </select>
                </label>
            </header>
        `;
    }
    _renderPreview() {
        return html `
        <div id='content' class='cards' tabindex='0'>
            ${Array.from({ length: this.addonsPerPage }, (_, i) => html `
                <article class='addon loading'>
                    <addons-loader></addons-loader>
                    <h2>Doplněk ABRA Flexi</h2>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                </article>
            `)}
        </div>`;
    }
    _renderOverview() {
        return html `
        <div id='content' class='cards' tabindex='0'>
        ${repeat(this._currentAddons, (addon) => addon.id, (addon) => html `
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
    _renderDetail() {
        const newContent = document.createElement('div');
        newContent.id = 'content';
        newContent.classList.add('detail');
        newContent.innerHTML = this._selectedAddon.description;
        this._removeStyles(newContent);
        return newContent;
    }
    _renderFooter() {
        return html `
        <footer class="panel">
                ${this._widgetState == 'detail'
            ? html `
                <button class="centered" @click="${() => { }}">Instalovat</button>
                `
            : html `
                <div class="panel centered">
                    ${this._addonsPageNum == 0 ? `` : html `<button @click="${() => this._addonsPageNum--}"> < </button>`}
                    <div class="centered">
                        ${this._addonsPageNum + 1}/${this._addonsTotalPages}
                    </div>
                    ${this._addonsPageNum + 1 < this._addonsTotalPages ? html `<button @click="${() => this._addonsPageNum++}"> > </button>` : ""}
                </div>
                `}
        </footer>`;
    }
    render() {
        return html `
        <div id='container'>
            ${this._renderHeader()}
            ${this._widgetState == 'overview'
            ? this._addons.render({
                initial: () => html `<p>Waiting to start task</p>`,
                pending: () => this._renderPreview(),
                complete: () => this._renderOverview(),
                error: (error) => html `<p>Oops, something went wrong: ${error}</p>`,
            })
            : this._renderDetail()}
            ${this._renderFooter()}
        <slot></slot>
        </div>`;
    }
};
WidgetElement.styles = css `
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
__decorate([
    state()
], WidgetElement.prototype, "_categories", void 0);
__decorate([
    state()
], WidgetElement.prototype, "_currentAddons", void 0);
__decorate([
    state()
], WidgetElement.prototype, "_addonsPageNum", void 0);
__decorate([
    state()
], WidgetElement.prototype, "_addonsTotalPages", void 0);
__decorate([
    state()
], WidgetElement.prototype, "_widgetState", void 0);
__decorate([
    state()
], WidgetElement.prototype, "_selectedAddon", void 0);
__decorate([
    state()
], WidgetElement.prototype, "_selectedCategory", void 0);
__decorate([
    state()
], WidgetElement.prototype, "_searchPhrase", void 0);
__decorate([
    property({ type: Number })
], WidgetElement.prototype, "addonsPerPage", void 0);
WidgetElement = __decorate([
    localized(),
    customElement('addons-widget')
], WidgetElement);
