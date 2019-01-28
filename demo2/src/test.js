import './test.css';
import icon from './111.jpg';
import data from './data.xml';

function component() {
    var element = document.createElement('div');
    element.innerHTML = 'Hello World 7! &#xe70f;<br/>'
    // lodash 是由当前 script 脚本 import 导入进来的
    element.classList.add('hello');

    var iconM = new Image();
    iconM.src = icon;
    element.append(iconM);

    console.log(data);
    
    return element;
}

document.body.appendChild(component());