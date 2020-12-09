class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
fly(){
    this.slingshot.bodyA=null;
}
    display(){
        console.log("this.slingshot.bodyA"+ this.slingshot.bodyA);
        if(this.slingshot.bodyA){
        console.log("insideIf");    
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    
}