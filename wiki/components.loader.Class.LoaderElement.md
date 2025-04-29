[TSDoc GitHub Wiki Example](../wiki/modules) / [components/loader](../wiki/components.loader) / LoaderElement

# Class: LoaderElement

Defined in: [src/components/loader.ts:8](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/loader.ts#L8)

## Extends

- `LitElement`

## Constructors

### Constructor

> **new LoaderElement**(): `LoaderElement`

Defined in: node\_modules/@lit/reactive-element/development/reactive-element.d.ts:527

#### Returns

`LoaderElement`

#### Inherited from

`LitElement.constructor`

## Other

### size

> **size**: `number` = `6`

Defined in: [src/components/loader.ts:33](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/loader.ts#L33)

## rendering

### render()

> **render**(): `TemplateResult`\<`1`\>

Defined in: [src/components/loader.ts:35](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/loader.ts#L35)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will *not* trigger
the element to update.

#### Returns

`TemplateResult`\<`1`\>

#### Overrides

`LitElement.render`

## styles

### styles

> `static` **styles**: `CSSResult`

Defined in: [src/components/loader.ts:9](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/loader.ts#L9)

Array of styles to apply to the element. The styles should be defined
using the css tag function, via constructible stylesheets, or
imported from native CSS module scripts.

Note on Content Security Policy:

Element styles are implemented with `<style>` tags when the browser doesn't
support adopted StyleSheets. To use such `<style>` tags with the style-src
CSP directive, the style-src value must either include 'unsafe-inline' or
`nonce-<base64-value>` with `<base64-value>` replaced be a server-generated
nonce.

To provide a nonce to use on generated `<style>` elements, set
`window.litNonce` to a server-generated nonce in your page's HTML, before
loading application code:

```html
<script>
  // Generated and unique per request:
  window.litNonce = 'a1b2c3d4';
</script>
```

#### Nocollapse

#### Overrides

`LitElement.styles`
