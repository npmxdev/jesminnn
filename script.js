const move = document.querySelector("#moveRandom");

function moved (elm) {
    elm.style.position = "absolute";
    elm.style.left = Math.floor(Math.random()* 90 + 5 ) + "%";
    elm.style.top = Math.floor(Math.random()* 90 + 5 ) + "%";
}

move.addEventListener("mouseenter", function (e) {
    moved(e.target);
})

