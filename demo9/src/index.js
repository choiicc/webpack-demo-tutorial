import _ from "lodash";
import aa from './a.js';
import b from './b.js';

function genElement(){
    var div = document.createElement("div");
    var a = document.createElement("a");
    a.src = 'https://www.baidu.com';
    a.innerHTML = '1111111';
    var br = document.createElement('br');
    div.innerHTML = _.join(['hello', ' writer'],' ');
    div.appendChild(br);
    div.appendChild(a);
    div.onclick = function(){
        aa();
        b();
    }
    return div;
}

document.body.appendChild(genElement());