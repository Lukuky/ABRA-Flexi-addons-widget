# ABRA Flexi Addons Widget

This widget is designed for ABRA Flexi, where it showcases web application addons and enables their installation within the application.

However, it can also be utilized by anyone for presenting addons on personal websites, such as partners who create them.

## License

This project is licensed under the [MIT License](./LICENSE). Refer to the [third-party notice](./thirdPartyNotice.json) for information about the licenses of the packages used.

## Technology Stack

- Node.js
- TypeScript
- Lit
- Rollup
- TypeDoc
- Web Test Runner

## Usage on a Website

To use this widget directly on a production website, include a static import from JSDELIVR (replace `{version}` with the desired version):

```html
<script src="https://cdn.jsdelivr.net/npm/abra-flexi-addons-widget@{version}/dist/index.min.js"></script>
```

Then, inserting `<addons-widget></addons-widget>` into the website will render the complete web component without additional configuration.

Customization is possible using web component properties and styles with the `addons-widget` CSS selector and predefined variables, as shown below:

```html
<style>
    addons-widget {
        --font-family: Arial, serif;
        --font-weight: light;
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
    addonsPerPage="12"
    installEndpoint="/path/to/endpoint"
    localeSelect
    partnerId="123"
></addons-widget>
```

An example of usage is available in the `/demo` folder, which can be run by simply opening `index.html` in a browser.

## Usage in Frameworks

This web component is framework-independent, but additional steps may be required for integration. For instance, in React, the Lit component must be converted into a React component to be used in JSX. Refer to [this guide](https://lit.dev/docs/frameworks/react/) for more details.

## Development

To develop the source code located in the `/src` directory using Node.js, the following scripts are available. For manual testing and visualization, the `/dev` directory contains an HTML file that uses the local version of the widget.

Before making any changes, install the dependencies:
```bash
npm install
```

The key workflows are automated using GitHub Actions.

### Watch

Compile and bundle the source code into the `/dist` directory with automatic refresh on file save:
```bash
npm run watch
```

### Localization

Generate localization files in the `/src/generated/locales` directory based on `.xlf` translations in the `/xliff` directory:
```bash
npm run localize
```

To create translations, add message targets for locales in the `/xliff` directory. For missing translations, the default `cs` locale is used. However, most of the content is fetched from the Flexibee API, where translations for addons and partners should be provided.

### Build

Compile and bundle the source code into the `/dist` directory with tree-shaking:
```bash
npm run build
```

### Testing

Run all tests located in the `/src/test` directory:
```bash
npm run test
```

For the first run on your machine, install the Playwright browser launchers:
```bash
npx playwright install --with-deps
```

### Documentation

Generate documentation from TypeScript comments using TypeDoc, outputting Markdown files to the `/wiki` directory:
```bash
npm run docs
```

The output is synchronized with the GitHub Wiki via a GitHub Action.