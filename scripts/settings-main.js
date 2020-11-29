import * as util from "./util.js"
import * as recipe from "./ui-elements/recipe.js"

util.loadJS("scripts/ui-elements/batch.js");
util.loadJS("./scripts/ui-elements/properties.js");

new recipe.recipe('pilsner', 600, 450);
new recipe.recipe('wheat', 300, 150);
new recipe.recipe('ipa', 150, 120);
new recipe.recipe('stout', 200, 150);
new recipe.recipe('ale', 100, 50);
new recipe.recipe('alcoholFree', 125, 50);
