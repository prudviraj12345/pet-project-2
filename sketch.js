//Create variables here
var dog;
var dogimg,doghappy;
var database;
var foods,foodstock;
function preload()
{
  //load images here
  dogimg = loadImage("dogimg.png")
  doghappy = loadImage("dogimg1.png")
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database();

  dog = createSprite(400,400,20,20);

 var foodstock = database.ref("food");
 foodstock.on("value",readstock)

  
  
}


function draw() {  

  //add styles here
  background(255);


 fedTime = database.ref('feedTime');
 fedTime.on("value",function(data){
   lastFed = data.val();
 });











  



 dog.addImage(dogimg)

 dog.scale = 0.2;

 
  //if(keyWentDown(UP_ARROW)){

   // writeStock(foods);
   // dog.addImage(doghappy);
  
  
  
  
 //}


  drawSprites();

}

function readstock(data){

  foods = data.val();
}

function writeStock(x){
 if(x<=0){
   x = 0
 }
 else{
 x = x-1

 }
 database.ref('/').update({
   food:x
 }

 )



}