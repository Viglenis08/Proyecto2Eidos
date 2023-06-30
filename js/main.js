// Activacion del "Menu Hamburguesa"
const menu = document.querySelector(".menu-container");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_abierto");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const enlaces = document.querySelectorAll(".menu-container a");

enlaces.forEach(enlace => {
    enlace.addEventListener("click", function() {
        menu.classList.remove("menu_abierto");
    })
})


// "Selector"
let menuItem = document.querySelectorAll(".menu-item");
menuItem.forEach(function (item){
     item.addEventListener("click", function(e){
         const currentItem = document.querySelector(".active");
         currentItem.classList.remove("active");
        e.target.classList.add("active");
});
});



//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let power_bi = document.getElementById("power_bi");
crearBarra(power_bi);
let leng_pyhton = document.getElementById("leng_pyhton");
crearBarra(leng_pyhton);
let php = document.getElementById("php");
crearBarra(php);
let base_de_dato = document.getElementById("base_de_dato");
crearBarra(base_de_dato);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barra

let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 13, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 13, 1, intervalJavascript);
        },100);
        const intervalPower_bi = setInterval(function(){
            pintarBarra(power_bi, 15, 2, intervalPower_bi);
        },100);
        const intervalLeng_pyhton = setInterval(function(){
            pintarBarra(leng_pyhton, 9, 3, intervalLeng_pyhton);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php, 11, 4, intervalPhp);
        },100);
        const intervalBase_de_dato = setInterval(function(){
            pintarBarra(base_de_dato, 13, 5, intervalBase_de_dato);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}