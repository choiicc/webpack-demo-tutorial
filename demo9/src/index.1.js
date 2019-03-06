import _ from "lodash";
import a from "./a.js";
import b from "./b.js";

function genElement(){
    var div = document.createElement("div");
    var a = document.createElement("a");
    a.src = 'https://www.baidu.com';
    div.innerHTML = _.join(['hello', ' writer'],' ');
    div.appendChild(a);
    div.onclick = function(){
        a();
        b();
    }
}

document.body.appendChild(genElement());
