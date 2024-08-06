const casillas = document.getElementsByClassName("casilla");
const textoAdvertencia = document.getElementById("textoAdvertencia");
const textoGanador = document.getElementById("textoGanador");
let listaPosiciones = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let listaDisponibles = [];


for (let index = 0; index < casillas.length; index++) {
    casillas[index].addEventListener("click", function () {
        if (casillas[index].textContent == "") {
            casillas[index].innerHTML = "X";
            listaDisponibles = listaPosiciones.filter(espacios => espacios != index)
            console.log(listaDisponibles);
            listaPosiciones = listaPosiciones.filter(espacios => espacios != index)
            if (listaDisponibles.length>1) {
                let valorRam = Math.floor((Math.random() * listaDisponibles.length));
                console.log(valorRam);
                let posicion=listaDisponibles[valorRam];
                console.log(posicion);
                casillas[posicion].innerHTML = "O";
                listaDisponibles = listaPosiciones.filter(espacios => espacios != posicion)
                console.log(listaDisponibles);
                listaPosiciones = listaPosiciones.filter(espacios => espacios != posicion);   
            }
            
        } else {
            textoAdvertencia.innerHTML = "Casilla llena, elige otra casilla";
        }

    })

}
