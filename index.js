
//IMAGE 1
var random = Math.floor(Math.random() * 6)+1;
var randomDiceImage = "dice"+ random +".png";
var randomImageSource = "./images/"+randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


//IMAGE2
var random2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "./images/dice"+random2+".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(random>random2){
    document.querySelector("h1").innerHTML=("Player 1 Wins!!");
}
else if(random<random2){
    document.querySelector("h1").innerHTML=("Player 2 Wins!!");
}
else {
    document.querySelector("h1").innerHTML=("The Game is tied!");
}
