import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import multi from 'rollup-plugin-multi-input';


export default {
  input:['./src/*.js','!./src/*.test.js'],
  output:[{
    // file:'dist/index.js',
    dir:'dist',
    format:'cjs',
    assetFileNames:'[name].js'
  },{
    // file:'dist/index.js',
    dir:'esm',
    format:'esm',
    assetFileNames:'[name].js'
  }],
  plugins:[
    multi(),
    resolve({
      browser: true
    }),
    commonjs(),
    babel({
      babelHelpers:"runtime",
      exclude: 'node_modules/**'  // 排除node_modules 下的文件
    })
  ]
}