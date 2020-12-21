class Plinko{
    constructor(x,y,r){
       var options = {
           isStatic :  true,
       }
       this.body=Bodies.circle(x,y,r,options);
       World.add(world,this.body);
       this.r=r;
    }

    display(){
   push();
    stroke("red");
    strokeWeight(2);
    fill("white");
    var pos = this.body.position;
    ellipse(pos.x,pos.y,this.r*2,this.r*2);
    pop();

    }
}