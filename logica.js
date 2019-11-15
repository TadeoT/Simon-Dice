
let arrayNumeros = [];
let $botonComenzar = document.querySelector("#comenzar");


$botonComenzar.onclick = function (){
    document.querySelector("#contenedor").className="contenedor";
    arrayNumeros = []
    turno();

}




function turno(){

    agregarCuadrado();
  
    for(let i = 0;i<arrayNumeros.length;i++){
        setTimeout(function (){marcarCuadrado(arrayNumeros[i])},(i+1)*1000)
    }
    
    turnos =0;


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




function clickJugador(b){
        switch(b.id) {
            case 'uno':
                    comparar("#uno");
              break;
            case 'dos':
                    comparar("#dos");
              break;
            case 'tres':
                    comparar("#tres");
              break;
            case 'cuatro':  
                    comparar("#cuatro");
              break;
          }        
  
}



//FUNCIONES AUXILIARES


function finJuego(){
    alert("Perdiste, FIN DEL JUEGO");
    document.querySelector("#contenedor").className="oculto";
}

function marcarCuadrado(id){
    SeleccionarCuadrado(id);
    setTimeout(function (){deSeleccionarCuadrado(id)},500);
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











