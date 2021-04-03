const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
//const Body=Matter.Body;
const Constraint=Matter.Constraint;

var engine,world;
var ground,bat;

function setup(){
 var canvas =  createCanvas (1200,400);

    engine=Engine.create ();
    world= engine.world;

ground=new Ground(600,380,1200,10);
bat = new Bat (230,375,10,80);
}
function draw(){
    background("black");
Engine.update(engine);

ground.display();
bat.display();

}