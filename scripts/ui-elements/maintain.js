import * as util from "../util.js";
export {
    setMaintain
};

console.log("Loading Maintains module!");

function setMaintain(number) {
    if (!util.isBetween(number, 0, 100)) {
        throw "Maintain status: Invalid value!";
    }

    console.log(setMaintain.name +": ", number);
    document.getElementById("maintain-overlay")
        .innerText = number + "%";

    let maintainbar = document.getElementById("maintains-container");
    maintainbar.children[0].style.height = (100 - number) + "%";
    maintainbar.children[1].style.height = number + "%";


    if (number <= 100 && number >= 75) {
        maintainbar.children[1].style.background = "red";
    } else if (number < 75 && number >= 50) {
        maintainbar.children[1].style.background = "orange";
    } else {
        maintainbar.children[1].style.background = "green";
    }
}
