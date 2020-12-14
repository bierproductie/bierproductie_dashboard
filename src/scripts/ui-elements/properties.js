document.getElementById("btstart").addEventListener("click", () => {
    let speed = parseInt(document.getElementById("speed").value);
    let amount_to_produce = parseInt(document.getElementById("amount").value);
    let maxSpeed = parseInt(document.getElementById("speed").max);
    let recipe = document.getElementsByClassName("marked")[0].children[0].innerHTML;


    if (document.getElementById("speed").placeholder != "" && 0 < speed && speed <= maxSpeed && amount_to_produce > 0) {
        fetch('https://api.bierproductie.nymann.dev/batches/', {
            method: 'POST',
            body: JSON.stringify({
                speed: speed,
                amount_to_produce: amount_to_produce,
                recipe_id: recipe
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                location.href='index.html';
            });
    } else {
        alert("Please check you have chosen a recipe and the speed is not over: " + maxSpeed);
    }
});
