import corredores  from "./planetas.js"

let id;
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

    id = numPlanetas.map(numero => {
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

    for (let x = 1; x <= arregloValores.length; x++) {
        let planeta = new Planeta();
        planeta.distancia_tierra = document.getElementById(`d_planeta_${x}`).value;
        planeta.nombre = document.getElementById(`np_planeta_${x}`).value;
        planeta.numero_clasificacion = document.getElementById(`n_planeta_${x}`).value;
        planeta.tamanio = document.getElementById(`t_planeta_${x}`).value;
    
        arregloPlanetas.push(planeta);
        console.log(x)
    }
});

