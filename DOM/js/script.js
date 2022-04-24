let win = ["К","О","Н","Ч","Е","Н","Ы","Й",];
let amsver = [];
let lafe = 0;

let baks = [];
let h = 0;
let b = 0;

for(let i = 0; i < win.length; i++){
    amsver[i] = "_";
}

document.querySelector('.show_amsver').innerHTML = amsver.join(" ");

let keyboard = document.documentElement;

keyboard.onkeypress = function calcLetter (event) {
	letter = event.key;
	while(letter.codePointAt(0) > 128){
		baks[h] = letter.toUpperCase();
		calcAmswer ();
		h++;
		break;
	}
}

function checkWin (){
	if(JSON.stringify(win) == JSON.stringify(amsver)){
		alert("YOU WIN");
		showMessage ();

	}
}

function checkDEAD (){
	if(lafe == 5){
		lafe = 0;
        alert("YOU DEAD");
        showMessage ();
    }
}

function calcAmswer (){
	let damage = 0;
	for(let i=0; i < win.length; i++){
		if(win[i] == baks[h]){
			amsver[i] = baks[h];
			document.querySelector('.show_amsver').innerHTML = amsver.join(" ");
			setTimeout(checkWin, 1000);
			
		} else{   
                damage++;
          }
    }
	
	if(damage == win.length){
        lafe++;
    }

    switch(lafe){
        case 1: 
        let head = document.querySelector('.human_head').hidden = false;;
        break;
        case 2: 
        let body = document.querySelector('.human_body').hidden = false;;
        break;
        case 3: 
        let hand_left = document.querySelector('.hand_left').hidden = false;;
        break;
        case 4: 
        let hand_right = document.querySelector('.hand_right').hidden = false;;
        break;
        case 5: 
        let leg = document.querySelector('.human_leg').hidden = false;;
        break;
    } 
    setTimeout(checkDEAD, 1000);

    
}

function showMessage (){
	let Game = confirm("Хотите сыграть ещё раз?");
	createWin ();
	

	if(Game){
		setTimeout(games, 1100);
	}
}

function createWin (){
	win.splice(0,win.length);
	let mystery = [
		"ПРОГРАММИСТ",
		"КОНДИТЕР",
		"КАМБАЛА",
		"БАЛЬЗАМ",
		"ПОДЛОКОТНИК",
		"АМФИТЕАТР",
		"МАФИОЗИ",
		"ФУНДАМЕНТ",
		"ПРОЦЕССОР",
	]
	let x = Math.random().toFixed(1) * 10;
	let say = mystery[x];
	setTimeout(() => win = say.split(""), 1000);
	
}

function games (){

		lafe = 0;
		baks.splice(0,baks.length);
		
		for(let i = 0; i < win.length; i++){
    		amsver[i] = "_";
		}
		
		document.querySelector('.show_amsver').innerHTML = amsver.join(" ");
		
		let head = document.querySelector('.human_head').hidden = true;;
		let body = document.querySelector('.human_body').hidden = true;;
		let hand_left = document.querySelector('.hand_left').hidden = true;;
		let hand_right = document.querySelector('.hand_right').hidden = true;;
		let leg = document.querySelector('.human_leg').hidden = true;;
	}





