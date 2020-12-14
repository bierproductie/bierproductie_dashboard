export { 
    history,
}
import * as btn from "./button.js"

console.log("Loading history module!");

class history {
    constructor(id, name){
        this.id = id;
        this.name = name;
        // {
        //     document.getElementsByClassName('marked')[0].classList.remove("marked");
        //     temp.classList.add("marked");
        //     graphView.updateView();
        // }

        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerText = "Batch: "+this.id+" - "+this.name;
        li.appendChild(p);
        li.classList.add("histItem");
        li.addEventListener('click', () => {
            let remove = document.getElementsByClassName('marked-list');
            if (remove.length > 0){
                remove[0].classList.remove("marked-list");
            }
            li.classList.add("marked-list");

            const stateArray = {x: [], y: []};
            const tempArray = {x: [], y: []};
            const humArray = {x: [], y: []};
            const vibArray = {x: [], y: []};

            //Fetch batch
            fetch("https://api.bierproductie.nymann.dev/data_over_time/"+this.id+"?page_size=100&page=1")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.results.reverse().forEach(v => {
                    let dateWithTime = new Date(v.measurement_ts); 
                    stateArray.x.push(dateWithTime);
                    stateArray.y.push(v.state);
                    humArray.x.push(dateWithTime);
                    humArray.y.push(v.humidity);
                    vibArray.x.push(dateWithTime);
                    vibArray.y.push(v.vibration);
                    tempArray.x.push(dateWithTime);
                    tempArray.y.push(v.temperature);
                });
            })

            console.log(stateArray);

            new btn.button('humidity', "HUMIDITY", humArray);
            new btn.button('vibration', "VIBRATION", vibArray);
            new btn.button('state', "STATE", stateArray);
            new btn.button('temp', "TEMPERATURE", tempArray);
            // new btn.button('acceptableProducts', "ACCEPTABLE PRODUCTS");
            // new btn.button('DefectProducts', "REJECTED PRODUCTS");
            // new btn.button('produced', "PRODUCED");
        });
        document.getElementsByClassName("histList")[0].appendChild(li);

    }

    showTemperature(){
    }

    showHumidity(){
    }

    showVibration(){
    }

    showProduced(){
    }

    showAcceptableProducts(){
    }

    showRejectedProducts(){
    }

    showState(){
    }
}
