export { graph };

console.log("Loading Graph module!");

class graph {
    constructor(canvasName ,graphName, graphLabel, array){
        console.log(array[3]);
        this.graphName = graphName;
        this.label = graphLabel;
        this.ctx = document.getElementById(canvasName).getContext('2d');
        this.leftLabel = document.getElementById("graph-left");
        this.topLabel = document.getElementById("graph-top");
        // Documentaion!: https://www.chartjs.org/docs/latest/
        this.graph = new Chart(this.ctx, {
            type: 'line',
            data: array,
            options: {
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'month'
                        }
                    }]
                }
            }
        });
    }

    new(canvasName ,graphName, graphLabel, array){
        this.graphName = graphName;
        this.label = graphLabel;
        this.ctx = document.getElementById(canvasName).getContext('2d');
        this.leftLabel = document.getElementById("graph-left");
        this.topLabel = document.getElementById("graph-top");
        // Documentaion!: https://www.chartjs.org/docs/latest/
        this.graph = new Chart(this.ctx, {
            type: 'line',
            data: array,
            options: {
                scales: {
                    xAxes: [{
                        type: 'Date',
                        distribution: 'linear'
                    }]
                }
            }
        });
    }

    destroy() {
        this.graph.destroy();
    }

    addData(arrayX, arrayY){
        this.graph.data.labels.push(arrayX);

        this.graph.data.datasets.forEach((dataset) => {
            dataset.data.push(arrayY);
        });
        this.graph.update();
    }

    updateView(){
        this.graph.update();
        this.topLabel.innerText = this.label;
    }
}
