import { barcelona, roma, paris, londres } from "./ciudades.js";

// OBTENER LOS ELEMENTOS DEL DOM
let enlaces = document.querySelectorAll('a')

let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

// AGREGAMOS UN EVENTO CLICK PARA LOS ENLACES

enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        // REMOVER EL ACTIVO de todos los enlaces
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        });

        // AGREGAR EL ACTIVO AL QUE CORRESPONDA
        this.classList.add('active')

        // TRAER INFORMACION DEL OBJETO CORRESPONDIENTE A LA ELECCION
        let contenido = obtenerContenido(this.textContent)

        // MOSTRAR EL CONTENIDO EN EL DOM
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
    });
})


// FUNCION PARA TRAER LA INFORMACION CORRECTA DESDE CIUDADES.JS

function obtenerContenido (enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    };
    return contenido[enlace]
}

// console.log(enlaces)




