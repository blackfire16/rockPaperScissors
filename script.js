function game() {
  const btns = document.querySelector("button");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const playerSelection = this.textContent;

      const computerOptions = ["Piedra", "Papel", "Tijeras"];
      const computerSelection = computerOptions[Math.floor(Math.random() * 3)];

      playRound(playerSelection, computerSelection);
    });
  });

  function playRound(playerSelection, computerSelection) {
    const ronda = `${playerSelection} vs ${computerSelection}`;

    if (playerSelection === "piedra" && computerSelection === "papel") {
      return alert(`${ronda} =  la Gano la computadora`);
    } else if (playerSelection === "papel" && computerSelection === "piedra") {
      return alert(`${ronda} = Ganaste`);
    } else if (playerSelection === "tijera" && computerSelection === "papel") {
      return `${ronda} = Ganaste`;
    } else if (playerSelection === "papel" && computerSelection === "tijera") {
      return alert(`${ronda} = Gano la computadora`);
    } else if (playerSelection === "tijera" && computerSelection === "piedra") {
      return alert(`${ronda}= la Gano la computadora`);
    } else if (playerSelection === "piedra" && computerSelection === "tijera") {
      return alert(`${ronda}=Ganaste`);
    } else {
      return alert(`${ronda} =Empate`);
    }
  }
}

game();
