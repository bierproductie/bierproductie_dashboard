console.log("Loading Maintains module!");
maintain = document.getElementById("maintains-container");

function setMaintain(number) {
    let firstHalf = 100 - number;

    let div = document.createElement("div");
    div.style.backgroundColor = "#DDDDDD";
    div.style.height = firstHalf+"%";
    maintain.appendChild(div);

    let div2 = document.createElement("div");
    div2.style.backgroundColor = "red";
    div2.style.height = number+"%";

    maintain.appendChild(div2);
    // innerMaintain.innerText = number+"%";
}

// setMaintain(75);
