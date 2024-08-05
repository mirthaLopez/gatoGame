const casillas=document.getElementsByClassName("casilla");
const textoAdvertencia=document.getElementById("textoAdvertencia")
var turno=1;



for (let index = 0; index < casillas.length; index++) {
        casillas[index].addEventListener("click", function () {
            if (casillas[index].textContent=="") {
                casillas[index].innerHTML="X"; 
                let num = Math.floor((Math.random() * 8) + 1);
                console.log(num);

                if (casillas[num].textContent==="") {
                    casillas[num].innerHTML="O";
                }else if(casillas[num].textContent==="X"||casillas[num].textContent==="O" ) { 
                    for (let index = 0; casillas[index].innerHTML===""; index++) {
                        num = Math.floor((Math.random() * 8) + 1);
                        if(casillas[num].textContent===""){
                            casillas[num].innerHTML="O";
                        }
                         
                    }
                }

            }else{
                textoAdvertencia.innerHTML="Casilla llena, elige otra casilla"
            } 
           
        })  
}


/*function turnos() {
    if (turno===1) {
        turno=2;
    }else if (turno===2) {
        turno=1;
    }
}*/







