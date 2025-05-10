import { LitElement } from 'lit';
export declare class LoaderElement extends LitElement {
    static styles: import("lit").CSSResult;
    size: number;
    render(): import("lit").TemplateResult<1>;
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
//# sourceMappingURL=loader.d.ts.map