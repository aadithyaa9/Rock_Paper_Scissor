var randomnumber1 = Math.random();
randomnumber1*= 3 ;
randomnumber1 += 1;
randomnumber1 = Math.floor(randomnumber1);
document.querySelector(".first").setAttribute("src" , "./assets/" + randomnumber1 + ".png");

var randomnumber2 = Math.random();
randomnumber2*= 3 ;
randomnumber2 += 1;
randomnumber2 = Math.floor(randomnumber2);
document.querySelector(".second").setAttribute("src" , "./assets/" + randomnumber2 + ".png");


if (randomnumber1 === randomnumber2){
    document.querySelector("h1").innerHTML = "Its a draw!!"
}
else if ((randomnumber1 === 1 && randomnumber2 === 2) || (randomnumber1 === 2 && randomnumber2 === 1) || (randomnumber1 ===3 && randomnumber2 === 2)){
    document.querySelector("h1").innerHTML = "Player 1 wins ️‍🔥";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 wins 🔥";
}