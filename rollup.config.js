import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';

const plugins = [
    sourcemaps(),
    babel({
        exclude: 'node_modules/**', // only transpile our source code
        presets: [
            "@babel/preset-env"
        ]
    }),
    terser(),
];

export default [
    {
        input: './dist/strplace.js',
        output: {
            file: './dist/strplace.umd.js',
            format: 'umd',
            name: 'strplace',
            sourcemap: true,
        },
        plugins: plugins
    },
    {
        input: './dist/strplace.js',
        output: {
            file: './dist/strplace.native.js',
            format: 'esm',
            name: 'strplace',
            sourcemap: true,
        },
        plugins: plugins
    }
]