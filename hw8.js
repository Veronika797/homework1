// Игра «Камень, ножницы, бумага»
function getCompChoise() {
	const options = ["камень", "ножницы", "бумага"];
	const randomIndex = Math.floor(Math.random() * options.length);
	return options[randomIndex];
}

function determineWinner(userChoise, compChoise) {
	if (userChoise === compChoise) {
		alert("Ничья");
		return 0;
	} else if (
		(userChoise === "камень" && compChoise === "ножницы") ||
		(userChoise === "ножницы" && compChoise === "бумага") ||
		(userChoise === "бумага" && compChoise === "камень") 
	) {
		alert("Вы выиграли");
		return 1;
	} else {
		alert("Вы проиграли");
		return -1;
	}
	}

	function playGame() {
		const totalRound = 5;
		let userScore = 0;
		let compScore = 0;
		for (let round = 1; round <= totalRound; round++) {
			const userChoise = prompt(`Раунд: ${round}. Вы выбираете: 'камень', 'ножницы' или 'бумага'`);
			const compChoise = getCompChoise();
			alert(`Ваш выбор: ${userChoise}`);
			alert(`Выбор компьютера: ${compChoise}`);
			const result = determineWinner(userChoise, compChoise);
			if (result === 1) {
				userScore++;
			} else if (result === -1) {
				compScore++;
			}
		}
		alert(`Игра окончена. Ваш счет: ${userScore}. Счет компьютера: ${compScore}`);
	}
