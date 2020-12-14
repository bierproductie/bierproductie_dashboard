export { 
    history,
}
import * as btn from "./button.js"

console.log("Loading history module!");



class history {
    constructor(id, name, speed, ATP, oee){
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

            document.getElementById("oee").innerText = oee;
            document.getElementById("btnPPM").innerText = speed;
            document.getElementById("btnATP").innerText = ATP;


        fetch("https://api.bierproductie.nymann.dev/data_over_time/"+this.id+"?page_size=1&page=1")
            .then(response => response.json())
            .then(data => {
                let rejected = data.results[0].rejected;
                let produced = data.results[0].produced;
                document.getElementById("btnRP").innerText = rejected;
                document.getElementById("btnProd").innerText = produced;
                document.getElementById("btnAP").innerText = produced - rejected;

            });


            this.stateArray = {x: [], y: []};
            this.tempArray = {x: [], y: []};
            this.humArray = {x: [], y: []};
            this.vibArray = {x: [], y: []};

            this.fecthGraphData(1);

            new btn.button('humidity', "HUMIDITY", this.humArray);
            new btn.button('vibration', "VIBRATION", this.vibArray);
            new btn.button('state', "STATE", this.stateArray);
            new btn.button('temp', "TEMPERATURE", this.tempArray);
            // new btn.button('acceptableProducts', "ACCEPTABLE PRODUCTS");
            // new btn.button('DefectProducts', "REJECTED PRODUCTS");
            // new btn.button('produced', "PRODUCED");
        });
        document.getElementsByClassName("histList")[0].appendChild(li);

    }

    fecthGraphData(index){
        fetch("https://api.bierproductie.nymann.dev/data_over_time/"+this.id+"?page_size=100&page="+index)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.results.reverse().forEach(v => {
                    let dateWithTime = new Date(v.measurement_ts); 
                    this.stateArray.x.push(dateWithTime);
                    this.stateArray.y.push(v.state);
                    this.humArray.x.push(dateWithTime);
                    this.humArray.y.push(v.humidity);
                    this.vibArray.x.push(dateWithTime);
                    this.vibArray.y.push(v.vibration);
                    this.tempArray.x.push(dateWithTime);
                    this.tempArray.y.push(v.temperature);
                });
                if (data.pagination.more) {
                    this.fecthGraphData(index+1)
                }
            })
    }
}
