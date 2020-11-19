export {
    setMaintain
};

console.log("Loading Maintains module!");

function setMaintain(number) {
    if (number > 100) {
        throw "Number is too big. Allowed number under 100";
    }

    console.log("Maintain number: ", number);
    document.getElementById("maintain-overlay")
        .innerText = number + "%";

    let maintainbar = document.getElementById("maintains-container");
    maintainbar.children[0].style.height = (100 - number) + "%";
    maintainbar.children[1].style.height = number + "%";


    if (number <= 100 && number >= 50) {} else if (number < 50 && number >= 25) {
        maintainbar.children[1].style.background = "orange";
    } else {
        maintainbar.children[1].style.background = "red";
    }
}
