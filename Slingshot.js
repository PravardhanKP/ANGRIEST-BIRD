class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1Image = loadImage("sprites/sling1.png");
        this.sling2Image = loadImage("sprites/sling2.png");
        this.sling3Image = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1Image,200,20);
        image(this.sling2Image,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            if(pointA.x<210){
            line(pointA.x-15, pointA.y, pointB.x-7, pointB.y);
            line(pointA.x-15, pointA.y, pointB.x+17, pointB.y);
            image(this.sling3Image,pointA.x-30,pointA.y-10,15,30);
            }
            else{
                line(pointA.x+30, pointA.y, pointB.x-7, pointB.y);
                line(pointA.x+30, pointA.y, pointB.x+17, pointB.y);
                image(this.sling3Image,pointA.x+30,pointA.y-10,15,30);   
            }
        }
    }
    
}