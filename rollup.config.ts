import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';

const config = [
    {
        input: './src/index.ts',
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
        input: './src/index.ts',
        output: {
            dir: 'dist',
            format: 'esm'
        },
        plugins: [
            dts()
        ],
    },
];

export default config;