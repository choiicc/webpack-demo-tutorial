
// https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import/#installation
async function component() {
    // https://webpack.docschina.org/api/module-methods#import-
    const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');

    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

component().then(element => {
    document.body.appendChild(element);
});