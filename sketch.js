const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var polygon, polygonSprite, polygonImage;
var polygonBoxStage, polygonBoxSprite;
var Constraintss;
var box1, box2, box3, box4, box5, box6;

function preload()
{
	polygonImage = loadImage("polygon.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
    world = engine.world;
    
    polygon = Bodies.rectangle(100, 550, 12, 40);
    polygonStage = Bodies.rectangle(100, 600, 10, 40);
    box1 = new Box(400, 400, 30, 40);
    //Constraintss = new Constraintsss({x : polygon.position.x, y : polygon.position.y}, {x : 100, y : 550});
    
    World.add(world, polygon);
    World.add(world, polygonStage);

    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 1200,
        height: 700,
        wireframes: false
      }
      });
    
    
      Render.run(render);
}

function draw() {
  rectMode(CENTER);
  background(170);

  

  polygonSprite = createSprite(polygon.position.x, polygon.position.y, 38,38);
  polygonSprite.addImage(polygonImage);
  polygonSprite.scale = 0.15;

  //Constraintss.showConstraints();

  //polygonStageSprite = createSprite(, polygonStage.position.y, 50, 10);

  drawSprites();
 
}