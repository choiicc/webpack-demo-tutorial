import _ from 'lodash';

if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            console.log('SW registered', registration);
        }).catch(err => {
            console.log('SW registration failed', err);
        })
    })
}

function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello11', 'webpack'], ' ');
  
    return element;
}
  
document.body.appendChild(component());