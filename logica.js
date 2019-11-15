
let arrayNumeros = [];
max = 1;
$botonComenzar = document.querySelector("#comenzar");

$botonComenzar.onclick = function (){
    $botonComenzar.className="oculto";
    window.setInterval(function (){turno(arrayNumeros)},5000);
}



function turno(arrayNumeros){
    agregarCuadrado(arrayNumeros);
  
    
    
    //resolverPaso(arrayNumeros);
    console.log("turno ", max);

    //console.log(arrayNumeros);
    max++;
}


function agregarCuadrado(array){
    //GENERA NUMERO ALATORIO
    let numero = generarAlatorio().toString();
    let id = asignarIdCuadrado(numero);
    
    //LO AGREGA AL ARRAY
    array.push(id);
}


function generarAlatorio(){
    let num = Math.random() * (5 - 1)+1;
    return Math.trunc(num);
}

function marcarCuadrado(id){
    SeleccionarCuadrado(id);
    setTimeout(function (){deSeleccionarCuadrado(id)},1000)
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











