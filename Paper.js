class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body=Bodies.circle(x,y,20, options);
    
        this.image = loadImage("paper.png");

        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        this.image.scale=0.9
        image(this.image, 0, 0, 90, 90);
        pop();
      }

}