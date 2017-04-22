/*
 * * Write a function that generates every sequence of throws a single
 * * player could throw over a three-round game of rock-paper-scissors.
 * *
 * * Your output should look something like:
 * *   [["rock", "rock", "rock"],
 * *    ["rock", "rock", "paper"],
 * *    ["rock", "rock", "scissor"],
 * *    ["rock", "paper", "rock"],
 *              ...etc...
 *                   */

const rockPaperScissors = () => {
	const choices = ['rock', 'paper', 'scissors'];
	let output = [];
	
	choices.forEach(choice => {
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				output.push([choice, choices[i], choices[j]]);
			}
		}
	});
	return output;
};
