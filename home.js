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

let queEsContainer = document.getElementById("que-es");
let inversion1 = document.getElementById("fondo-de-inversion1");
let inversion2 = document.getElementById("fondo-de-inversion2");
let inversion3 = document.getElementById("fondo-de-inversion3");
let inversion4 = document.getElementById("fondo-de-inversion4");

queEsContainer.addEventListener("mouseover", queEsMouseOver);
queEsContainer.addEventListener("mouseout", queEsMouseOut);

inversion1.addEventListener("mouseover", inversion1MouseOver);
inversion1.addEventListener("mouseout", inversion1MouseOut);
inversion2.addEventListener("mouseover", inversion2MouseOver);
inversion2.addEventListener("mouseout", inversion2MouseOut);
inversion3.addEventListener("mouseover", inversion3MouseOver);
inversion3.addEventListener("mouseout", inversion3MouseOut);
inversion4.addEventListener("mouseover", inversion4MouseOver);
inversion4.addEventListener("mouseout", inversion4MouseOut);

function queEsMouseOver() {
    queEsContainer.style.color = "white";
}
function queEsMouseOut() {
    queEsContainer.style.color = "#BB2624";
}

function inversion1MouseOver() {
    inversion1.style.color = "white";
}
function inversion1MouseOut() {
    inversion1.style.color = "#151E47";
}

function inversion2MouseOver() {
    inversion2.style.color = "white";
}
function inversion2MouseOut() {
    inversion2.style.color = "#151E47";
}

function inversion3MouseOver() {
    inversion3.style.color = "white";
}
function inversion3MouseOut() {
    inversion3.style.color = "#151E47";
}

function inversion4MouseOver() {
    inversion4.style.color = "white";
}
function inversion4MouseOut() {
    inversion4.style.color = "#151E47";
}



