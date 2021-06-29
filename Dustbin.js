class Dustbin {

    constructor(x,y) {
        var options={
            isStatic:true,
        }
        this.t = 20;
        this.l = 200;
        this.h = 220;
        this.leftBody = Bodies.rectangle(x-this.l/2,y-this.h/2,this.t,this.h,options);
        this.rightBody = Bodies.rectangle(x+this.l/2,y-this.h/2,this.t,this.h,options);
        this.bottomBody = Bodies.rectangle(x,y,this.l,this.t,options);

        World.add(world,this.leftBody);
        World.add(world,this.rightBody);
        World.add(world,this.bottomBody);
    }

    display () {
        var leftPos = this.leftBody.position;
        var rightPos = this.rightBody.position;
        var bottomPos = this.bottomBody.position;

        rectMode(CENTER);
        fill("green");
        rect(leftPos.x,leftPos.y,this.t,this.h);
        rect(rightPos.x,rightPos.y,this.t,this.h);
        rect(bottomPos.x,bottomPos.y,this.l,this.t);
    }

}