import fs from 'fs'
import path from 'path'
import lessToJs from 'less-vars-to-js'
import json from '@rollup/plugin-json'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import jsx from 'acorn-jsx';
import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'

const isDev = process.env.NODE_ENV !== 'production'
const lessVariables = fs.readFileSync(path.resolve(__dirname, 'style/variables.less'), 'utf-8')
// https://www.npmjs.com/package/@rollup/plugin-typescript?activeTab=readme
// https://rollupjs.org/guide/en/#acorninjectplugins
const acornInjectPlugins = [jsx()]
const plugins = [
    json(),
    nodeResolve(),
    commonjs(),
    typescript(),
    babel({
        exclude: 'node_modules/**',
        presets: ['@babel/env', '@babel/preset-react', '@babel/preset-typescript'],
    }),
]

isDev || plugins.push(terser())

const root = path.resolve(__dirname, 'stories')
const globalVars = lessToJs(lessVariables, { resolveVariables: true, stripPrefix: true })

// export default {
//     input: path.resolve(root, 'index.ts'),
//     output: [
//         {
//             exports: 'auto',
//             file: path.resolve(__dirname, 'dist', 'index.js'),
//             format: 'cjs'
//         },
//         {
//             exports: 'auto',
//             file: path.resolve(__dirname, 'dist', 'index.ejs'),
//             format: 'es'
//         }
//     ],
//     acornInjectPlugins,
//     plugins
// }

export default fs.readdirSync(root)
    .filter(item => fs.statSync(path.resolve(root, item)).isDirectory())
    .filter(item => item !== 'assets') // storybook生成的执行资源
    .map(item => {
        try {
            /**
             * @type {import('rollup').RollupOptions}
             */
            const config = {
                input: path.resolve(root, item, 'index.ts'),
                cache: false,
                output: [
                    {
                        exports: 'auto',
                        file: path.resolve(__dirname, 'dist', item, 'index.js'),
                        format: 'cjs'
                    },
                    {
                        exports: 'auto',
                        file: path.resolve(__dirname, 'dist', item, 'index.ejs'),
                        format: 'es'
                    }
                ],
                external: ['react', 'react-dom'],
                acornInjectPlugins,
                plugins: [
                    ...plugins,
                    // 使用单实例会让后面的包包含之前打包的内容
                    postcss({
                        // 把css插入style
                        // inject: true,
                        // 把css放到js同目录下
                        extract: true,
                        use: [[
                            'less',
                            { globalVars }
                        ]]
                    }),
                    copy({
                        targets: [{
                            src: `stories/${item}/style/**/*`,
                            dest: `dist/${item}/style`,
                        }]
                    })
                ]
            }
            return config
        } catch (e) {
            console.error(e)
        }
    })