import * as util from "./util.js"
import * as recipe from "./ui-elements/recipe.js"

util.loadJS("./scripts/ui-elements/properties.js");

fetch('https://api.bierproductie.nymann.dev/recipes/')
.then(response => response.json())
.then(data => {
    data.forEach(r => {
            new recipe.recipe(r.name, r.max_speed, r.recommended_speed);
    });
});
