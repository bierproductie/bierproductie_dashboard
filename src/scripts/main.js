import * as maintain from "./ui-elements/maintain.js"
import * as inventory from "./ui-elements/inventory.js"
import * as btn from "./ui-elements/button.js"
import * as util from "./util.js"

util.loadJS("./scripts/ui-elements/production-control.js");

setTimeout(fecthMaintainsStatus, 1);
setTimeout(fecthInventoryStatus, 1);


new btn.button('humidity', "HUMIDITY");
new btn.button('vibration', "VIBRATION");
new btn.button('temp', "TEMPERATURE");
new btn.button('state', "STATE");
// new btn.button('DefectProducts', "REJECTED PRODUCTS");
// new btn.button('acceptableProducts', "ACCEPTABLE PRODUCTS");
// new btn.button('produced', "PRODUCED");
//

function fecthInventoryStatus() {
    fetch("https://api.bierproductie.nymann.dev/inventory_statuses/?page_size=20&page=1")
        .then(response => response.json())
        .then(data => {
            data.results.forEach(v => {
                new inventory.inventory(v.name, v.current_value, v.max_value);
            });
        })
    setTimeout(fecthInventoryStatus, 10000);
}

function fecthMaintainsStatus(){
    fetch("https://api.bierproductie.nymann.dev/maintenance/")
        .then(response => response.json())
        .then(data => {
            maintain.setMaintain(data.value);
        })
    setTimeout(fecthMaintainsStatus, 10000);
}
