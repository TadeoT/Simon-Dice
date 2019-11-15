
let arrayNumeros = [];
max = 1
$botonComenzar = document.querySelector("#comenzar");

$botonComenzar.onclick = function (){
    $botonComenzar.className="oculto";
    let intevalo = window.setInterval(function (){juego(arrayNumeros)},10000);
}


resolverPaso(arrayNumeros);

function juego(arrayNumeros){
    
    arrayNumeros.forEach(element => setTimeout (function (){
        console.log(element);
        SeleccionarCuadrado(element);
        setTimeout(function (){ deSeleccionarCuadrado(element)},1000);
    },1000));


    generarPaso(arrayNumeros);
    
    //resolverPaso(arrayNumeros);
    console.log("turno ", max);

    //console.log(arrayNumeros);
    max++;
}

function resolverPaso(array){
        const $botones = document.querySelectorAll(".cuadrado");
        const cuandoClickea = function (evento){
            console.log("El elemento es ", this.className);
        }
}


function generarPaso(array){
    //GENERA NUMERO ALATORIO
    let numero = generarAlatorio().toString();
    let id = asignarIdCuadrado(numero);
    
    //LO AGREGA AL ARRAY
    array.push(id);
    //LO MARCA
    SeleccionarCuadrado(id);
    //LO DESENMARCA
    setTimeout(function (){ deSeleccionarCuadrado(id)},1000);
    
}


function generarAlatorio(){
    let num = Math.random() * (5 - 1)+1;
    return Math.trunc(num);
}
function deSeleccionarCuadrado(id){
    let $cuadrado = document.querySelector(id)
    $cuadrado.className="cuadrado";
}
function SeleccionarCuadrado(id){
    let $cuadrado = document.querySelector(id)
    $cuadrado.className="cuadradoSeleccionado"
}
function asignarIdCuadrado(num){
    if(num==="1") return "#uno";
    else if(num==="2") return "#dos";
    else if(num==="3") return "#tres";
    else if(num==="4") return "#cuatro";
    else return "";
}











