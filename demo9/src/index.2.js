import _ from "lodash";

async function genElement(){
    var div = document.createElement("div");
    var a = document.createElement("a");
    a.src = 'https://www.baidu.com';
    a.innerHTML = '1111111';
    var br = document.createElement('br');
    div.innerHTML = _.join(['hello', ' writer'],' ');
    div.appendChild(br);
    div.appendChild(a);
    // var a = await import(/*webpackChunkName: 'a'*/'./a.js');
    var b = await import(/*webpackChunkName: 'b'*/'./b.js');
    div.onclick = function(){
        // a.default();
        b.default();
    }
    return div;
}

genElement().then(ele => {
    document.body.appendChild(ele);
});