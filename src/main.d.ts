import { LitElement } from 'lit';
import { Task } from '@lit/task';
import './loader';
/**
 * Categories of addons
 * keys from Flexibee API response
 */
interface Category {
    id: number;
    nameCs: string;
    nameSk: string;
    nameEn: string;
    nameDe: string;
    active: boolean;
}
interface Partner {
    id: number;
    logo: string;
    name: string;
    url: string;
}
/**
 * Addons informations
 * keys from Flexibee API
 * include only used keys, not all from API response
 */
interface Addon {
    active: boolean;
    api: boolean;
    categories: string[];
    code: string;
    description: string;
    developer: string;
    hasPrice: boolean;
    id: Number;
    installScript: string | null;
    linkMore: string | null;
    name: string;
    partner: Partner;
    perex: string;
    photo: URL;
    uninstallScript: string | null;
    variants: string[];
    www: string | null;
}
/**
 * Main addons widget Lit web component
 */
export declare class WidgetElement extends LitElement {
    /**
     * All styles applied to widget component
     * Changes only able with rewriting styles for addons-widget selector
     * or by specifying undefined CSS variables rewriting default values
     */
    static styles: import("lit").CSSResult;
    /**
     * All categories of addons
     * to be fetched from Flexibee API
     */
    private _categories;
    /**
     * Addons in current page in overview
     */
    private _currentAddons;
    /**
     * Number of current page of addons overview
     * Nulled each time the filter parameters are changed
     */
    private _addonsPageNum;
    /**
     * Total number of pages for currently filtered addons
     */
    private _addonsTotalPages;
    /**
     * State of the widget
     * overview (default) or detail
     */
    private _widgetState;
    /**
     * Selected addon that is exposed in detail state
     */
    private _selectedAddon;
    /**
     * Filtering addons category in overview
     */
    private _selectedCategory;
    /**
     * Phrase in text input to be full-text searched among addons
     */
    private _searchPhrase;
    /**
     * Selected locale modifying messages and switching among fetched data
     */
    private _selectedLocale;
    /**
     * Maximum amount of addons on one page of overview
     */
    addonsPerPage: number;
    /**
     * Task to setup locales
     */
    private _TaskLocales;
    /**
     * Task fetching all addons categories from Flexibee API to component's state
     */
    _TaskCategories: Task<readonly [], Category[]>;
    /**
     * Task fetching amount of addons from Flexibee API
     * Run each time on attributes change, so whenever filter or page changes
     */
    private _addons;
    /**
     * Fetch categories after connecting to DOM
     */
    connectedCallback(): void;
    /**
     * Change state (from detail) to overview
     */
    _goBack(): void;
    /**
     * Change state to detail and set addon to be shown
     * @param addon Addon to be shown in detail
     */
    _goToDetail(addon: Addon): void;
    /**
     * Update category on categories select element change
     * Nulling the page number
     * @param e Event for targeting select for the value
     */
    _updateCategory(e: Event): void;
    /**
     * Reset page number to zero and setting search phrase to empty string
     */
    _resetSearch(): void;
    /**
     * Set searchPhrase from text input (and cause fetching new addons)
     * Nulling the page number
     */
    _search(): void;
    /**
     * Remove all style elements and attributes from element subtree including color attribute
     * Used for unify descriptions and perexes from Flexibee API
     * @param element root of DOM subtree to have removed styles
     */
    _removeRedundantHTML(element: HTMLElement): void;
    /**
     * Getting perex out of addon fetched from Flexibee API
     * @param addon Addon to retrieve perex from
     * @returns addon perex in HTML
     */
    _retrievePerex(addon: Addon): HTMLParagraphElement;
    /**
     * Changing locale according to window.location URL
     * @param event Event to target select element with locale codes
     */
    _localeChanged(event: Event): void;
    _localeCategoryName(category: Category): string;
    _searchOnEnter(e: Event): void;
    _createAbsoluteLink(url: string): string;
    /**
     * Compose header of the component for both widget states
     * @returns HTML with component header
     */
    _renderHeader(): import("lit").TemplateResult<1>;
    _renderSearchFilters(): import("lit").TemplateResult<1>;
    _renderAddonTags(): import("lit").TemplateResult<1>;
    /**
     * Render function for cards of widget in #content
     * tabindex has to be present in <a> element because it has no href
     * @returns #content with addon cards
     */
    _renderOverview(): import("lit").TemplateResult<1>;
    /**
     * Render detail of selected addon as a component content
     * @returns style unified description of addon
     */
    _renderDetail(): HTMLDivElement;
    /**
     * Render footer for both widget states
     * @returns footer element centered with pager (overview) or install button (detail)
     */
    _renderFooter(): import("lit").TemplateResult<1>;
    /**
     * Main render function composing all render functions
     * Lit library use this function as component content default
     * component styles are applied on this DOM level
     * @returns component template inner HTML
     */
    render(): import("lit").TemplateResult<1>;
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
export {};
//# sourceMappingURL=main.d.ts.map