export { graph };

console.log("Loading Graph module!");

class graph {
    constructor(canvasName ,graphName, graphLabel, array){
        console.log(array[3]);
        this.graphName = graphName;
        this.label = graphLabel;
        let ctx = document.getElementById(canvasName).getContext('2d');
        this.leftLabel = document.getElementById("graph-left");
        this.topLabel = document.getElementById("graph-top");
        // Documentaion!: https://www.chartjs.org/docs/latest/
        this.graph = new Chart(ctx, {
            type: 'line',
            data: {
                labels: array.x,
                datasets: [{
                    label: graphName,
                    data: array.y,
                    fill: false,
                    backgroundColor: '#388DA6',
                    borderColor: '#388DA6',
                    borderWidth: 2,
                }]
            },

            options: {
                scales: {
                    xAxes: [{
                        type: 'time',
                    }]
                }
            }
        });
        console.log(this.graph);
    }

    new(canvasName ,graphName, graphLabel, array){
        this.graphName = graphName;
        this.label = graphLabel;
        let ctx = document.getElementById(canvasName).getContext('2d');
        this.leftLabel = document.getElementById("graph-left");
        this.topLabel = document.getElementById("graph-top");
        // Documentaion!: https://www.chartjs.org/docs/latest/
        this.graph = new Chart(ctx, {
            type: 'line',
            data: {
                labels: array.x,
                datasets: [{
                    label: graphName,
                    data: array.y,
                    fill: false,
                    backgroundColor: '#388DA6',
                    borderColor: '#388DA6',
                    borderWidth: 2,
                }]
            },

            options: {
                scales: {
                    xAxes: [{
                        type: 'time',
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
