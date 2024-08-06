const casillas = document.getElementsByClassName("casilla");
const textoAdvertencia = document.getElementById("textoAdvertencia");


for (let index = 0; index < casillas.length; index++) {
    casillas[index].addEventListener("click", function () {
        if (casillas[index].textContent == "") {
            casillas[index].innerHTML = "X";
    
            let num = Math.floor((Math.random() * 9) + 0);
            console.log(num);
            if (casillas[num].textContent === "") {
                casillas[num].innerHTML = "O";
        
            } else {
                for (let index = 0; index < 20; index++) {
                    num = Math.floor((Math.random() * 9) + 0);
                    console.log(num);
                    if(casillas[num].textContent===""){
                        casillas[num].innerHTML="O";
                        break;
                    } 
                } 
            }
        }
    })
}

/* if (contador <= 9) {
                    let index = 0;
                    while (index === 0) {
                        num = Math.floor((Math.random() * 9) + 0);
                        console.log(num);
                        if (casillas[num].textContent === "") {
                            casillas[num].innerHTML = "O";
                            contador++;
                            index++;
                            break;
                        }
                    }
                }*/ //El problema es con la ultima casilla, se hace un ciclo infinito porque nunca haya un espacio vacio para la O