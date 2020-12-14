document.getElementById("btstart").addEventListener("click", () => {
    let speed = document.getElementById("speed").value;
    let amount_to_produce = document.getElementById("amount").value;
    let maxSpeed = document.getElementById("speed").max;
    let recipe = document.getElementsByClassName("marked")[0].children[0].innerHTML;


    if (document.getElementById("speed").placeholder != "" && 0 < speed <= maxSpeed && amount_to_produce > 0) {
        fetch('https://api.bierproductie.nymann.dev/batches/', {
            method: 'POST',
            body: JSON.stringify({
                speed: speed,
                amount_to_produce: amount_to_produce,
                recipe_id: recipe
            })
        })
            .then(response => response.json())
            .then(data => console.log(data));

        setTimeout(() =>{location.href='index.html'}, 10);
    } else {
        alert("Please check you have chosen a recipe and the speed is not over: " + maxSpeed);
    }
});
