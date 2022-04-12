"use strict"

function Game() {
	// Очки победы 
	let player1 = 0;
	let player2 = 0;
	
	// Цыкл сравнения  
	while(player1 <= 5 || player2 <= 5){
		// Выбор игрока
		let player = prompt("Rock, Paper, Scissors ", );
		
		// Выбор бота
		let bot = "";
		let x = Math.random().toFixed(1);
		x = x * 10;
		if(x <= 3){
			bot = "Rock";
		}
		else if (x <= 6){
			bot = "Paper";
		}
		else if(x <= 9){
			bot = "Scissors";
		}
		// Ввыводим выбор бота
		alert(bot);

		// Сравнить резудьтаты 
		if(player == "Rock"){
		switch(bot){
			case "Rock":
			break;
			case "Paper":
			player2 += 1;
			break;
			case "Scissors":
			player1 += 1;
			break;
			}
		}
		
		else if(player == "Paper"){
			switch(bot){
				case "Rock":
				player1 += 1;
				break;
				case "Paper":
				break;
				case "Scissors":
				player2 += 1;
				break;
			}
		}
		else if (player == "Scissors"){
			switch(bot){
				case "Rock":
				player2 += 1;
				break;
				case "Paper":
				player1 += 1;
				break;
				case "Scissors":
				break;
			}
		}
		alert("You: " + player1 + " " + "Bot: " + player2);
		if(player1 == 5){
			alert("You Win");
		}	
		else if(player2 == 5){
			alert("You Lose");
		}
	}
	
}

Game();








/* 

let player1 = 0;
let player2 = 0;
while(player1 <= 5 || player2 <= 5){
let player = prompt("Rock, Paper, Scissors ", );
let bot = "";
let x = Math.random().toFixed(1);
x = x * 10;
if(x <= 3){
	bot = "Rock";
}
else if (x <= 6){
	bot = "Paper";
}
else if(x <= 9){
	bot = "Scissors";
}
alert(bot);

if(player == "Rock"){
	switch(bot){
		case "Rock":
		break;
		case "Paper":
		player2 += 1;
		break;
		case "Scissors":
		player1 += 1;
		break;
}
	}
	
else if(player == "Paper"){
	switch(bot){
		case "Rock":
		player1 += 1;
		break;
		case "Paper":
		break;
		case "Scissors":
		player2 += 1;
		break;

		}

	}
else if (player == "Scissors"){
	switch(bot){
		case "Rock":
		player2 += 1;
		break;
		case "Paper":
		player1 += 1;
		break;
		case "Scissors":
		break;
			

		}

	}


alert(player1);
alert(player2);
}
*/ 