import { LitElement, html, css, PropertyDeclarations } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('addons-widget')
export class WidgetElement extends LitElement {
    static styles = css`
        :host {
            font-family: var(--font-family, Arial, sans-serif);
        }
        
        #container {
            background-color: var(--bg-color-primary, white);
        }
    `;

    constructor() {
        super();
    }
    render() {
        return html`
        <div id='container'>
            <h1>Hello, Web Component!</h1>
            <slot></slot>
        </div>
    `;
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