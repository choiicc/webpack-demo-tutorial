import { add } from "./math";

if(process.env.NODE_ENV !== 'production'){
    console.log("Hello, developer!");
}

function component(){
    console.log('111111');
    var element = document.createElement("div");
    element.innerHTML = `
        Hello webpack!
        5 + 5 equals to ${add(5,5)}
    `;
    return element;
}
document.body.appendChild(component());