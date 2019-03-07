// import abc from "./test.js";
const abc = require('./test.js').default;
// import {file,parse} from './global.js';
const {file,parse} = require('./global.js');
// import _ from "lodash";

function component(){
    var div = document.createElement('div');
    // div.innerHTML = _.join(['Hello', 'Jojo'], '');
    div.innerHTML = join(['Hello', 'Jojo'], '');

    // 假设this指向window
    this.alert("window下this的试验");
    parse();
    abc();
    return div;
}

document.body.appendChild(component());

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        console.log(JSON.stringify(json));
    })
    .catch((err)=>{
        console.log(JSON.stringify(err));
    });