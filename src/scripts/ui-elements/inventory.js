import * as util from "../util.js";
export { inventory };

console.log("Loading Inventory module!");

class inventory {
    constructor(barName, number, maks){
        if (!util.isNumber(number) || !util.isNumber(maks)) {
            throw this.constructor.name + " status: Invalid value!";
        }
        this.value = document.getElementById(barName+"-value");
        this.bar = document.getElementById(barName+"-bar");
        this.maks = maks;
        this.setBar(number);
    }

    setBar(value){
        if (!util.isBetween(value, 0, this.maks)) {
            throw this.constructor.name + " status: Invalid value!";
        }
        this.value.children[1].innerText = value+" Kg / " + this.maks + " Kg";

        // calculate % of how much that is left!
        let number2 = (100 / this.maks) * value;

        // Set how wide the div should be
        this.bar.children[0].style.width = number2+"%";
        this.bar.children[1].style.width = (100-number2)+"%";

        // Set the bare color depens on the 100%
        if (number2 <= 100 && number2 >= 50) {
            this.bar.children[0].style.background = "#0AAE41";
        } else if (number2 < 50 && number2 >= 25) {
            this.bar.children[0].style.background = "orange";
        } else {
            this.bar.children[0].style.background = "red";
        }
    }
}
