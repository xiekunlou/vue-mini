import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

/**
 * 默认导出一个数据，数组的每一个对象都是一个单独的导出文件配置
 */
export default [
  {
    //入口文件
    input: 'packages/vue/src/index.ts',

    //出口文件
    output: [
      //导出 iife 模式的包
      {
        //开启 sourceMap
        sourcemap: true,
        //导出文件地址
        file: './packages/vue/dist/vue.js',
        //生成包的格式
        format: 'iife',
        //变量名
        name: 'Vue'
      }
    ],
    //插件
    plugins: [
      //ts
      typescript({
        sourceMap: true
      }),
      //模块导入的路劲补全
      resolve(),
      //转 commonjs 为 ESM
      commonjs()
    ]
  }
]
