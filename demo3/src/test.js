function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = 'Hello World 7! &#xe70f;<br/>'
    
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = print;

    element.append(btn);
    return element;
}

document.body.appendChild(component());