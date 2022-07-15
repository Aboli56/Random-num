let user_guess = document.getElementById("user_guess");
let msg1 = document.getElementById("msg1");
let msg2 = document.getElementById("msg2");
let msg3 = document.getElementById("msg3");
let answer = Math.floor(Math.random()*100)+1;
let no_of_guesses = 0;
let guesses_are = [];
function play(){
    
    if(user_guess.value < 0 || user_guess.value > 100){
        alert("Please enter a Number between 1 and 100.");
    }
    else{
        guesses_are.push(user_guess.value);
        no_of_guesses++;
        if(user_guess.value < answer){
            msg1.textContent = "Your guess is too low😔";
            msg2.textContent = "No. of guesses : " +no_of_guesses;
            msg3.textContent = "Guessed nos. are : "+guesses_are;
        }else if(user_guess.value > answer){
            msg1.textContent = "Your guess is too High😔";
            msg2.textContent = "No. of guesses : " +no_of_guesses;
            msg3.textContent = "Guessed nos. are : "+guesses_are;
        }else if(user_guess.value == answer){
            msg1.textContent = "🎊Yehhh..., you win!!!!🎊";
            msg2.textContent = "The Number was : " +answer;
            msg3.textContent = "You guessed it in  "+no_of_guesses +" guesses.";
        }
    }
}
