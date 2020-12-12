import * as maintain from "./ui-elements/maintain.js"
import * as inventory from "./ui-elements/inventory.js"
import * as btn from "./ui-elements/button.js"
import * as util from "./util.js"

util.loadJS("./scripts/ui-elements/production-control.js");

maintain.setMaintain(50);

let barley = new inventory.inventory("BARLEY", 10, 20);
barley.setBar(3);


new inventory.inventory("MALT", 10, 20);
new inventory.inventory("HOPS", 15, 20);
new inventory.inventory("WHEAT", 9, 20);
new inventory.inventory("YEAST", 4, 20);


new btn.button('humidity', "HUMIDITY");
new btn.button('vibration', "VIBRATION");
new btn.button('temp', "TEMPERATURE");
new btn.button('state', "STATE");
// new btn.button('DefectProducts', "REJECTED PRODUCTS");
// new btn.button('acceptableProducts', "ACCEPTABLE PRODUCTS");
// new btn.button('produced', "PRODUCED");
