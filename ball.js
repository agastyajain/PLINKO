class Ball{
    constructor(x,y,r){
       var options = {
           isStatic :  false,
           restitution :1.2,
           friction : 1,
           density : 1
       }
       this.body=Bodies.circle(x,y,r,options);
       World.add(world,this.body);
       this.r=r;
    }

    display(){
   push();
    stroke("red");
    strokeWeight(2);
    fill("yellow");
    var pos = this.body.position;
    ellipse(pos.x,pos.y,this.r*2,this.r*2);
    pop();

    }
}