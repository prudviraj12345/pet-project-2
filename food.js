class food{

constructor(){

var foodStock
var lastFed
var foodobject
this.image = loadImage("milk.png");



}


display(){


 var x = 80,y = 100;

 imageMode(CENTER);
 image(this.imagem,720,220,70,70);


  if(this.foodStock!=0){

      for(var i = 0;i<this.foodStock;i++){

        if(i%10==0){
         
             x = 80;
             y = y+50;
       

        }

          image(this.image,x,y,50,50);
          x = x+30
         
      }


  }











 var  feedDog = createButton("feed the dog");
 feed.position(700,95);
 feed.mousePressed(feedDog)


 var addFood = createButton("add Food");
 addFood.position(800,95);
 addFood.mousePressed(addFood);












 if(lastFed>=12){
     text("lastFed:"+lastFed%12 +"PM ", 350,30);
 }
   else if(lastFed==0){
       text("last Feed:12 AM",350,30);
   }
     else{
         text("last Feed:"+lastFed+"AM",350,30);
     }

    




image(this.image, 0, 0, this.width, this.height);
}

}

function feedDog(){

 dog.addImage(happyDog);


 foodobject.updateFoodStock(foodobject.getFoodStock()-1);
 database.ref('/').update({

    food:foodobject.getFoodStock(),
    FeedTime:houe()

 })

 
 function addFood(){
     
  foods++
  database.ref('/').update({

   foods:foodS

  })
 


 }





}


