const select_items = document.getElementsByClassName("select-items")[0];
document.getElementById("batchNr")
    .addEventListener("click", () => {
        select_items.classList.toggle("select-hide");
    });

document.getElementsByClassName("batchNr")[0].addEventListener("click", () => {
    select_items.classList.toggle("select-hide");
});

const data = [2312, 2390, 2039, 1023, 2093, 1049, 1923, 231];
data.forEach((batch) => {
    const div = document.createElement("div");
    div.innerText = batch;
    div.addEventListener("click", () => {
        document.getElementsByClassName("batchNr")[0].value = batch;
    });
    select_items.appendChild(div);
});

document.addEventListener("click", (element) => {
    if (element.target == document.getElementById("batchNr") ||
        element.target == document.getElementsByClassName("batchNr")[0]) {} else {
        select_items.classList.add("select-hide");
    }
});
