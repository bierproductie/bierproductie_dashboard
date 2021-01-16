let x = 0;

setInterval(function () {
    let time = document.getElementsByClassName("ptime")[0];
    time.children[1].innerHTML = getTime();
}, 1000);

function getTime() {
    ++x;
    return new Date(x * 1000).toISOString().substr(11, 8);
}
