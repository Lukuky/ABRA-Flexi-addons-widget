import typescript from '@rollup/plugin-typescript';
import summary from 'rollup-plugin-summary';

export default {
    plugins: [
        typescript(),
        summary(),
    ],
    input: './src/index.ts',
    output: {
        file: './build/addons-widget.js'
    },
    preserveEntrySignatures: 'strict',
};