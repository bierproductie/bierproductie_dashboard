import * as util from "./util.js"
import * as recipe from "./ui-elements/recipe.js"

util.loadJS("./scripts/ui-elements/properties.js");

fetch('https://api.bierproductie.nymann.dev/recipes/')
.then(response => response.json())
.then(data => {
    console.log(data);
    data.forEach(r => {
        if(r.name === "alcoholFree"){
            new recipe.recipe(r.name, r.max_speed, r.recommended_speed, 'alcohol free');
        } else{
            new recipe.recipe(r.name, r.max_speed, r.recommended_speed);
        }
    });
});