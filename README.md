# ABRA Flexi addons widget

This widget is made for ABRA Flexi purpouses where it presents web application addons and enable to install them in the app as well.

However, anyone can use this widget for presenting addons in personal website, for example partners creating them.

## License

This project is under [MIT license](./LICENSE). See the [third party notice](./thirdPartyNotice.json) about license of used packages.

## Stack

- Node.js
- TypeScript
- Lit
- Rollup
- TypeDoc
- Web Test Runner

## Run in website

To make it run in production website directly, use static import from JSDELIVR (replace {version}):

```html
<script src="https://cdn.jsdelivr.net/npm/abra-flexi-addons-widget@{version}/dist/index.min.js"></script>
```

Then inserting `<addons-widget></addons-widget>` in the website renders whole web components without further setting.

However, it is possible to customize content with web component properties and style using `addons-widget` CSS selector and pre-prepared variables like so:

```html
<style>
    addons-widget {
        --font-family: Arial, serif;
        --font-size: 1rem;
        --color-primary: #0e5dbb;
        --text-color-primary: #000000;
        --text-color-secondary: #6d6d70;
        --bg-color-primary: #fafafa;
        --bg-color-secondary: #f4f4f4;
        --bg-color-interactive: #ffffff;
        --bg-color-tag: #dbdbdb;
        --border-primary: solid #aaaaaa 0.1em;
        --border-interactive: solid #9c9c9c 0.1em;
        --border-radius-primary: 0.4em;
        --border-radius-interactive: 0.4em;
        --icons-color: var(--text-color-secondary);
        --addon-overview-height: 20em;
        --addon-overview-margin: 0.6em;
        --overview-rows: 2;
        --margin-container: 0;
    }
</style>
<addons-widget
    addonsPerPage=12
    installEndpoint='/path/to/endpoint'
    localeSelect
    partnerId=123
></addons-widget>`
```

There is a usage example in `/demo` folder available to run just by opening `index.html` in a browser.

## Run in frameworks

Web component is framework independent, but usage may add some steps to manage. For example in React the Lit component has to be converted into React component to use it in JSX. [Here](https://lit.dev/docs/frameworks/react/) is link for furher reading.

## Development

To develop source code in the `/src` directory with Node.js, there is couple of scripts to use below. For manual testing and visualizing widget is reserved `/dev` directory with HTML using local version of the widget.

### Watch

Compiling and bundling source code into the `/dist` directory with refresh on file save:
```bash
npm run watch
```

### Localize

Create localization files into `/src/generated/locales` according to `.xlf` translations in `/xliff`:
```bash
npm run localize
```

### Build

Compiling and bundling source code into the `/dist` directory with treeshake.
```bash
npm run build
```

### Test

Run all tests in `/src/test` directory.
```bash
npm run test
```

### Documentaion

Create a documentation from TypeScript comments using Typedoc into Markdown files in `/wiki` directory. Output is synchonized with GitHub wiki afterwards.
```bash
npm run docs
```