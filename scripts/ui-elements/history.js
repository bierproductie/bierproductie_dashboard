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
            new btn.button('humidity', "HUMIDITY");
            new btn.button('vibration', "VIBRATION");
            new btn.button('state', "STATE");
            new btn.button('temp', "TEMPERATURE");
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
