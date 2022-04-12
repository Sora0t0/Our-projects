"use strict"
/*
let word = [];
let gav = prompt("Введите слово", );
let sav = gav.split();*/

function gallows(){
    var sav = prompt("Введите слово", );
    sav = sav.split('');
    
    for(let i = 0; i < sav.length; i++){
        sav[i] = sav[i].toUpperCase();
    }

    var amsver = [];

    for(let i = 0; i < sav.length; i++){
        amsver[i] = "_";
        
    }
    
    let lafe = 0;
    while(JSON.stringify(sav) != JSON.stringify(amsver)){

        let letter;
        
        let heals = sav.length;
        let damage = 0;
        do {
            do {
                letter = prompt("Ведите одну букву: ", );
            } while (letter.length > 1); 
        
        } while(letter.codePointAt(0) <= 65 || letter.codePointAt(0) >= 122);
      
        letter = letter.toUpperCase();
        alert(letter);
        
        
        
        for(let i = 0; i < sav.length; i++){
            if(sav[i] == letter){
                amsver[i] = letter;
                alert(amsver);
                   
            }
            else{   
                damage += 1;
            }

        }
        if(damage == sav.length){
            lafe += 1;
        }
        if(lafe == 5){
            alert("YOU DEAD");
            break;
            
        }
        
        

    }
    if (JSON.stringify(sav) == JSON.stringify(amsver)) {
        alert("YOU WIN!!!");
    }

    
}
gallows(); 


function dead(){

}

/*

for(let i = 0; i < sav.length; i++){
    amsver[i] = "_";
    
}

alert(amsver.join(" ") + amsver.length);

let str = prompt("Ввудите букву", );

str = str.toUpperCase();

function gallows (){
    for(let i = 0; i < sav.length; i++){
        if(sav[i] == str){
            amsver[i] = str;
            return true;
        }
        
    }
}
gallows()
alert(amsver);

function gallows(){
    let str = prompt("Ввудите букву", );
    str = str.toUpperCase();
    
    


*//*
let answer_latter;
do {
    do {
        answer_latter = prompt("Ведите что-то одно: ", );
     } while (answer_latter.length > 1); 
    
} while(answer_latter.codePointAt(0) <= 65 || answer_latter.codePointAt(0) >= 122);
  

alert(answer_latter);
*/