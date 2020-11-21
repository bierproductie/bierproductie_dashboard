export { button };
import * as graph from "./graph.js"
console.log("Loading Button module!");

class button {
    constructor(name, label){
        const graphView = new graph.graph("graph", name, label, 
            [1,2,3,4,5,6,7,8,9,10], [20,30,40,50,59,50,40,50,10,99]);

        const temp = document.getElementsByClassName(name)[0];
        temp.addEventListener("click", () => {
            document.getElementsByClassName('marked')[0].classList.remove("marked");
            temp.classList.add("marked");
            graphView.updateView();
        });
    }
}
