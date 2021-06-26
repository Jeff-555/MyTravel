// https://cli.vuejs.org/zh/config/#vue-config-js
// 用于定义可选配置 (有点像webpack) 2.x.x有单独config文件夹

// 修改路径识别
const path = require('path')

module.exports = {
    devServer: {
        //获取json数据（资源）并修改资源路径目录
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/api': '/mock/'
                }
            }
        }
    },
    chainWebpack: (config) => {
        //__dirname表示获取目录名,属于内置属性
        config.resolve.alias
            .set('styles', path.join(__dirname, './src/assets/styles'))
            .set('@', path.join(__dirname, './src'))
            .set('common',path.join(__dirname,'./src/common'))
    },
    //Solution For Issue:You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
    runtimeCompiler: true
}