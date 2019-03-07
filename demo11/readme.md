1. Guids中的require.resolve引入路径不对
2. exports-loader无效，研究貌似官方bug,  https://github.com/webpack-contrib/imports-loader/issues/39
3. https://github.com/webpack-contrib/css-loader/issues/447
    安装@babel/preset-env后,加入.babelrc各种配置,webpack进行打包，
    报错
    ERROR in ./~/convert-source-map/index.js
    Module not found: Error: Can't resolve 'fs'
