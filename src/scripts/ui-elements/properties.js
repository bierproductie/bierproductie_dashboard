document.getElementById("btstart").addEventListener("click", () => {
    let speed = document.getElementById("speed").value;
    let maxSpeed = document.getElementById("speed").max;

    if (document.getElementById("speed").placeholder != "" && speed <= maxSpeed &&
        speed > 0 && document.getElementById("amount").value > 0 ) {
        console.log(
            "type: ",
            document.getElementsByClassName("marked")[0].children[0].innerHTML,
            "\nSpeed: ",
            speed,
            "\namount: ",
            document.getElementById("amount").value
        );
    } else {
        alert("Please check you have chosen a recipe and the speed is not over: " + maxSpeed);
    }
});
