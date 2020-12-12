import * as util from "./util.js"
import * as recipe from "./ui-elements/recipe.js"

util.loadJS("./scripts/ui-elements/properties.js");

new recipe.recipe('pilsner', 600, 435);
new recipe.recipe('wheat', 300, 157);
new recipe.recipe('ipa', 150, 94);
new recipe.recipe('stout', 200, 200);
new recipe.recipe('ale', 100, 92);
new recipe.recipe('alcoholFree', 125, 95, 'alcohol free');
