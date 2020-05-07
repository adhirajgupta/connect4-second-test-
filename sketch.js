const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse
const MouseConstraint = Matter.MouseConstraint;

var canvas,canvas2;
var red1,red2,red3,red4,red5,red6,red7,red8,red9,red10,red11,red12,redconnect;
var yellow1,yellow2,yellow3,yellow4,yellow5,yellow6,yellow7,yellow8,yellow9,yellow10,yellow11,yellow12,yellowconnect;
var backgroundimg;
var engine,world;
var gameState;
var mouse_options,mouse_options2;
var mouse;

function preload(){
backgroundimg = loadImage("grid.png");
}
function setup(){
canvas = createCanvas(displayWidth,displayHeight);
canvas2 = createSprite(displayWidth/2,displayHeight/2.1,displayWidth,displayHeight);
canvas2.addImage("background",backgroundimg);
canvas2.scale = 1.2;

engine = Engine.create();
world = engine.world;
red1 = new Red(displayWidth/4.5,displayHeight/1.85);
red2 = new Red(displayWidth/4.5,displayHeight/1.45);
red3 = new Red(displayWidth/4.5,displayHeight/1.75);
red4 = new Red(displayWidth/4.5,displayHeight/1.55);
red5 = new Red(displayWidth/4.5,displayHeight/1.55);
red6 = new Red(displayWidth/4.5,displayHeight/1.85);
red7 = new Red(displayWidth/4.5,displayHeight/1.65);
red8 = new Red(displayWidth/4.5,displayHeight/1.895);
red9 = new Red(displayWidth/4.5,displayHeight/1.665);
red10 = new Red(displayWidth/4.5,displayHeight/1.455);
red11 = new Red(displayWidth/4.5,displayHeight/1.45);
red12 = new Red(displayWidth/4.5,displayHeight/1.35);

yellow1 = new Yellow(displayWidth/1.2,displayHeight/2.45);
yellow2 = new Yellow(displayWidth/1.2,displayHeight/2.54);
yellow3 = new Yellow(displayWidth/1.2,displayHeight/2.57);
yellow4 = new Yellow(displayWidth/1.2,displayHeight/2.58);
yellow5 = new Yellow(displayWidth/1.2,displayHeight/2.74);
yellow6 = new Yellow(displayWidth/1.2,displayHeight/2.59);
yellow7 = new Yellow(displayWidth/1.2,displayHeight/2.51);
yellow8 = new Yellow(displayWidth/1.2,displayHeight/2.65);
yellow9 = new Yellow(displayWidth/1.2,displayHeight/2.75);
yellow10 = new Yellow(displayWidth/1.2,displayHeight/2.85);
yellow11 = new Yellow(displayWidth/1.2,displayHeight/2.45);
yellow12 = new Yellow(displayWidth/1.2,displayHeight/2.35);

ground1 = new Ground(displayWidth/2,displayHeight/1.224,displayWidth,10);
ground2 = new Ground(0,displayHeight/2,20,displayHeight);
//ground3 = new Ground(90,displayHeight/2,10,displayHeight);
ground4 = new Ground(displayWidth/3.9,displayHeight/1.55,10,displayHeight);
ground5 = new Ground(displayWidth/3.1,displayHeight/1.55,15,displayHeight);
ground6 = new Ground(displayWidth/2.55,displayHeight/1.55,15,displayHeight);
ground7 = new Ground(displayWidth/2.16,displayHeight/1.55,15,displayHeight);
ground8 = new Ground(displayWidth/1.88,displayHeight/1.55,15,displayHeight);
ground9 = new Ground(displayWidth/1.66,displayHeight/1.55,15,displayHeight);
ground10 = new Ground(displayWidth/1.485,displayHeight/1.55,15,displayHeight);
ground11 = new Ground(displayWidth/1.35,displayHeight/1.55,15,displayHeight);
ground12 = new Ground(displayWidth/1.008,displayHeight/2,20,displayHeight);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\        START     \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
canvasmouse = Mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDensity();
mouse_options = {
mouse:canvasmouse
}
mouse_options2 = {
    mouse:canvasmouse
    }
redconnect = MouseConstraint.create(engine,mouse_options);
World.add(world,redconnect);
yellowconnect = MouseConstraint.create(engine,mouse_options2);
World.add(world,yellowconnect);
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\      END     \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
}
function draw(){
Engine.update(engine);
background("black");
drawSprites();
red1.display();
red2.display();
red3.display();
red4.display();
red5.display();
red6.display();
red7.display();
red8.display();
red9.display();
red10.display();
red11.display();
red12.display();

yellow1.display();
yellow2.display();
yellow3.display();
yellow4.display();
yellow5.display();
yellow6.display();
yellow7.display();
yellow8.display();
yellow9.display();
yellow10.display();
yellow11.display();
yellow12.display();

/*ground1.display();
ground2.display();
//ground3.display();
ground4.display();
ground5.display();
ground6.display();
ground7.display();
ground8.display();
ground9.display();
ground10.display();
ground11.display();
ground12.display();*/
}