/**
 * Represents the state of the widget.
 *
 * - `overview`: The widget is displaying the list of addons.
 * - `detail`: The widget is displaying the details of a selected addon.
 */
export type WidgetState = 'overview' | 'detail';

/**
 * Represents a category of addons.
 *
 * Categories are used to group addons and support localization for their names.
 */
export interface Category {
    id: number;
    nameCs: string;
    nameSk: string;
    nameEn: string;
    nameDe: string;
    active: boolean;
}

/**
 * Represents a partner associated with an addon.
 *
 * Partners provide additional information about the addon, such as branding and links.
 */
export interface Partner {
    id: number;
    logo: string;
    name: string;
    url: string;
}

/**
 * Represents an addon in the widget.
 *
 * Addons are the main entities displayed in the widget and include metadata such as
 * categories, descriptions, and installation details.
 */
export interface Addon {
    categories: string[];
    description: string;
    hasPrice: boolean;
    id: number;
    installScript?: string;
    installed?: boolean;
    linkMore?: string;
    name: string;
    partner: Partner;
    perex: string;
    photo: URL;
    uninstallScript?: string;
    variants: string[];
}

/**
 * Represents the result of an addon search.
 *
 * This includes the total number of pages and the list of addons matching the search criteria.
 */
export interface AddonsSearch {
    totalPages: number;
    content: Addon[];
}