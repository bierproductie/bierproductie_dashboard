import * as maintain from "./ui-elements/maintain.js"
import * as inventory from "./ui-elements/inventory.js"

maintain.setMaintain(50);


let barley = new inventory.inventory("BARLEY", 10, 20);
barley.setBar(3);

new inventory.inventory("MALT", 10, 20);
new inventory.inventory("HOPS", 15, 20);
new inventory.inventory("WHEAT", 9, 20);
new inventory.inventory("YEAST", 4, 20);


function buttonFac(name) {
    let temp = document.getElementsByClassName(name)[0];
    temp.addEventListener("click", () => {
        RemoveMarked();
        temp.classList.add("marked");
    });
}

buttonFac('temp');
buttonFac('humidity');
buttonFac('acceptableProducts');
buttonFac('vibration');
buttonFac('DefectProducts');
buttonFac('produced');

function RemoveMarked() {
    let marked = document.getElementsByClassName('marked')[0];
    marked.classList.remove("marked");
}

setInterval(function () {
let time = document.getElementsByClassName("ptime")[0];
    time.children[1].innerHTML = new Date()
        .toString()
        .slice(16, 25);
}, 1);

const select_items = document.getElementsByClassName("select-items")[0];
document.getElementById("batchNr")
    .addEventListener("click", () => {
        select_items.classList.toggle("select-hide");
    });

document.getElementsByClassName("batchNr")[0].addEventListener("click", () => {
    select_items.classList.toggle("select-hide");
});

let data = [2312, 2390, 2039, 1023, 2093, 1049, 1923, 231];
data.forEach((batch) => {
    let div = document.createElement("div");
    div.innerText = batch;
    div.addEventListener("click", () => {
        document.getElementsByClassName("batchNr")[0].value = batch;
    });
    select_items.appendChild(div);
});

document.addEventListener("click", (element) => {
    if (element.target == document.getElementById("batchNr") ||
        element.target == document.getElementsByClassName("batchNr")[0]) {} else {
        select_items.classList.add("select-hide");
    }
});
