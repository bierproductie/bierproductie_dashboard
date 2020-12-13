export { graph };

console.log("Loading Graph module!");

class graph {
    constructor(canvasName ,graphName, graphLabel, array){
        this.graphName = graphName;
        this.label = graphLabel;
        this.ctx = document.getElementById(canvasName).getContext('2d');
        this.leftLabel = document.getElementById("graph-left");
        this.topLabel = document.getElementById("graph-top");
        // Documentaion!: https://www.chartjs.org/docs/latest/
        this.graph = new Chart(this.ctx, {
            type: 'line',
            data: {
                labels: "SomeThing",
                datasets: [{
                    label: graphName,
                    data: array,
                    fill: false,
                    backgroundColor: '#388DA6',
                    borderColor: '#388DA6',
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],

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
            data: {
                labels: "this is true you know",
                datasets: [{
                    label: graphName,
                    data: array,
                    fill: false,
                    backgroundColor: '#388DA6',
                    borderColor: '#388DA6',
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
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
