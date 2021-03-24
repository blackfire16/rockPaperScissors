let playerSelection;
let computerSelection;


function computerPlay(){
    let computer = Math.random();
    if(computer<0.33){

       return computer = "piedra"
  
    }else if(computer<0.66){

       return computer = "papel"
        
    }else{

       return computer = "tijera"
        
      }    
    }

    computerSelection = computerPlay();


function playRound(playerSelection, computerSelection){
    if (playerSelection === "piedra" && computerSelection ==="papel"){
        return "Gano la computadora";
    }else if(playerSelection === "papel" && computerSelection === "piedra"){
        return "Ganaste";
    }else if(playerSelection === "tijera" && computerSelection === "papel"){
        return "Ganaste";
    }else if(playerSelection === "papel" && computerSelection === "tijera"){
        return "Gano la computadora";
    }else if(playerSelection === "tijera" && computerSelection === "piedra"){
        return "Gano la computadora";
     }else if(playerSelection === "piedra" && computerSelection === "tijera"){
        return "Ganaste";
     }
       
}

function game(){
    const playerSelection = prompt("Ingrese piedra papel o tijera: ");
    const computerSelection = computerPlay();
    document.write(playRound(playerSelection, computerSelection));
    // Evaluar si el que gana mas de 3 veces el juego con la funcion playRound
}

game();