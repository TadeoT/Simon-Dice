
let arrayNumeros = [];
let jugadas = 0;
const $botonComenzar = document.querySelector("#comenzar");
const $jugadas = document.querySelector("#jugadas");

$botonComenzar.onclick = function (){
    document.querySelector("#contenedor").className="contenedor";
    arrayNumeros = []
    jugadas = 0;
    turno();

}




function turno(){

    agregarCuadrado();
  
    for(let i = 0;i<arrayNumeros.length;i++){
        setTimeout(function (){marcarCuadrado(arrayNumeros[i])},(i+1)*1000)
    }
    
    turnos =0;
    $jugadas.value = jugadas;
    jugadas++;

}



function comparar(b){
    if (b === arrayNumeros[turnos]){
        turnos++;
        if (turnos === arrayNumeros.length){
            return setTimeout(function(){
                turno()}, 1000
            );
        }
        else{
            return '';
        }   
    }

    if (b != arrayNumeros[turnos]){
       finJuego();
    }
}

const Botones = {
    uno: function(){comparar('#uno')},
    dos: function(){comparar('#dos')},
    tres: function(){comparar('#tres')},
    cuatro: function(){comparar('#cuatro')}
}

function sonidoBoton(id){
    
    document.querySelector("#audio-"+id).play();
}
function clickJugador(b){
    let id = b.id;
    let boton = Object.create(Botones);
    boton[id]();
    sonidoBoton(id);



  
}



//FUNCIONES AUXILIARES


function finJuego(){
    alert("FIN DEL JUEGO "+ "Tu score fue : "+ --jugadas +" Ronda/s");
    document.querySelector("#contenedor").className="oculto";
    throw new Error("Perdiste")
}

function marcarCuadrado(id){
    SeleccionarCuadrado(id);
    setTimeout(function (){deSeleccionarCuadrado(id)},500);
    sonidoBoton((id.substring(1)));
}

function deSeleccionarCuadrado(id){
    let $cuadrado = document.querySelector(id)
    $cuadrado.className="cuadrado";
    
}
function SeleccionarCuadrado(id){
    let $cuadrado = document.querySelector(id)
    $cuadrado.className="cuadradoSeleccionado"

}




//INICIALIZACION
function agregarCuadrado(){
    //GENERA NUMERO ALATORIO
    let numero = generarAlatorio().toString();
    let id = asignarIdCuadrado(numero);
    
    //LO AGREGA AL ARRAY
    arrayNumeros.push(id);
}

function generarAlatorio(){
    let num = Math.random() * (5 - 1)+1;
    return Math.trunc(num);
}

function asignarIdCuadrado(num){
    if(num==="1") return "#uno";
    else if(num==="2") return "#dos";
    else if(num==="3") return "#tres";
    else if(num==="4") return "#cuatro";
    else return "";
}











