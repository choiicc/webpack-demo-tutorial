// import _ from "lodash";

function component(){
    var div = document.createElement('div');
    // div.innerHTML = _.join(['Hello', 'Jojo'], '');
    div.innerHTML = join(['Hello', 'Jojo'], '');

    // 假设this指向window
    this.alert("window下this的试验");
    return div;
}

document.body.appendChild(component());