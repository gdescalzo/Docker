var cadena = "esto es una cadena de caracteres";
var entero = 5;
var decimal = 4.5;
var caracter = "C";
var booleano = true;
var arreglo = ["elemento1", "elemento2", "elemento3"];
console.log(cadena);
console.log(entero);
console.log(decimal);
console.log(caracter);
console.log(booleano);
console.log(arreglo);

if (booleano){
    alert("la expreción del if es true");
}

for (var i = 0; i < 10; i++){
    console.log("el valor de i es " + i);
}

switch (caracter) {
    case "A":
        alert("el valor es A");
        break;
    
    case "B":
        alert("el valor es B");
        break;
    
    case "C":
        alert("el valor es C");
        break;
    
    
    default:
        alert("ninguún valor evaluado");
        break;
}

var contador = 1;
while (contador <= 5) {
    console.log("en el ciclo While " + contador);
    contador ++;
}

function agregar_producto(){
    alert("Se agregará un producto");
}

$(document).ready(function(){

    var texto = document.getElementById("boton_agregar").innerHTML;
    console.log(texto);
    texto = $("#boton_agregar").html();
    console.log(texto);
    
//    $(".btn-agregar").on("click", agregar_producto);
    
    $(".btn-agregar").on("click", function(){
        $("#label").css({display: "block"});
    });
});