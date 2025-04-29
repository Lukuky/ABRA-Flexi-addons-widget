import { fileURLToPath } from 'url';
import path from 'path';
import LicensePlugin from 'webpack-license-plugin';
import TerserPlugin from 'terser-webpack-plugin';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export default {
    entry: './src/index.ts',
    output: {
        filename: 'addons-widget.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['to-string-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
        ],
    },
    plugins: [
        // https://www.npmjs.com/package/webpack-license-plugin
        new LicensePlugin({ outputFilename: '../thirdPartyNotice.json' })
    ],
    // https://stackoverflow.com/questions/64818489/webpack-omit-creation-of-license-txt-files
    optimization: {
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    },
};