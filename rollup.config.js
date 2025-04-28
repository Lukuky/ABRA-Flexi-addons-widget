import typescript from '@rollup/plugin-typescript';
// import { localeTransformers } from '@lit/localize-tools/lib/rollup.js';
import summary from 'rollup-plugin-summary';

// const locales = localeTransformers();

// export default locales.map(({ locale, localeTransformer }) => ({
export default {
    input: `src/index.ts`,
    plugins: [
        typescript({
            // transformers: {
            //     before: [localeTransformer],
            // },
        }),
        // resolve(),
        // terser(),
        summary(),
    ],
    input: './src/index.ts',
    output: {
        // file: `./bundled/${locale}/addons-widget.js`,
        file: `./build/addons-widget.js`,
        format: 'es',
    },
    preserveEntrySignatures: 'strict',
    // }));
};