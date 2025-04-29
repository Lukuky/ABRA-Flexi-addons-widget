[TSDoc GitHub Wiki Example](../wiki/modules) / [components/main](../wiki/components.main) / WidgetElement

# Class: WidgetElement

Defined in: [src/components/main.ts:82](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/main.ts#L82)

Main addons widget Lit web component

## Extends

- `LitElement`

## Constructors

### Constructor

> **new WidgetElement**(): `WidgetElement`

Defined in: [src/components/main.ts:385](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/main.ts#L385)

Initialise component and fetch addons categories for filtering

#### Returns

`WidgetElement`

#### Overrides

`LitElement.constructor`

## Properties

### addonsPerPage

> **addonsPerPage**: `number` = `8`

Defined in: [src/components/main.ts:304](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/main.ts#L304)

Maximum amount of addons on one page of overview

***

### styles

> `static` **styles**: `CSSResult`

Defined in: [src/components/main.ts:89](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/main.ts#L89)

All styles applied to widget component
Changes only able with rewriting styles for addons-widget selector
or by specifying undefined CSS variables rewriting default values

#### Overrides

`LitElement.styles`

## Methods

### \_goBack()

> **\_goBack**(): `void`

Defined in: [src/components/main.ts:401](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/main.ts#L401)

Change state (from detail) to overview

#### Returns

`void`

***

### \_goToDetail()

> **\_goToDetail**(`addon`): `void`

Defined in: [src/components/main.ts:409](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/main.ts#L409)

Change state to detail and set addon to be shown

#### Parameters

##### addon

[`Addon`](../wiki/components.main.%3Cinternal%3E.Interface.Addon)

Addon to be shown in detail

#### Returns

`void`

***

### \_localeCategoryName()

> **\_localeCategoryName**(`category`): `string`

Defined in: [src/components/main.ts:477](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/main.ts#L477)

#### Parameters

##### category

[`Category`](../wiki/components.main.%3Cinternal%3E.Interface.Category)

#### Returns

`string`

***

### \_localeChanged()

> **\_localeChanged**(`event`): `void`

Defined in: [src/components/main.ts:472](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/main.ts#L472)

Changing locale according to window.location URL

#### Parameters

##### event

`Event`

Event to target select element with locale codes

#### Returns

`void`

***

### \_removeStyles()

> **\_removeStyles**(`element`): `void`

Defined in: [src/components/main.ts:448](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/main.ts#L448)

Remove all style elements and attributes from element subtree including color attribute
Used for unify descriptions and perexes from Flexibee API

#### Parameters

##### element

`HTMLElement`

root of DOM subtree to have removed styles

#### Returns

`void`

***

### \_renderDetail()

> **\_renderDetail**(): `HTMLDivElement`

Defined in: [src/components/main.ts:582](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/main.ts#L582)

Render detail of selected addon as a component content

#### Returns

`HTMLDivElement`

style unified description of addon

***

### \_renderFooter()

> **\_renderFooter**(): `TemplateResult`\<`1`\>

Defined in: [src/components/main.ts:595](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/main.ts#L595)

Render footer for both widget states

#### Returns

`TemplateResult`\<`1`\>

footer element centered with pager (overview) or install button (detail)

***

### \_renderHeader()

> **\_renderHeader**(): `TemplateResult`\<`1`\>

Defined in: [src/components/main.ts:497](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/main.ts#L497)

Compose header of the component for both widget states

#### Returns

`TemplateResult`\<`1`\>

HTML with component header

***

### \_renderOverview()

> **\_renderOverview**(): `TemplateResult`\<`1`\>

Defined in: [src/components/main.ts:563](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/main.ts#L563)

Render function for cards of widget in #content
tabindex has to be present in <a> element because it has no href

#### Returns

`TemplateResult`\<`1`\>

#content with addon cards

***

### \_renderPreview()

> **\_renderPreview**(): `TemplateResult`\<`1`\>

Defined in: [src/components/main.ts:545](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/main.ts#L545)

Render component content in pseudo-state of loading fetching addons
Composed to have layout style same as result

#### Returns

`TemplateResult`\<`1`\>

#content with addons "empty" cards

***

### \_resetSearch()

> **\_resetSearch**(): `void`

Defined in: [src/components/main.ts:427](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/main.ts#L427)

Reset page number to zero and setting search phrase to empty string

#### Returns

`void`

***

### \_retrievePerex()

> **\_retrievePerex**(`addon`): `HTMLParagraphElement`

Defined in: [src/components/main.ts:461](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/main.ts#L461)

Getting perex out of addon fetched from Flexibee API

#### Parameters

##### addon

[`Addon`](../wiki/components.main.%3Cinternal%3E.Interface.Addon)

Addon to retrieve perex from

#### Returns

`HTMLParagraphElement`

addon perex in HTML

***

### \_search()

> **\_search**(): `void`

Defined in: [src/components/main.ts:437](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/main.ts#L437)

Set searchPhrase from text input (and cause fetching new addons)
Nulling the page number

#### Returns

`void`

***

### \_searchOnEnter()

> **\_searchOnEnter**(`e`): `void`

Defined in: [src/components/main.ts:486](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/main.ts#L486)

#### Parameters

##### e

`Event`

#### Returns

`void`

***

### \_updateCategory()

> **\_updateCategory**(`e`): `void`

Defined in: [src/components/main.ts:419](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/main.ts#L419)

Update category on categories select element change
Nulling the page number

#### Parameters

##### e

`Event`

Event for targeting select for the value

#### Returns

`void`

***

### render()

> **render**(): `TemplateResult`\<`1`\>

Defined in: [src/components/main.ts:622](https://github.com/Lukuky/ABRA-Flexi-addons-widget/blob/af2b8493423bcd604a74126abc4fb5659324e585/src/components/main.ts#L622)

Main render function composing all render functions
Lit library use this function as component content default
component styles are applied on this DOM level

#### Returns

`TemplateResult`\<`1`\>

component template inner HTML

#### Overrides

`LitElement.render`
