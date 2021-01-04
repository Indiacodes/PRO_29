class Constraintsss{
    constructor(bodyA, bodyB, offsetX, offsetY){
        var constraintOptions = {
                stiffness : 0.5,
                bodyA : bodyA,
                bodyB : bodyB,
                pointB : {x : offsetX, y : offsetY},
                legnth : 10
            }

        this.cons = Matter.Constraint.create(constraintOptions);
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        World.add(world, this.cons);
        
    }

    showConstraints(){
        strokeWeight(5);

        line(this.cons.bodyA.position.x, this.cons.bodyA.position.y, this.cons.bodyB.position.x + this.offsetX, this.cons.bodyB.position.y + this.offsetY);
    }
}