import { fileURLToPath } from 'url';
import path from 'path';
import LicensePlugin from 'webpack-license-plugin';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export default {
    entry: './src/main.ts',
    output: {
        filename: 'addons-widget.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        // https://www.npmjs.com/package/webpack-license-plugin
        new LicensePlugin({ outputFilename: '../thirdPartyNotice.json' })
    ],
    optimization: {
        minimize: false
    },
};