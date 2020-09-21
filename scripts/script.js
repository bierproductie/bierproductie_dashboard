let time = document.getElementsByClassName("ptime");
time[0].addEventListener("click", () => {
  console.log("Ale production");
});

setInterval(function()
  { time[0].innerHTML = new Date().toString().slice(16, 25);}, 1000);

