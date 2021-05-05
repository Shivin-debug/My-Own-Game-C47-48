class Game {
    constructor(){
    }
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
 
      w1 = createSprite(10, 0, 20, 300);
      w1.shapeColor = "darkgreen";
      w2 = createSprite(displayWidth/2, 0, displayWidth, 30);
      w2.shapeColor = "darkgreen";
      w3 = createSprite(displayWidth-15, displayHeight/2-150, 20, displayHeight);
      w3.shapeColor = "darkgreen";
      w4 = createSprite(displayWidth/2+100, displayHeight/2-600, 20, displayHeight);
      w4.shapeColor = "darkgreen";
      w5 = createSprite(displayWidth/2, 300, 200, 20);
      w5.shapeColor = "darkgreen";
      w6 = createSprite(displayWidth/2-100, displayHeight/2-225, 20, 150);
      w6.shapeColor = "darkgreen";
      w7 = createSprite(10, displayHeight/2+300, 20, displayHeight);
      w7.shapeColor = "darkgreen";
      w8 = createSprite(displayWidth/2, displayHeight, displayWidth, 30);
      w8.shapeColor = "darkgreen";
      w9 = createSprite(223, displayHeight/2-150, 400, 20);
      w9.shapeColor = "darkgreen";
      w10 = createSprite(displayWidth/2-300, displayHeight/2-225, 20, 150);
      w10.shapeColor = "darkgreen";
      w11 = createSprite(displayWidth/2-400, displayHeight/3.5-100, 200, 20);
      w11.shapeColor = "darkgreen";
      w12 = createSprite(displayWidth-125, displayHeight/2-300, 200, 20);
      w12.shapeColor = "darkgreen";
      w13 = createSprite(displayWidth-125, displayHeight/2, 200, 20);
      w13.shapeColor = "darkgreen";
      w14 = createSprite(displayWidth/2+300, displayHeight/2, 20, 600);
      w14.shapeColor = "darkgreen";
      w15 = createSprite(displayWidth-310, displayHeight/2.5-50, 210, 20);
      w15.shapeColor = "darkgreen";
      w16 = createSprite(displayWidth-310, displayHeight/2.5+230, 210, 20);
      w16.shapeColor = "darkgreen";
      w17 = createSprite(displayWidth-220, displayHeight/2.5+410, 20, 380);
      w17.shapeColor = "darkgreen";
      w18 = createSprite(displayWidth/2+100, displayHeight/2.5+320, 20, 450);
      w18.shapeColor = "darkgreen";
      w19 = createSprite(displayWidth/2-10, displayHeight/2.5+90, 210, 20);
      w19.shapeColor = "darkgreen";
      w20 = createSprite(displayWidth/2-10, displayHeight/2.5+380, 210, 20);
      w20.shapeColor = "darkgreen";
      w21 = createSprite(displayWidth/2-100, displayHeight/2.5+310, 20, 140);
      w21.shapeColor = "darkgreen";
      w22 = createSprite(displayWidth/2-200, displayHeight/2.5+230, 210, 20);
      w22.shapeColor = "darkgreen";
      w23 = createSprite(displayWidth/2-300, displayHeight/2.5+160, 20, 140);
      w23.shapeColor = "darkgreen";
      w24 = createSprite(displayWidth/2-300, displayHeight/2.5+450, 20, 140);
      w24.shapeColor = "darkgreen";
      w25 = createSprite(displayWidth/2-400, displayHeight/2.5+380, 210, 20);
      w25.shapeColor = "darkgreen";
      w26 = createSprite(displayWidth/2-500, displayHeight/2.5+240, 20, 300);
      w26.shapeColor = "darkgreen";

      p1 = createSprite(30, 200, 20, 20);

      g1 = createSprite(796, 273, 30, 30);
      g2 = createSprite(35, 870, 30, 30);
      g3 = createSprite(1195, 870, 30, 30);

      o1 = createSprite(720, 220, 30, 70);
      o2 = createSprite(120, 702, 30, 70);
      o3 = createSprite(920, 684, 30, 70);

      o = [o1 , o2, o3];

    }
    play(){
      form.hide();

      background(bg);

        p1.collide(w1);
        p1.collide(w2);
        p1.collide(w3);
        p1.collide(w4);
        p1.collide(w5);
        p1.collide(w6);
        p1.collide(w7);
        p1.collide(w8);
        p1.collide(w9);
        p1.collide(w10);
        p1.collide(w11);
        p1.collide(w12);
        p1.collide(w13);
        p1.collide(w14);
        p1.collide(w15);
        p1.collide(w16);
        p1.collide(w17);
        p1.collide(w18);
        p1.collide(w19);
        p1.collide(w20);
        p1.collide(w21);
        p1.collide(w22);
        p1.collide(w23);
        p1.collide(w24);
        p1.collide(w25);
        p1.collide(w26);

        if(o1.x>800){
          o1.velocityX = -5;
        };

        o2.bounceOff(w1);
        o2.bounceOff(w2);
        o2.bounceOff(w3);
        o2.bounceOff(w4);
        o2.bounceOff(w5);
        o2.bounceOff(w6);
        o2.bounceOff(w7);
        o2.bounceOff(w8);
        o2.bounceOff(w9);
        o2.bounceOff(w10);
        o2.bounceOff(w11);
        o2.bounceOff(w12);
        o2.bounceOff(w13);
        o2.bounceOff(w14);
        o2.bounceOff(w15);
        o2.bounceOff(w16);
        o2.bounceOff(w17);
        o2.bounceOff(w18);
        o2.bounceOff(w19);
        o2.bounceOff(w20);
        o2.bounceOff(w21);
        o2.bounceOff(w22);
        o2.bounceOff(w23);
        o2.bounceOff(w24);
        o2.bounceOff(w25);
        o2.bounceOff(w26);

        o3.bounceOff(w1);
        o3.bounceOff(w2);
        o3.bounceOff(w3);
        o3.bounceOff(w4);
        o3.bounceOff(w5);
        o3.bounceOff(w6);
        o3.bounceOff(w7);
        o3.bounceOff(w8);
        o3.bounceOff(w9);
        o3.bounceOff(w10);
        o3.bounceOff(w11);
        o3.bounceOff(w12);
        o3.bounceOff(w13);
        o3.bounceOff(w14);
        o3.bounceOff(w15);
        o3.bounceOff(w16);
        o3.bounceOff(w17);
        o3.bounceOff(w18);
        o3.bounceOff(w19);
        o3.bounceOff(w20);
        o3.bounceOff(w21);
        o3.bounceOff(w22);
        o3.bounceOff(w23);
        o3.bounceOff(w24);
        o3.bounceOff(w25);
        o3.bounceOff(w26);



        if(keyCode === UP_ARROW){
          p1.velocityY = -3;
        }

        if(keyCode === DOWN_ARROW){
          p1.velocityY = 3;
        }

        if(keyCode === RIGHT_ARROW){
          p1.velocityX = 3;
        }

        if(keyCode == LEFT_ARROW){
          p1.velocityX = -3;
        }

        o1.velocityX = 1;
        o2.velocityX = 2;
        o3.velocityX = 3;

        drawSprites();
    }
    
}