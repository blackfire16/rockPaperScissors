let jugador;
let jugadorComputadora;
jugadorComputadora = Math.random();

function Computadora(jugadorComputadora){
    if(jugadorComputadora<0.33){
        jugadorComputadora = "piedra";
        return jugadorComputadora;
    }else if(jugadorComputadora<0.66){
        jugadorComputadora = "papel";
        return jugadorComputadora;
    }else{
        jugadorComputadora = "tijera";
        return jugadorComputadora;
      }
     
}

