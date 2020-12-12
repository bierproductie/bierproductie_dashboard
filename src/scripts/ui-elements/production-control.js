setInterval(function () {
let time = document.getElementsByClassName("ptime")[0];
    time.children[1].innerHTML = new Date()
        .toString()
        .slice(16, 25);
}, 1);
