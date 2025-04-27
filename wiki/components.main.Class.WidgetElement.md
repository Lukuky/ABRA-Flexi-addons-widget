[TSDoc GitHub Wiki Example](../wiki/modules) / [components/main](../wiki/components.main) / WidgetElement

# Class: WidgetElement

Defined in: [src/components/main.ts:62](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/1f6bc28b7e2ffe58d585cfddf89fd3094e61af90/src/components/main.ts#L62)

Main addons widget Lit web component

## Extends

- `LitElement`

## Constructors

### Constructor

> **new WidgetElement**(): `WidgetElement`

Defined in: [src/components/main.ts:298](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/1f6bc28b7e2ffe58d585cfddf89fd3094e61af90/src/components/main.ts#L298)

#### Returns

`WidgetElement`

#### Overrides

`LitElement.constructor`

## Other

### addonsPerPage

> **addonsPerPage**: `number` = `8`

Defined in: [src/components/main.ts:252](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/1f6bc28b7e2ffe58d585cfddf89fd3094e61af90/src/components/main.ts#L252)

***

### languages

> `static` **languages**: `string`[]

Defined in: [src/components/main.ts:222](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/1f6bc28b7e2ffe58d585cfddf89fd3094e61af90/src/components/main.ts#L222)

***

### \_clear()

> **\_clear**(): `void`

Defined in: [src/components/main.ts:324](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/1f6bc28b7e2ffe58d585cfddf89fd3094e61af90/src/components/main.ts#L324)

#### Returns

`void`

***

### \_goBack()

> **\_goBack**(): `void`

Defined in: [src/components/main.ts:310](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/1f6bc28b7e2ffe58d585cfddf89fd3094e61af90/src/components/main.ts#L310)

#### Returns

`void`

***

### \_goToDetail()

> **\_goToDetail**(`addon`): `void`

Defined in: [src/components/main.ts:314](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/1f6bc28b7e2ffe58d585cfddf89fd3094e61af90/src/components/main.ts#L314)

#### Parameters

##### addon

[`Addon`](../wiki/components.main.%3Cinternal%3E.Interface.Addon)

#### Returns

`void`

***

### \_localeChanged()

> **\_localeChanged**(`event`): `void`

Defined in: [src/components/main.ts:336](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/1f6bc28b7e2ffe58d585cfddf89fd3094e61af90/src/components/main.ts#L336)

#### Parameters

##### event

`Event`

#### Returns

`void`

***

### \_removeStyles()

> **\_removeStyles**(`element`): `void`

Defined in: [src/components/main.ts:413](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/1f6bc28b7e2ffe58d585cfddf89fd3094e61af90/src/components/main.ts#L413)

#### Parameters

##### element

`HTMLElement`

#### Returns

`void`

***

### \_renderDetail()

> **\_renderDetail**(): `HTMLDivElement`

Defined in: [src/components/main.ts:448](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/1f6bc28b7e2ffe58d585cfddf89fd3094e61af90/src/components/main.ts#L448)

#### Returns

`HTMLDivElement`

***

### \_renderFooter()

> **\_renderFooter**(): `TemplateResult`\<`1`\>

Defined in: [src/components/main.ts:457](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/1f6bc28b7e2ffe58d585cfddf89fd3094e61af90/src/components/main.ts#L457)

#### Returns

`TemplateResult`\<`1`\>

***

### \_renderHeader()

> **\_renderHeader**(): `TemplateResult`\<`1`\>

Defined in: [src/components/main.ts:345](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/1f6bc28b7e2ffe58d585cfddf89fd3094e61af90/src/components/main.ts#L345)

#### Returns

`TemplateResult`\<`1`\>

***

### \_renderOverview()

> **\_renderOverview**(): `TemplateResult`\<`1`\>

Defined in: [src/components/main.ts:433](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/1f6bc28b7e2ffe58d585cfddf89fd3094e61af90/src/components/main.ts#L433)

Rendering function for cards of widget in #content
tabindex has to be present in <a> element because it has no href

#### Returns

`TemplateResult`\<`1`\>

#content with addon cards

***

### \_renderPreview()

> **\_renderPreview**(): `TemplateResult`\<`1`\>

Defined in: [src/components/main.ts:400](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/1f6bc28b7e2ffe58d585cfddf89fd3094e61af90/src/components/main.ts#L400)

#### Returns

`TemplateResult`\<`1`\>

***

### \_retrievePerex()

> **\_retrievePerex**(`addon`): `HTMLParagraphElement`

Defined in: [src/components/main.ts:421](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/1f6bc28b7e2ffe58d585cfddf89fd3094e61af90/src/components/main.ts#L421)

#### Parameters

##### addon

[`Addon`](../wiki/components.main.%3Cinternal%3E.Interface.Addon)

#### Returns

`HTMLParagraphElement`

***

### \_search()

> **\_search**(): `void`

Defined in: [src/components/main.ts:330](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/1f6bc28b7e2ffe58d585cfddf89fd3094e61af90/src/components/main.ts#L330)

#### Returns

`void`

***

### \_updateCategory()

> **\_updateCategory**(`e`): `void`

Defined in: [src/components/main.ts:319](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/1f6bc28b7e2ffe58d585cfddf89fd3094e61af90/src/components/main.ts#L319)

#### Parameters

##### e

`Event`

#### Returns

`void`

## rendering

### render()

> **render**(): `TemplateResult`\<`1`\>

Defined in: [src/components/main.ts:478](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/1f6bc28b7e2ffe58d585cfddf89fd3094e61af90/src/components/main.ts#L478)

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

Defined in: [src/components/main.ts:63](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/1f6bc28b7e2ffe58d585cfddf89fd3094e61af90/src/components/main.ts#L63)

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
