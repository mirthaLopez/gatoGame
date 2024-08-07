const casillas = document.getElementsByClassName("casilla");
const textoAdvertencia = document.getElementById("textoAdvertencia");
const textoGanador = document.getElementById("textoGanador");
let listaPosiciones = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let listaDisponibles = [];
let listaX = [];
let listaO = [];

/*var matriz = [];
var fila1 = [0, 0, 0];
var fila2 = [0, 0, 0];
var fila3 = [0, 0, 0];*/


/*matriz.push(fila1, fila2, fila3)*/

for (let index = 0; index < casillas.length; index++) {
    casillas[index].addEventListener("click", function () {
        if (casillas[index].textContent == "") {
            casillas[index].innerHTML = "X";
            casillas[index].style.backgroundColor="rgb(0, 208, 255)"
            listaX.push(index);
            let jugador1 = "X";
            textoGanador.innerHTML=encontrarGane(listaX,listaO);

            listaDisponibles = listaPosiciones.filter(espacios => espacios != index);
            listaPosiciones = listaPosiciones.filter(espacios => espacios != index);
            /*if (index <= 2) {
                matriz[0][index] = jugador1;
            } else if (index <= 5) {
                if (index === 3) {
                    index = 0;
                    fila2[index] = jugador1;
                }
                if (index === 4) {
                    index = 1;
                    fila2[index] = jugador1;
                }
                if (index === 5) {
                    index = 2;
                    fila2[index] = jugador1;
                }
            } else if (index <= 8) {
                if (index === 6) {
                    index = 0;
                    fila3[index] = jugador1;
                }
                if (index === 7) {
                    index = 1;
                    fila3[index] = jugador1;
                }
                if (index === 8) {
                    index = 2;
                    fila3[index] = jugador1;
                }
            }
            encontrarGanador(matriz);*/
            if (listaDisponibles.length > 1) {
                let valorRam = Math.floor((Math.random() * listaDisponibles.length));
                let posicion = listaDisponibles[valorRam];
                casillas[posicion].innerHTML = "O";
                listaO.push(posicion);
                textoGanador.innerHTML=encontrarGane(listaX,listaO);
                
                let jugador2 = "O"
                listaDisponibles = listaPosiciones.filter(espacios => espacios != posicion);
                listaPosiciones = listaPosiciones.filter(espacios => espacios != posicion);

                /*if (posicion <= 2) {
                    matriz[0][posicion] = jugador2;
                } else if (posicion <= 5) {
                    if (posicion === 3) {
                        posicion = 0;
                        fila2[posicion] = jugador2;
                    }
                    if (posicion === 4) {
                        posicion = 1;
                        fila2[posicion] = jugador2;
                    }
                    if (posicion === 5) {
                        posicion = 2;
                        fila2[posicion] = jugador2;
                    }
                } else if (posicion <= 8) {
                    if (posicion === 6) {
                        posicion = 0;
                        fila3[posicion] = jugador2;
                    }
                    if (posicion === 7) {
                        posicion = 1;
                        fila3[posicion] = jugador2;
                    }
                    if (posicion === 8) {
                        posicion = 2;
                        fila3[posicion] = jugador2;
                    }
                }*/


            }
        } else {
            textoAdvertencia.innerHTML = "Casilla llena, elige otra casilla";
        }
    })
}

/*function encontrarGanador(matriz) {
    for (let i = 0; i< matriz.length; i++) {
       for (let e= 0; e < matriz.length; e++) {

        

        if (matriz[i][e]==="X" ) {
            console.log(matriz[i][e]);
        }else if (matriz[i][e]==="O") {

        }

       }
    } 
         
}*/

function encontrarGane(listaX, listaO) {
    let ganador="";
    if ((listaX.includes(0) && listaX.includes(1) && listaX.includes(2)) || (listaX.includes(3) && listaX.includes(4) && listaX.includes(5)) || (listaX.includes(6) && listaX.includes(7) && listaX.includes(8)) || (listaX.includes(0) && listaX.includes(3) && listaX.includes(6)) || (listaX.includes(1) && listaX.includes(4) && listaX.includes(7)) || (listaX.includes(2) && listaX.includes(5) && listaX.includes(8)) || (listaX.includes(0) && listaX.includes(4) && listaX.includes(8)) || (listaX.includes(2) && listaX.includes(4) && listaX.includes(6))) {
        ganador = "Felicidades venciste a la maquina!!";
        console.log(ganador);
    } else if ((listaO.includes(0) && listaO.includes(1) && listaO.includes(2)) || (listaO.includes(3) && listaO.includes(4) && listaO.includes(5)) || (listaO.includes(6) && listaO.includes(7) && listaO.includes(8)) || (listaO.includes(0) && listaO.includes(3) && listaO.includes(6)) || (listaO.includes(1) && listaO.includes(4) && listaO.includes(7)) || (listaO.includes(2) && listaO.includes(5) && listaO.includes(8)) || (listaO.includes(0) && listaO.includes(4) && listaO.includes(8)) || (listaO.includes(2) && listaO.includes(4) && listaO.includes(6))) {
        ganador="Oh no!! La maquina ha vencido";
    }
    return ganador;
}