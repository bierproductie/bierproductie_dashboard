import * as btn from "./ui-elements/button.js"
import * as util from "./util.js"

util.loadJS("scripts/ui-elements/batch.js");

const histList = document.getElementsByClassName("histList")[0]

const array = [10,11,12,13,32,15,16,17,18, 1203, 2, 3023, 2, 30, 2, 32, 32, 302, 302, 3,19,20,21,22,23,24,25,26,27,28,29,30];


array.forEach(x =>{
    const li = document.createElement("li");
    li.innerText = "Batch Number: "+x;
    li.classList.add("histItem");
    histList.appendChild(li);
});


new btn.button('humidity', "HUMIDITY");
new btn.button('acceptableProducts', "ACCEPTABLE PRODUCTS");
new btn.button('vibration', "VIBRATION");
new btn.button('DefectProducts', "REJECTED PRODUCTS");
new btn.button('produced', "PRODUCED");
new btn.button('temp', "TEMPERATURE");
