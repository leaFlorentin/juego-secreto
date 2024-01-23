let intentos = 1;
let listasNumerosSorteados = [];
let numeroMaximo= 10;

function asignarTextoElemento(element, text){
    /*creamos una funcion para la cual con el primer parametro llamamos la etiqueta que queremos utilizar,
    y el segundo parametro para colocar el texto que queremos mostrar*/
    let elementosHTML = document.querySelector(element);
    elementosHTML.innerHTML = text;
    return;

}

/*Creamos una funcion que nos tire un numero aleatorio del 1 - 10 */
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado)
    console.log(listasNumerosSorteados)

    if (listasNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{
        //Si el numero generado esta incluido en la lista
        if (listasNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); // RECURSVIDAD, la funcion se llama a si misma. TIENE QUE VER UNA CONDICION DE SALIDA PARA QUE NO SE ROMPA
        }else{
            listasNumerosSorteados.push(numeroGenerado); //pusheamos el numero aleatorio en el array
            return numeroGenerado;
        }
    }
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //El parseInt hace que pase tipo de dato string a number
    
    console.log(intentos);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`); // forma de realizar una condicional dentro de una interpolacion
        document.getElementById('reiniciar').removeAttribute('disabled'); //Llamamos mediante el DOM el id reiniciar, para luego remover el comportamiento 'disabled' una vez que acertamos
    }else{
        //Si el usuario no acerta
        if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }

        intentos++; //sumamos los intentos cada vez que no acerte

        limpiarCaja(); //limpiamos la caja para que no sea tedioso borrar cada vez que erramos 
    }

    return;

}
/* Creamos una funcion que tiene como obejtivo borrar el numero de la caja en caso de errar */
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
}

//Creamos una funcion para simplificar codigo

function condicionesIniciales(){
    asignarTextoElemento('h1','Juega al numero secreto'); //invocamos la funcion dando como argumento la etiqueta HTML y luego el texto.
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`); //Invocamos la funcion dando como argumento la etiqueta HTML y luego el texto.
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego(){
    //Resetear la caja 
    limpiarCaja();

    //Indicar el mensaje de intervalo de numeros
    condicionesIniciales();

    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); //setAttribute recibe dos parametros
} 

condicionesIniciales();



/*
1-Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
2-Crea una función que calcule el valor del factorial de un número pasado como parámetro.
3-Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
4-Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
5-Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
6-Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

*/