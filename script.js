let player;
let computer;

computer = Math.random();

function computerPlay(computer){
    if(computer<0.33){
        computer = "piedra";
        return computer;
    }else if(computer<0.66){
        computer= "papel";
        return computer;
    }else{
        computer = "tijera";
        return  computer;
      }    
}
player = prompt("Ingrese piedra papel o tijera?");
function playGame(playerSelection, computerSelection){
    if (player ==="piedra" && computer ==="papel"){
        return "Gano la computadora";
    }else if(player === "papel" && computer === "piedra"){
        return "Ganaste";
    }else if(player === "tijera" && computer === "papel"){
        return "Ganaste";
    }else if(player === "papel" && computer === "tijera"){
        return "Gano la computadora";
    }else if(player === "tijera" && computer === "piedra"){
        return "Gano la computadora";
     }else if(player === "piedra" && computer === "tijera"){
        return "Ganaste";
     }else{
         return "El resultado fue un empate";
     }  
}

playGame();
