 window.onload = function()
 {
 var person = [];
 var person1 = [];
 var chocolates = [];
 var chocolates1 = [];
 var chocolates2 = [];
 var plates = [];
 var choco_name =[];
 var number_of_pieces = [];
 var button;
 var rect2;
 var choco_num;
 var check1 = [];
 var check2 = [];
 var number_of_chocolates;
 var no_of_chocolates;
var logo;
var logo1
var button;
 var arr_selected = new Array(8);
 var group_of_children = [];
 var mouseClicks = new Array(8);
 var button1;
 var button4;
 var n = 0;
 var text_inst;
 var text_inst1;
 var text_inst2;
 var text_inst3;
 var text_inst4;
 var game = new Phaser.Game(800, 600);
 var playGame = function(game){}
 playGame.prototype = {
         preload : function()
        {
         game.load.image('logo','assets/iconcf.png');
         game.load.image('title','assets/title.png');
         game.load.image('button','assets/strt-button.png');
         game.load.atlasJSONHash('children', 'assets/people3.png', 'assets/child_people3_tp_hash.json'); 
         game.load.atlasJSONHash('texts', 'assets/text_files_1.png', 'assets/text_sprites_1.json'); 
         game.load.atlasJSONHash('numberChocolates', 'assets/number_of_chocolates.png', 'assets/number_of_chocolates.json'); 
         game.load.atlasJSONHash('Chocolates', 'assets/cutting_board_1.png', 'assets/choco_pl.json');
         game.load.atlasJSONHash('table_2', 'assets/table1.png', 'assets/sprites_table.json');
         game.load.image('button3','assets/strt-button.png');
         //game.load.image('table_2','assets/table1.png');
        },
         create : function()
        {
           logo =   game.add.sprite(this.world.centerX,this.world.centerY,'logo');
           logo.anchor.setTo(0.5,0.5);//set the anchor so that the image is centered on the stage
           logo1 =   game.add.sprite(this.world.centerX,this.world.centerY-150,'title');
           logo1.anchor.setTo(0.5,0.5);//set the anchor so that the image is centered on the stage
button = game.add.button(this.world.centerX-100,this.world.centerY+100, 'button', this.actionOnClick);
logo.anchor.setTo(0.5,0.5);

},

      actionOnClick: function()
     {
     game.state.start('selecting_friends');
     console.log('hi');
     }
}
var SelectingFriends = function(game){}
SelectingFriends.prototype = {
        preload : function()
         {
         },
        create : function()
          {
           
           var name_of_sprites = ['child1','child2','child3','child4'];
           for (var i =0; i < 4; i++)
            {
             var height = 50;
             var width = 50;
             person[i]=game.add.sprite(height + (i*200), width, 'children', name_of_sprites[i]);
             person[i].numb = i;
              person[i].inputEnabled = true;
               person[i].inputEnabled = true;
               person[i].events.onInputDown.add(this.onthis1,this);
               person[i].sel_prop = 0;
            }
           button1 = game.add.sprite(350,400,'texts','sprite1');
           button1.inputEnabled = true;
           button1.events.onInputDown.add(this.nextStage, this);
           var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
           text_inst = game.add.text(100,200,"Select upto 4 friends who share food",style);

          },
      onthis1 : function(item)
      {
        var j = item.numb;
        if(group_of_children.length < 5 && group_of_children.indexOf(item)==-1)
        {
         person[j].sel_prop = 1;
        group_of_children.push(person[j]);
        }

      },
         nextStage : function()
{
if(group_of_children.length > 0)
{
  for (var i = 0; i<=3;i++)
  {
    
    game.world.remove(person[i]);
  }
game.state.start('selecting_food');
}
else {
  var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
  text_inst = game.add.text(100,300,"Cannot proceed without selection",style);
}
}
}
var SelectingFood = function(game){}
   SelectingFood.prototype = 
   {
     create : function()
     {
      var name_of_choco = ['sprite1','sprite2','sprite3','sprite4','sprite5','sprite6','sprite7','sprite8','sprite9'];
      var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
      text_inst1 = game.add.text(50,50,"Select number of food packets",style);
      for (var i =0; i < 3; i++)
            {
             
             var height = 100;           
             chocolates[i]=game.add.sprite(height + (i*120), 100, 'numberChocolates', name_of_choco[i]);
             chocolates[i].numb = i+1;
             
               chocolates[i].inputEnabled = true;
               chocolates[i].events.onInputDown.add(this.onthis2,this);

                
               //for next line 
               chocolates[i+3]=game.add.sprite(height + (i*120), 200, 'numberChocolates', name_of_choco[i+3]);
               chocolates[i+3].numb = i+4;
               chocolates[i+3].inputEnabled = true;
               chocolates[i+3].events.onInputDown.add(this.onthis2,this);

               //for next line 
                chocolates[i+6]=game.add.sprite(height + (i*120), 300, 'numberChocolates', name_of_choco[i+6]);
               chocolates[i+6].numb = i+7;
               chocolates[i+6].inputEnabled = true;
               chocolates[i+6].events.onInputDown.add(this.onthis2,this);
              
            }
      button1 = game.add.sprite(350,400,'texts','sprite1');
           button1.inputEnabled = true;
           button1.events.onInputDown.add(this.nextStage1, this);
      
    },
     onthis2 : function(item)
      {
         item.selectt = true;
         number_of_chocolates = item.numb;
         //no_of_chocolates = number_of_chocolates;

      },
nextStage1 : function()
{
game.state.start('food_cutting');
}
}
var FoodCutting = function(game){}
    FoodCutting.prototype = {

      create : function()
      {
        var height = 40;
        var width = 14;
        var k = 0;
      
        var person2 = ['per1','per2','per3','per4','per5','per6','per7','per8','per9'];
       for (var i=0; i<4; i ++)
       {
         if (person[i].sel_prop == 1)
         {  
         
         person[i].x = height + (k*120);
         person[i].y = width; //person1[i]=game.add.sprite(height + (i*200), width,person2[i],group_of_children[i].texture);
          game.add.existing(person[i]);
          plates[k] = game.add.sprite(person[i].x-10,152,'table_2','sprite1');
          //game.physics.enable(plates[k], Phaser.Physics.ARCADE);
         //plates[k].body.setSize(89,78,0,0);
          plates[k].sum = 0;
          
          //plates[k].tint = Math.random() * 0xffffff;
          k++;
          //plates[i]=game.add.sprite(height + '')
        }
       } 
         
         var cutting_board = game.add.sprite(5,250,'Chocolates','cuttingboard'); 
         rect2 = game.add.sprite(5,255,null);
         game.physics.enable(rect2, Phaser.Physics.ARCADE);
         rect2.body.setSize(233, 148,0,0);
         var style = { font: "bold 30px Arial", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
         button4 = game.add.text(610,310,'Eat Food',style);
         button4.inputEnabled = true; 
         button4.events.onInputDown.add(this.onthis6,this);
         var button5 = game.add.text(610,410, 'Reset', style);
         height = 10;
         width = 410;
         var space = 10;
        no_of_chocolates = number_of_chocolates;
         switch(number_of_chocolates)
         {
          case 1:
          chocolates1[0]=game.add.sprite(height, width,'Chocolates','choco');
          chocolates1[0].inputEnabled = true;
          chocolates1[0].input.enableDrag(true);
          chocolates1[0].weight =1;

          break;
          case 2:
          chocolates1[0]=game.add.sprite(height, width,'Chocolates','choco');
          chocolates1[1]=game.add.sprite(height + 150, width, 'Chocolates','choco');
           for(var k = 0; k <2;k ++)
          {
            chocolates1[k].inputEnabled = true;
            chocolates1[k].input.enableDrag(true);
            chocolates1[k].weight = 1;
          }
          break;
          case 3:
          chocolates1[0]=game.add.sprite(height, width,'Chocolates','choco');
          chocolates1[1]=game.add.sprite(height + 150 , width, 'Chocolates','choco');
         
          chocolates1[2]=game.add.sprite(height + 300, width, 'Chocolates','choco');
          for(var k = 0; k <3;k ++)
          {
            chocolates1[k].inputEnabled = true;
            chocolates1[k].input.enableDrag(true);
            chocolates1[k].weight = 1;
          }
          break;
          case 4:
          chocolates1[0]=game.add.sprite(height, width,'Chocolates','choco');
          chocolates1[1]=game.add.sprite(height + 150 , width, 'Chocolates','choco');
          chocolates1[2]=game.add.sprite(height + 300, width, 'Chocolates','choco');
          chocolates1[3] = game.add.sprite(height + 450, width, 'Chocolates','choco');
          
           for(var k = 0; k <4;k ++)
          {
            chocolates1[k].inputEnabled = true;
            chocolates1[k].input.enableDrag(true);
            chocolates1[k].weight = 1;
          }
          break;
          case 5:
          chocolates1[0]=game.add.sprite(height, width,'Chocolates','choco');
          chocolates1[1]=game.add.sprite(height + 150 , width, 'Chocolates','choco');
          chocolates1[2]=game.add.sprite(height + 300, width, 'Chocolates','choco');
          chocolates1[3] = game.add.sprite(height + 450, width, 'Chocolates','choco');
          chocolates1[4] = game.add.sprite(height, width + 50, 'Chocolates','choco');
         
          for(var k = 0; k <5;k ++)
          {
            chocolates1[k].inputEnabled = true;
            chocolates1[k].input.enableDrag(true);
            chocolates1[k].weight = 1;
          }
          break;
          case 6:
          chocolates1[0]=game.add.sprite(height, width,'Chocolates','choco');
          chocolates1[1]=game.add.sprite(height + 150 , width, 'Chocolates','choco');
          chocolates1[2]=game.add.sprite(height + 300, width, 'Chocolates','choco');
          chocolates1[3] = game.add.sprite(height + 450, width, 'Chocolates','choco');
          chocolates1[4] = game.add.sprite(height, width + 55, 'Chocolates','choco');
          chocolates1[5] = game.add.sprite(height + 150, width + 55, 'Chocolates','choco');
           for(var k = 0; k <6;k ++)
          {
             chocolates1[k].inputEnabled = true;
            chocolates1[k].input.enableDrag(true);
            chocolates1[k].weight = 1;
          }
          
          break;
          case 7:
          chocolates1[0]=game.add.sprite(height, width,'Chocolates','choco');
          chocolates1[1]=game.add.sprite(height + 150 , width, 'Chocolates','choco');
          chocolates1[2]=game.add.sprite(height + 300, width, 'Chocolates','choco');      
          chocolates1[3] = game.add.sprite(height + 450, width, 'Chocolates','choco');
          chocolates1[4] = game.add.sprite(height, width + 55, 'Chocolates','choco');
          chocolates1[5] = game.add.sprite(height + 150, width + 55, 'Chocolates','choco');
          chocolates1[6] = game.add.sprite(height + 300, width + 55, 'Chocolates', 'choco');
           for(var k = 0; k <7;k ++)
          {
             chocolates1[k].inputEnabled = true;
            chocolates1[k].input.enableDrag(true);
            chocolates1[k].weight = 1;
          }
          break;
          case 8:
          chocolates1[0]=game.add.sprite(height, width,'Chocolates','choco');
          chocolates1[1]=game.add.sprite(height + 150 , width, 'Chocolates','choco');
          chocolates1[2]=game.add.sprite(height + 300, width, 'Chocolates','choco');      
          chocolates1[3] = game.add.sprite(height + 450, width, 'Chocolates','choco');
          chocolates1[4] = game.add.sprite(height, width + 55, 'Chocolates','choco');
          chocolates1[5] = game.add.sprite(height + 150, width + 55, 'Chocolates','choco');
          chocolates1[6] = game.add.sprite(height + 300, width + 55, 'Chocolates', 'choco');
          chocolates1[7] = game.add.sprite(height + 450, width + 55, 'Chocolates','choco');
          for(var k = 0; k <8;k ++)
          {
             chocolates1[k].inputEnabled = true;
            chocolates1[k].input.enableDrag(true);
            chocolates1[k].weight = 1;
          }
          break;
        }//end switch case
       
                 for(var j=0;j<5;j++)
         {
          var k;
         var style = { font: "bold 30px Arial", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
         number_of_pieces[j] = game.add.text(260 +(j*40),315, j+2,style);
         number_of_pieces[j].selectt = false;
         number_of_pieces[j].sel = j+2;
          number_of_pieces[j].inputEnabled = true; 
          //number_of_pieces[j].choco_num = 0;
          number_of_pieces[j].events.onInputDown.add(this.onthis4,this);   
        }

        console.log(group_of_children.length);
        console.log(number_of_chocolates);
      },
  render : function()
  {

    game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
    for(var k=0; k<plates.length;k++)
    {
    game.debug.geom(plates[k],'#0fffff');
    }


  },
    onthis4 : function(item) 
    {
      
      var num_of_pieces = 0;
      var i1 = [];
       check2 = [];
       check1 = [];

      for(var k = 0;k<number_of_chocolates;k++)
      {
       
        game.physics.arcade.enable(chocolates1[k]);
        
        //this will print whether chocolate is contained inside rect2
        check1[k] = Phaser.Rectangle.containsRect(chocolates1[k].body, rect2.body);
        console.log(check1[k]);

        if(check1[k] == true)
        {
          check2.push(k);
          console.log(check2[0]);
        }
      }
        if(check2.length == 1)
        { 
           
           item.selectt = true;
           num_of_pieces = item.sel;
           switch(num_of_pieces)
           {
            case 2:
            console.log('h');
            var x1 = chocolates1[check2[0]].x;
            var y1 = chocolates1[check2[0]].y;
            console.log('i');
            chocolates2[n]=  game.add.sprite(x1,y1,'Chocolates','choco_two');
            chocolates2[n].inputEnabled = true;
            chocolates2[n].weight = 0.5;
            chocolates2[n].input.enableDrag(true);
            n++;
            chocolates2[n]=  game.add.sprite (x1 + 75, y1,'Chocolates','choco_two');
            chocolates2[n].weight = 0.5;
            chocolates2[n].inputEnabled = true;
            chocolates2[n].input.enableDrag(true);
            console.log(chocolates1.length);
            chocolates1[check2[0]].destroy();
            chocolates1.splice(check2[0],1); 
            console.log(chocolates1.length);
            number_of_chocolates--;
            n++;
            break;

            case 3:
            var x1 = chocolates1[check2[0]].x;
            var y1 = chocolates1[check2[0]].y;
            console.log('i');
            chocolates2[n]=  game.add.sprite(x1,y1,'Chocolates','choco_three');
            chocolates2[n].inputEnabled = true;
            chocolates2[n].weight = 0.3333333333333333;
            chocolates2[n].input.enableDrag(true);
            n++;
            chocolates2[n]=  game.add.sprite (x1 + 60, y1,'Chocolates','choco_three');
            chocolates2[n].weight = 0.3333333333333333;
            chocolates2[n].inputEnabled = true;
            chocolates2[n].input.enableDrag(true);
            n++;
            chocolates2[n] = game.add.sprite(x1+120, y1, 'Chocolates','choco_three');
            chocolates2[n].weight = 0.3333333333333333;
            chocolates2[n].inputEnabled = true;
            chocolates2[n].input.enableDrag(true);
            console.log(chocolates1.length);
            chocolates1[check2[0]].destroy();
            chocolates1.splice(check2[0],1); 
            console.log(chocolates1.length);
            number_of_chocolates--;
            n++;
            break;
            
            case 4:
            var x1 = chocolates1[check2[0]].x;
            var y1 = chocolates1[check2[0]].y;
            console.log('i');
            chocolates2[n]=  game.add.sprite(x1,y1,'Chocolates','choco_in_four');
            chocolates2[n].inputEnabled = true;
            chocolates2[n].weight = 0.25;
            chocolates2[n].input.enableDrag(true);
            n++;
            chocolates2[n]=  game.add.sprite (x1 + 40, y1,'Chocolates','choco_in_four');
            chocolates2[n].weight = 0.25;
            chocolates2[n].inputEnabled = true;
            chocolates2[n].input.enableDrag(true);
            n++;
            chocolates2[n] = game.add.sprite(x1+ 80, y1, 'Chocolates','choco_in_four');
            chocolates2[n].weight = 0.25;
            chocolates2[n].inputEnabled = true;
            chocolates2[n].input.enableDrag(true);
            n++;
            chocolates2[n] = game.add.sprite(x1+ 120, y1, 'Chocolates','choco_in_four');
            chocolates2[n].weight = 0.25;
            chocolates2[n].inputEnabled = true;
            chocolates2[n].input.enableDrag(true);
            console.log(chocolates1.length);
            chocolates1[check2[0]].destroy();
            chocolates1.splice(check2[0],1); 
            console.log(chocolates1.length);
            number_of_chocolates--;
            n++;
            break;

            case 5:
            var x1 = chocolates1[check2[0]].x;
            var y1 = chocolates1[check2[0]].y;
            console.log('i');
            chocolates2[n]=  game.add.sprite(x1,y1,'Chocolates','choco_five');
            chocolates2[n].inputEnabled = true;
            chocolates2[n].weight = 0.20;
            chocolates2[n].input.enableDrag(true);
            n++;
            chocolates2[n]=  game.add.sprite (x1 + 25, y1,'Chocolates','choco_five');
            chocolates2[n].weight = 0.20;
            chocolates2[n].inputEnabled = true;
            chocolates2[n].input.enableDrag(true);
            n++;
            chocolates2[n] = game.add.sprite(x1+ 50, y1, 'Chocolates','choco_five');
            chocolates2[n].weight = 0.20;
            chocolates2[n].inputEnabled = true;
            chocolates2[n].input.enableDrag(true);
            n++;
            chocolates2[n] = game.add.sprite(x1+ 75, y1, 'Chocolates','choco_five');
            chocolates2[n].weight = 0.20;
            chocolates2[n].inputEnabled = true;
            chocolates2[n].input.enableDrag(true);
            n++;
            chocolates2[n] = game.add.sprite(x1+ 100, y1, 'Chocolates','choco_five');
            chocolates2[n].weight = 0.20;
            chocolates2[n].inputEnabled = true;
            chocolates2[n].input.enableDrag(true);
            n++;
            console.log(chocolates1.length);
            chocolates1[check2[0]].destroy();
            chocolates1.splice(check2[0],1); 
            console.log(chocolates1.length);
            number_of_chocolates--;
            n++;
            break;

            }
           
        }
          else
          {
            var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
            text_inst4 = game.add.text(60,546,"Please put only one chocolate on the cutting board first",style);
            console.log('hi');
          }   

      },
     // checkOverlap : function(spriteA, spriteB) {

    //var boundsA = spriteA.getBounds();
    //var boundsB = spriteB.getBounds();

    //return Phaser.Rectangle.intersects(boundsA, boundsB);
  //},

      onthis6 : function(item)
      {
        console.log('hi6');
        console.log(group_of_children.length);
        console.log(no_of_chocolates);

        var expected_sum = no_of_chocolates/(group_of_children.length);
        console.log('expected sum:' + expected_sum);

        var l=0;
          for(var i=0;i<group_of_children.length;i++)
          {
             plates[i].sum = 0;
             game.physics.arcade.enable(plates[i]);

            for(var j =0; j<chocolates2.length;j++)
            {
              

              if(chocolates2[j]!== null && chocolates2[j]!== undefined) 
              {
                game.physics.arcade.enable(chocolates2[j]);
                console.log('hi'+i);
                var boundsA = chocolates2[j].getBounds();
                var boundsB = plates[i].getBounds();
                console.log("bounds A:" + boundsA);
                console.log("bounds B:" + boundsB);

               var x = Phaser.Rectangle.intersects(boundsB, boundsA);
                //var x = Phaser.Rectangle.containsRect(chocolates2[j].body, plates[i].body)
                
                //var x = (chocolates[j],plates[i]);
                console.log(x);
                 if(x == true)
                 {
                   plates[i].sum = plates[i].sum + chocolates2[j].weight;
                   console.log(j);
                   console.log(plates[i].sum);
                 }
            
          }
        }
            if(plates[i].sum==expected_sum)
            {
              
              l++;
              console.log(l);
            } 
          }
          if(l == group_of_children.length)
          {
            text_inst1.destroy();
            var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
            text_inst2 = game.add.text(60,546,"Correct distribution",style);
          }
          else
          {
  
           
            var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
            text_inst3 = game.add.text(60,546,"Incorrect distribution",style);
          } //checking if sum = no of cakes/ no of children
         
      }



    
    }
     game.state.add('PlayGame', playGame);
     game.state.add('selecting_friends', SelectingFriends);
     game.state.add('selecting_food',SelectingFood);
     game.state.add('food_cutting',FoodCutting);
     game.state.start('PlayGame');
}
   
