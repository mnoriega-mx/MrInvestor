let invierteContainer = document.getElementById("invierte-container");
let invierteButton = document.getElementById("invierte-button");

invierteButton.addEventListener("mouseover", invierteMouseOver);
invierteButton.addEventListener("mouseout", invierteMouseOut);

function invierteMouseOver() {
    invierteContainer.style.background = "rgba(0, 0, 0, 0.178)";
}

function invierteMouseOut() {
    invierteContainer.style.background = "none";
}