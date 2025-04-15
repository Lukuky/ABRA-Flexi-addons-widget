import templateHTML from './template.html';
import styles from './style.scss';

const templateElement = document.createElement('template');
templateElement.innerHTML = templateHTML;

const styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(styles);

class WidgetElement extends HTMLElement {
    static observedAttributes = ["color", "size"];

    private _internals: ElementInternals;

    constructor() {
        super();
        this._internals = this.attachInternals();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.adoptedStyleSheets = [styleSheet];
        shadowRoot.appendChild(templateElement.content.cloneNode(true));
    }
    get collapsed() {
        return this._internals.states.has("hidden");
    }
    set collapsed(flag) {
        if (flag) {
            this._internals.states.add("hidden");
        } else {
            this._internals.states.delete("hidden");
        }
    }
    connectedCallback() {
        console.log("Custom element added to page.");
    }
    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }
    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
        console.log(`Attribute ${name} has changed.`);
    }
}
customElements.define("marketplace-widget", WidgetElement);