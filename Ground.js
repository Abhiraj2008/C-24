class Ground {
    constructor (x,y,w,h) {
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }

    display () {
        var Pos = this.body.position;
        push();
        translate(Pos.x,Pos.y);
        rectMode(CENTER);
        fill("blue");
        rect(0,0,this.w,this.h);
        pop();
    }

}