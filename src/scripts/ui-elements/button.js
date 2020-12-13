export { button };
import * as graph from "./graph.js"
console.log("Loading Button module!");

class button {
    constructor(name, label, ArrayX, ArrayY){

        let temp = document.getElementsByClassName(name)[0];
        this.graphView = undefined;

        temp.addEventListener("click", () => {
            let marked = document.getElementsByClassName('marked');
            if (marked.length > 0) {
                marked[0].classList.remove("marked");
            }
            temp.classList.add("marked");


            if (this.graphView === undefined) {
                this.graphView = new graph.graph("graph", name, label, 
                    ArrayX, ArrayY);
                console.log("UGGGHGFFF");
            } else {
                this.graphView.destroy();
                console.log("RIP")
                this.graphView.new("graph", name, label, 
                    ArrayX, ArrayY);
                // graphView.updateView();
            }
        });
    }
    update() {
        if (this.graphView !== undefined) {
            this.graphView.updateView();
        }
    }
}
