export { graph };

console.log("Loading Graph module!");

class graph {
    constructor(canvasName ,graphName, graphLabel, arrayX, arrayY){
        this.graphName = graphName;
        this.label = graphLabel;
        this.ctx = document.getElementById(canvasName).getContext('2d');
        this.leftLabel = document.getElementById("graph-left");
        this.topLabel = document.getElementById("graph-top");
        // Documentaion!: https://www.chartjs.org/docs/latest/
        this.graph = new Chart(this.ctx, {
            type: 'line',
            data: {
                labels: arrayX,
                datasets: [{
                    label: graphName,
                    data: arrayY,
                    fill: false,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
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
