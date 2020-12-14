import * as util from "./util.js"
import * as hist from "./ui-elements/history.js"


fetch('https://api.bierproductie.nymann.dev/batches/')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(batch => {
            new hist.history(batch.identifier, batch.recipe_id, batch.speed, batch.amount_to_produce, batch.oee);
        });
    });
