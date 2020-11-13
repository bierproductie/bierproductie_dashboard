let time = document.getElementsByClassName("ptime");
time[0].addEventListener("click", () => {
    console.log("Ale production");
});


function buttonFac(name){
    let temp = document.getElementsByClassName(name);
    temp[0].addEventListener("click", () => {
        RemoveMarked();
        temp[0].className += ' marked';
    });
}

buttonFac('temp');
buttonFac('state');
buttonFac('humidity');
buttonFac('productsPerMin');
buttonFac('amountToProduce');
buttonFac('acceptableProducts');
buttonFac('vibration');
buttonFac('DefectProducts');
buttonFac('produced');

function RemoveMarked(){
    let marked = document.getElementsByClassName('marked')[1];
    console.log(marked.className);
    marked.className = marked.className.split(' ')[0];
}

setInterval(function() { 
    time[0].innerHTML = new Date().toString().slice(16, 25);
}, 0000);
