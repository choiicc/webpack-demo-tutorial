import './print.js'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = 'Hello World ! &#xe70f;<br/>'
    
    btn.innerHTML = 'Click me and check666 the console111!';
    btn.onclick = print;

    element.append(btn);
    return element;
}

document.body.appendChild(component());