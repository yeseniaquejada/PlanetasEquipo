import corredores  from "./planetas.js"

let valores;
let distancia;
let nombrePlaneta = [];
let arregloPlaneta = [];
let aTamanio = [];

let enviar = document.getElementById('btnEnviar');

enviar.addEventListener("click", e => {

    let numPlanetas = [...document.querySelectorAll('.numeroPlaneta')];
    let nomPlanetas = [...document.querySelectorAll('.nombrePlaneta')];
    let dPlaneta = [...document.querySelectorAll('.distanciaPlaneta')];
    let tamanio = [...document.querySelectorAll('.tamanioPlanetas')];

    valores = numPlanetas.map(numero => {
        return parseInt(numero.value);
    });
    nombrePlaneta = nomPlanetas.map(name =>{
        return name.value
    });
    distancia = dPlaneta.map(distancia => {
        return distancia.value
    });
    aTamanio = tamanio.map(longitud =>{
        return longitud.value
    });

})