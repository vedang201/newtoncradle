class Rope{
     constructor(bodyA,bodyB){
        var options = {


            bodyA : bodyA,
            bodyB: bodyB,
            stiffness : 0.04,
            length : 250



        }

        this.chain = Matter.Constraint.create(options);

        World.add(world,this.chain)

     }

     display(){

        stroke("black");
        strokeWeight(4)
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)


     }


}