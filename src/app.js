import 'bootstrap'
import './sass/main.scss'

// These ES^ arrow functions are not declared
// Webpack Dev will wrapper your app to make it private
// Use 'window' to make them global 
// You need to declare your variables


window.roll = () => {
	return Math.ceil(Math.random() * 6)
}
window.game = () => {
	let player1dice = roll();
	let player2dice = roll();

	console.log('Player 1 rolls a ', player1dice);
	console.log('Player 2 rolls a ', player2dice);

	if (player1dice > player2dice) {
		return 'player 1 wins!!!';
	}
	else if (player1dice < player2dice) {
		return 'player 2 wins!!!';
	}
	else {
		return 'tie, you both win'
	}
}
window.play = () => {
	let result = game();
	while (confirm(`${result} Play Again?`)) {
		result = game();
	}
}
window.namer = 'tyler';