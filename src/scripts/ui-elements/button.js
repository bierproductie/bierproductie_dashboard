export { button };
import * as graph from "./graph.js"
console.log("Loading Button module!");

class button {
    constructor(name, label, Array){

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
                    Array);
            } else {
                this.graphView.destroy();
                this.graphView.new("graph", name, label, 
                    Array);
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
