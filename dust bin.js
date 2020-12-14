class Dustbin{

 constructor (x,y,width,height){

var options={
isStatic:true
}
this.width=width;
this.height=height;
this.image=loadImage("dustbingreen.png")
World.add(world,this.body);
}
display(){
var posdust=this.body.position;
 rectMode(CENTER);
 fill ("cyan");
 rect(posdust.x,posdust.y,this.width,this.height);
    } 
}