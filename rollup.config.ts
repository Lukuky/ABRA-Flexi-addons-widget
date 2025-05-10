import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';

const config = [
    {
        input: './src/main.ts',
        output: {
            dir: 'dist',
            format: 'esm',
            sourcemap: true,
        },
        plugins: [
            resolve(),
            commonjs(),
            typescript(),
        ],
        watch: {
            clearScreen: false,
        },
    },
    {
        input: './src/main.ts',
        output: {
            file: 'dist/main.d.ts',
            format: 'esm',
        },
        plugins: [
            dts()
        ],
    },
];

export default config;