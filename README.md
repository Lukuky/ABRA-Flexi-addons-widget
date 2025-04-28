# ABRA Flexi addons widget

This widget is made for ABRA Flexi purpouses where it presents web application addons and enable to install them in the app as well.

MIT License

## Stack

- TS language
- Lit element for creating web component
- Webpack for bundling

## Running

There is always production version in the `/dist` directory.
Options of running:
- Open `index.html` in root file to launch the widget itself.
- Open `index.html` in `/demo` directory to run the widget in demo website.
- Copy and use the `addons-widget.js` files in your HTML and use `<addons-widget>` element.

## Developing

To develop source code in the `/src` directory, there are 2 scripts needed:

Compiling and bundling source code into the `/dist` directory in dev mode for debugging.
```bash
npm run watch
```

Compiling and bundling source code into the `/dist` directory in production mode with minification and licencing Lit element.
```bash
npm run build:all
```

Always build before pushing.