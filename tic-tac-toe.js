const casillas = document.getElementsByClassName("casilla");
const textoAdvertencia = document.getElementById("textoAdvertencia");
const textoGanador = document.getElementById("textoGanador");
const ganeJugador = document.getElementById("ganeJugador");
const ganeMaquina = document.getElementById("ganeMaquina");
const reiniciar = document.getElementById("reiniciar");
const btnReloadScore = document.getElementById("btnReloadScore");
let listaPosiciones = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let listaDisponibles = [];
let listaX = [];
let listaO = [];
let gane = 0;


let contadorJugador = localStorage.getItem("contadorJugador");
let contadorMaquina = localStorage.getItem("contadorMaquina");

ganeJugador.innerHTML = localStorage.getItem("contadorJugador") + " wins";
ganeMaquina.innerHTML = localStorage.getItem("contadorMaquina") + " wins";

reiniciar.addEventListener("click", function name(params) {
    location.reload();
})

btnReloadScore.addEventListener("click", function () {
    contadorJugador = 0;
    contadorMaquina = 0;
    localStorage.setItem("contadorJugador", contadorJugador);
    localStorage.setItem("contadorMaquina", contadorMaquina);
    location.reload();
})


for (let index = 0; index < casillas.length; index++) {
    casillas[index].addEventListener("click", function () {
        if (casillas[index].textContent == "") {
            casillas[index].innerHTML = "X";
            casillas[index].style.backgroundColor = "rgb(0, 208, 255)"
            listaX.push(index);
            textoGanador.innerHTML = encontrarGane(listaX, listaO);
            listaDisponibles = listaPosiciones.filter(espacios => espacios != index);
            listaPosiciones = listaPosiciones.filter(espacios => espacios != index);

            if (gane === 0) {
                if (listaDisponibles.length > 1) {
                    let valorRam = Math.floor((Math.random() * listaDisponibles.length));
                    let posicion = listaDisponibles[valorRam];
                    casillas[posicion].innerHTML = "O";
                    listaO.push(posicion);
                    textoGanador.innerHTML = encontrarGane(listaX, listaO);
                    listaDisponibles = listaPosiciones.filter(espacios => espacios != posicion);
                    listaPosiciones = listaPosiciones.filter(espacios => espacios != posicion);
                }

            }

            if (listaPosiciones.length === 0 && gane === 0) {
                textoGanador.innerHTML = "It´s a Draw";
            }

        } else {
            textoAdvertencia.innerHTML= "Cell is full, choose another one";
            setTimeout(function () {
                textoAdvertencia.innerHTML= "";
            }, 2000);
        }

    })
}


function encontrarGane(listaX, listaO) {
    let ganador = "";
    if ((listaX.includes(0) && listaX.includes(1) && listaX.includes(2)) || (listaX.includes(3) && listaX.includes(4) && listaX.includes(5)) || (listaX.includes(6) && listaX.includes(7) && listaX.includes(8)) || (listaX.includes(0) && listaX.includes(3) && listaX.includes(6)) || (listaX.includes(1) && listaX.includes(4) && listaX.includes(7)) || (listaX.includes(2) && listaX.includes(5) && listaX.includes(8)) || (listaX.includes(0) && listaX.includes(4) && listaX.includes(8)) || (listaX.includes(2) && listaX.includes(4) && listaX.includes(6))) {
        ganador = "Awesome! You won!!";
        gane = "j1";
        document.getElementById("contenedorGato").style.pointerEvents = "none";
    } else if ((listaO.includes(0) && listaO.includes(1) && listaO.includes(2)) || (listaO.includes(3) && listaO.includes(4) && listaO.includes(5)) || (listaO.includes(6) && listaO.includes(7) && listaO.includes(8)) || (listaO.includes(0) && listaO.includes(3) && listaO.includes(6)) || (listaO.includes(1) && listaO.includes(4) && listaO.includes(7)) || (listaO.includes(2) && listaO.includes(5) && listaO.includes(8)) || (listaO.includes(0) && listaO.includes(4) && listaO.includes(8)) || (listaO.includes(2) && listaO.includes(4) && listaO.includes(6))) {
        ganador = "Oh no!! the computer won";
        gane = "j2";
        document.getElementById("contenedorGato").style.pointerEvents = "none";
    }

    if (gane === "j1") {
        contadorJugador++;
        ganeJugador.innerHTML = contadorJugador + " wins";
        localStorage.setItem("contadorJugador", contadorJugador);
    } else if (gane === "j2") {
        contadorMaquina++;
        ganeMaquina.innerHTML = contadorMaquina + " wins";
        localStorage.setItem("contadorMaquina", contadorMaquina);
    }
    return ganador;
}