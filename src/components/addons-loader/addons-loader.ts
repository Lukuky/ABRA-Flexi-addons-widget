// inspired by: https://www.w3schools.com/howto/howto_css_loader.asp

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A reusable loader component for displaying a spinning animation.
 *
 * This component is designed to indicate loading states in the UI. It uses customizable
 * CSS variables for styling, allowing developers to adjust its size, colors, and animation
 * behavior. The loader is implemented as a circular spinner.
 *
 * ### Example Usage:
 * ```html
 * <addons-loader style="--size: 3em; --main-color: #3498db;"></addons-loader>
 * ```
 */
@customElement('addons-loader')
export class LoaderElement extends LitElement {
    static styles = css`
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

    @property({ type: Number })
    size = 6;

    render() {
        return html`
        <div class="loader"></div>
        `;
    }
}

/**
 * Add type-checking for LoaderElement
 * https://lit.dev/docs/components/defining/#typescript-typings
 */
declare global {
    interface HTMLElementTagNameMap {
        "addons-loader": LoaderElement;
    }
}