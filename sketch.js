var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombieGroup;

var score = 0;
var life = 3;
var bullets = 70;

var heart1, heart2, heart3

var gameState = "fight"

var lose, winning, explosionSound;


function preload(){
  
  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  
  

//creating the player sprite



   //creating sprites to depict lives remaining
   

    

    

    //creating groups for zombies and bullets
    


}

function draw() {
  background(0); 




  //go to gameState "lost" when 0 lives are remaining
  
    
  


  //go to gameState "won" if score is 100
  
  

  //moving the player up and down and making the game mobile compatible using touches




//release bullets and change the image of shooter to shooting position when space is pressed


//player goes back to original standing image once we stop pressing the space bar

//go to gameState "bullet" when player runs out of bullets


//destroy the zombie when bullet touches it and increase score


//reduce life and destroy zombie when player touches it


//calling the function to spawn zombies





drawSprites();

//displaying the score and remaining lives and bullets


//destroy zombie and player and display a message in gameState "lost"


//destroy zombie and player and display a message in gameState "won"


//destroy zombie, player and bullets and display a message in gameState "bullet"


}


//creating function to spawn zombies
function enemy(){
  

}
