1. 构建性能问题太多，没有step by step
2. commonsChunkPlugin已经在4.x中移除了。。。文档太久
3. ts的两个参数加上去报错，版本不符？？，示例打开找不到了？？？
4. nonce & csp ?? 不是很理解,怎么使用
    a> index.js 变成 index.ejs 加入 __webpack_nonce__ = '<%=nonce%>';
        使用htmlWebpackPlugin替换
    b> html 加入<meta http-equiv="Content-Security-Policy" content="script-src,'self',https://trusted.cdn.com;">
5. 