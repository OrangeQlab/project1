var canvas;
var music;
var box,block1,block2,block3,block4,edges

function preload(){
    music = loadSound("music.mp3");
}              


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 block1 = createSprite(100,590,200,25)     
console.log(block1.shapeColor);
          block1.shapeColor = "blue";
          console.log(block1.shapeColor)

           block2 = createSprite(285,590,200,25)     
console.log(block2.shapeColor);
          block2.shapeColor = "orange";
          console.log(block2.shapeColor)

           block3 = createSprite(470,590,200,25)     
          console.log(block3.shapeColor);
                    block3.shapeColor = "green";
                    console.log(block3.shapeColor)

                     block4 = createSprite(655,590,225,25)     
          console.log(block4.shapeColor);
                    block4.shapeColor = "red";
                    console.log(block4.shapeColor)
          
 
         

    //create box sprite and give velocity
     box = createSprite(random(20,750),300,20,20)
    box.velocityY = 3;
    box.velocityX= 3;  
}



function draw() {
    background((169,169,169));
    edges=createEdgeSprites();  
    box.bouceOff(edges[0])
    box.bouceOff(edges[1])
    box.bouceOff(edges[2])

    box.bouceOff(edges[3])


    
    //create edgeSprite



    //add condition to check if box touching surface and make it bounce
    //if(block1.isTouching(box) && box.bouceOff(block1)){
        if(box.isTouching(block1)){box.velocityY=0;
            box.velocityX=0;

    }
    drawSprites();

}





























































































































































   
    

  






























































































































































































