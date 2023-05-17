// Obtener los elementos de botón y la imagen dentro de cada botón
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const img1 = btn1.querySelector("#ibefore");
const img2 = btn2.querySelector("#ibefore");
const img3 = btn3.querySelector("#ibefore");

// Agregar eventos de clic a cada botón
btn1.addEventListener("click", function (){
    img1.src = "css/img/pokestop_after.png";
});
btn2.addEventListener("click", function () {
    img2.src = "css/img/pokestop_after.png";
});
btn3.addEventListener("click", function () {
    img3.src = "css/img/pokestop_after.png";
});