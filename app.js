Swal.fire(
    'Jugamos?!',
    'Gana el primero que obtenga 3 puntos!',
    'success'
  )

//capturando elementos del DOM (en este caso los botones)
let botonPiedra = document.querySelector('.piedra')
let botonPapel = document.querySelector('.papel')
let botonTijera = document.querySelector('.tijera')

let manoUsuario = document.querySelector('.mano-usuaria')
let manoComputador = document.querySelector('.mano-computadora')

let puntajeUsuario = document.querySelector('.puntaje-usuaria p')
let puntajeComputador = document.querySelector('.puntaje-computadora p')

let labelResultado = document.querySelector('.resultado')

let tablero = document.querySelector('.tablero')

let eleccionUsuario= ""
let eleccionCompu = ""

let contadorUsuario = 0
let contadorComputador = 0

const eleccionComputadora = () => {
  let opcionAlAzar = Math.floor(Math.random()*3)

  //opcion piedra

  if(opcionAlAzar == 0 ){
    manoComputador.src = "assets/piedra_computadora.png"
    eleccionCompu = "piedra"
  }
  else if (opcionAlAzar == 1){
    manoComputador.src = "assets/papel_computadora.png"
    eleccionCompu = "papel"
  }
  else {
    manoComputador.src = "assets/tijera_computadora.png"
    eleccionCompu = "tijera"
  }
}

botonPiedra.onclick = () => {
  manoUsuario.src = "assets/piedra_user.png";
  manoComputador.src = "assets/piedra_computadora.png";
  labelResultado.textContent="...";
  tablero.classList.add("jugando");
  setTimeout(() => {
    eleccionUsuario = "piedra";
    manoUsuario.src = "assets/piedra_user.png";
    eleccionComputadora();
    resultado();
    tablero.classList.remove("jugando");
  }, 200);
};

botonPapel.onclick = () => {
  manoUsuario.src = "assets/papel_user.png";
  manoComputador.src = "assets/papel_computadora.png";
  labelResultado.textContent="...";
  tablero.classList.add("jugando");
  setTimeout(() => {
    eleccionUsuario = "papel";
    manoUsuario.src = "assets/papel_user.png";
    eleccionComputadora();
    resultado();
    tablero.classList.remove("jugando");
  }, 200);
};

botonTijera.onclick = () => {
  manoUsuario.src = "assets/tijera_user.png";
  manoComputador.src = "assets/tijera_computadora.png";
  labelResultado.textContent="...";
  tablero.classList.add("jugando");
  setTimeout(() => {
    eleccionUsuario = "tijera";
    manoUsuario.src = "assets/tijera_user.png";
    eleccionComputadora();
    resultado();
    tablero.classList.remove("jugando");
  }, 200);
};

const resultado = () => {
    if(eleccionUsuario == "piedra") {
        if(eleccionCompu == "piedra"){
            labelResultado.textContent = "empate"
        }
        if(eleccionCompu == "papel"){
            labelResultado.textContent = "perdiste"
            contadorComputador++;
            puntajeComputador.textContent = contadorComputador;
            ganador(contadorUsuario, contadorComputador)
        }
        if(eleccionCompu == "tijera"){
            labelResultado.textContent = "Ganaste"
            contadorUsuario++;
            puntajeUsuario.textContent = contadorUsuario;
            ganador(contadorUsuario, contadorComputador)
        }
    }
    if(eleccionUsuario == "papel") {
        if(eleccionCompu == "piedra"){
            labelResultado.textContent = "Ganaste"
            contadorUsuario++;
            puntajeUsuario.textContent = contadorUsuario;
            ganador(contadorUsuario,contadorComputador)
        }
        if(eleccionCompu == "papel"){
            labelResultado.textContent = "empate"
           
        }
        if(eleccionCompu == "tijera"){
            labelResultado.textContent = "Perdiste"
            contadorComputador++;
            puntajeComputador.textContent = contadorComputador;
            ganador(contadorUsuario,contadorComputador)
        }
    }
    if(eleccionUsuario == "tijera") {
        if(eleccionCompu == "piedra"){
            labelResultado.textContent = "Perdiste"
            contadorComputador++;
            puntajeComputador.textContent = contadorComputador;
            ganador(contadorUsuario,contadorComputador)
        }
        if(eleccionCompu == "papel"){
            labelResultado.textContent = "Ganaste"
            contadorUsuario++;
            puntajeUsuario.textContent = contadorUsuario;
            ganador(contadorUsuario,contadorComputador)
        }
        if(eleccionCompu == "tijera"){
            labelResultado.textContent = "empate"
           
        }
    }
}

function ganador(usua, compu) {
    if (usua == 3) {
        Swal.fire(
            'Gano!'
            )
            contadorUsuario = 0
            puntajeUsuario.textContent = contadorUsuario;
            contadorComputador = 0
            puntajeComputador.textContent = contadorComputador;
        }
    
    if (compu == 3) {
        Swal.fire(
            'Perdio!'
        )
        contadorUsuario = 0
            puntajeUsuario.textContent = contadorUsuario;
            contadorComputador = 0
            puntajeComputador.textContent = contadorComputador;
    }
    
}
