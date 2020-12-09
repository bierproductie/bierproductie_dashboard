export { button };
import * as graph from "./graph.js"
console.log("Loading Button module!");

class button {
    constructor(name, label, func){

        let temp = document.getElementsByClassName(name)[0];
        let graphView = undefined;

        temp.addEventListener("click", () => {
            let marked = document.getElementsByClassName('marked');
            if (marked.length > 0) {
                marked[0].classList.remove("marked");
            }
            temp.classList.add("marked");


            if (graphView === undefined) {
                graphView = new graph.graph("graph", name, label, 
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [20,30,40,50,59,50,40,50,10,99]);
                console.log("UGGGHGFFF");
            } else {
                graphView.destroy();
                console.log("RIP")
                graphView.new("graph", name, label, 
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [20,30,40,50,59,50,40,50,10,99]);
                // graphView.updateView();
            }
        });
    }
}
