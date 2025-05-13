import { Category } from './types';

/**
 * Removes all style elements and attributes from an element's subtree, including the `color` attribute.
 *
 * This function is used to clean up and unify descriptions and perexes retrieved from the Flexibee API.
 * It removes unnecessary elements like `<style>`, `<br>`, and elements with the `icon` class, as well as
 * inline styles and empty `<p>` tags.
 *
 * @param element The root of the DOM subtree to clean.
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
 * Retrieves the perex (short description) from an addon and returns it as an HTML element.
 *
 * The perex is cleaned using the `removeRedundantHTML` function to ensure it is free of unnecessary
 * styles and elements.
 *
 * @param addon The addon object containing the perex as a string.
 * @returns {HTMLElement} The cleaned perex wrapped in a `<p>` element.
 */
export function retrievePerex(addon: { perex: string }): HTMLElement {
    const perex = document.createElement('p');
    perex.classList.add('addonPerex');
    perex.innerHTML = addon.perex;
    removeRedundantHTML(perex);
    return perex;
}

/**
 * Retrieves the localized name of a category based on the selected locale.
 *
 * This function supports multiple locales (e.g., 'cs', 'sk', 'en', 'de') and falls back to the Czech
 * name (`nameCs`) if the locale is not recognized.
 *
 * @param category The category object containing localized names.
 * @param locale The selected locale (e.g., 'cs', 'sk', 'en', 'de').
 * @returns {string} The localized category name.
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
 * Converts a URL to an absolute link.
 *
 * If the URL does not start with "http://" or "https://", this function prepends "https://"
 * to ensure the link is absolute.
 *
 * @param url The URL to convert to an absolute link.
 * @returns {string} The absolute link.
 */
export function createAbsoluteLink(url: string): string {
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    }
    return `https://${url}`;
}