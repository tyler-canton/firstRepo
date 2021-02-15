roll = () => {
    return Math.ceil(Math.random() * 6)
}
game = () => {
    player1dice = roll();
    player2dice = roll();

    console.log('Player 1 rolls a ', player1dice);
    console.log('Player 2 rolls a ', player2dice);

    if(player1dice > player2dice) {
        return'player 1 wins!!!';
    }
  else if (player1dice < player2dice) {
      return 'player 2 wins!!!';
  }
  else {
      return 'tie, you both win'
  }
} 
play = () => {
    result = game();
    while(confirm(`${result} Play Again?`)) {
        result = game();
    }
}
