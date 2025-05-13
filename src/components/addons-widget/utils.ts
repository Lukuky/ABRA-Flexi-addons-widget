import { Category } from './types';

/**
 * Remove all style elements and attributes from element subtree including color attribute.
 * Used to unify descriptions and perexes from Flexibee API.
 * @param element Root of DOM subtree to have removed styles.
 */
export function removeRedundantHTML(element: HTMLElement): void {
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
 * Retrieve perex from an addon and return it as an HTML element.
 * @param addon Addon to retrieve perex from.
 * @returns Addon perex in HTML.
 */
export function retrievePerex(addon: { perex: string }): HTMLElement {
    const perex = document.createElement('p');
    perex.classList.add('addonPerex');
    perex.innerHTML = addon.perex;
    removeRedundantHTML(perex);
    return perex;
}

/**
 * Get the localized category name based on the selected locale.
 * @param category Category object.
 * @param locale Selected locale.
 * @returns Localized category name.
 */
export function localeCategoryName(category: Category, locale: string): string {
    switch (locale) {
        case 'cs': return category.nameCs;
        case 'sk': return category.nameSk;
        case 'en': return category.nameEn;
        case 'de': return category.nameDe;
        default: return category.nameCs;
    }
}

/**
 * Create an absolute link from a URL. If the URL does not start with "http://" or "https://",
 * it prepends "https://".
 * @param url URL to convert to an absolute link.
 * @returns Absolute link.
 */
export function createAbsoluteLink(url: string): string {
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    }
    return `https://${url}`;
}