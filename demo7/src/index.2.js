
function component() {
    // https://webpack.docschina.org/api/module-methods#import-
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        var element = document.createElement('div');
  
        // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
        return element;
    }).catch(e => console.log('error occured while import(): ', JSON.stringify(e)))
}

component().then(element => {
    document.body.appendChild(element);
});