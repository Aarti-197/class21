var fixedRect, movingRect;
var obj1, obj2, obj3, obj4;
var car, wall;

function setup() {
  createCanvas(1200,800);

  //fixedRect = createSprite(600, 400, 50, 80);
  //fixedRect.shapeColor = "green";
  //fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(100,100,50,50);
  obj1.shapeColor = "white";

  obj2 = createSprite(300,100,50,50);
  obj2.shapeColor = "white";

  obj3 = createSprite(500,100,50,50);
  obj3.shapeColor = "white";

  obj4 = createSprite(700,100,50,50);
  obj4.shapeColor = "white";
}

function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //isTouching();

  if( isTouching(obj1,movingRect) ){
    obj1.shapeColor = "red";
  }
  else{
    obj1.shapeColor = "white";
  }

  if( isTouching(obj2,movingRect) ){
    obj2.shapeColor = "blue";
  }
  else{
    obj2.shapeColor = "white";
  }

  if( isTouching(obj3,movingRect) ){
    obj3.shapeColor = "yellow";
  }
  else{
    obj3.shapeColor = "white";
  }

  if( isTouching(obj4,movingRect) ){
    obj4.shapeColor = "pink";
  }
  else{
    obj4.shapeColor = "white";
  }

  drawSprites();
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    
      return true;

  }
  else {
    
    return false;

  }
}