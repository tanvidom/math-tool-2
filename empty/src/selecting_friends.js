var LevelOneState = function(){

};
var person1;
var person2;
var person3;
var person4;
var arr_selected = new Array(8);
var group_of_children;
var mouseClicks = new Array(8);
var button1;
var text_inst;
LevelOneState.prototype.init = function()
{
 
};

LevelOneState.prototype.preload = function(){
this.load.atlasJSONHash('children', 'assets/people3.png', 'assets/child_people3_tp_hash.json'); 
this.load.atlasJSONHash('texts', 'assets/text_files_1.png', 'assets/text_sprites_1.json'); 
};

LevelOneState.prototype.create = function()
{
 group_of_children = this.add.group();
 mouseClicks = [0,0,0,0,0,00,0];
 person1 = this.add.sprite(50,50,'children','child1');
 person1.inputEnabled = true;
 person1.events.onInputDown.add(this.onthis1, this);
 
 person2 = this.add.sprite(200,50,'children','child2');
 person2.inputEnabled = true;
 person2.events.onInputDown.add(this.onthis2, this);

 person3 = this.add.sprite(350,50,'children','child3');
 person3.inputEnabled = true;
 person3.events.onInputDown.add(this.onthis3, this);
 
  person4 = this.add.sprite(500,50,'children','child4');
 person4.inputEnabled = true;
 person4.events.onInputDown.add(this.onthis4, this);
 

 button1 = this.add.sprite(350,400,'texts','sprite1');
 button1.inputEnabled = true;
 button1.events.onInputDown.add(this.nextStage, this);
 var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
 text_inst = this.add.text(100,200,"Select upto 4 friends who share food",style);
 
 /** person5 = this.add.sprite(50,200,'children','child5');
 person5.inputEnabled = true;
 person5.events.onInputDown.add(this.onthis5, this);
   person6 = this.add.sprite(200,200,'children','child6');
 person6.inputEnabled = true;
 person6.events.onInputDown.add(this.onthis6, this);
person7 = this.add.sprite(350,200,'children','child7');
 person7.inputEnabled = true;
 person7.events.onInputDown.add(this.onthis7, this);
 person8 = this.add.sprite(500,200,'children','child8');
 person8.inputEnabled = true;
 person8.events.onInputDown.add(this.onthis8, this);
 **/
};

LevelOneState.prototype.update = function(){
};
LevelOneState.prototype.onthis1 = function(){
mouseClicks[0]++;
if (mouseClicks[0]%2!=0)
{
  arr_selected[0] = 1;
}
else
{
  arr_selected[0] = 0;
}
console.log(arr_selected[0]);
};
LevelOneState.prototype.onthis2 = function(){
mouseClicks[1]++;
if (mouseClicks[1]%2!=0)
{
  arr_selected[1] = 1;
}
else
{
  arr_selected[1] = 0;
}
console.log(arr_selected[1]);
};
LevelOneState.prototype.onthis3 = function(){
mouseClicks[2]++;
if (mouseClicks[2]%2!=0)
{
  arr_selected[2] = 1;
}
else
{
  arr_selected[2] = 0;
}
console.log(arr_selected[2]);
};
LevelOneState.prototype.onthis4 = function(){
mouseClicks[3]++;
if (mouseClicks[3]%2!=0)
{
  arr_selected[3] = 1;
}
else
{
  arr_selected[3] = 0;
}
console.log(arr_selected[3]);
};
LevelOneState.prototype.nextStage = function()
{
if(arr_selected[0] == 1)
{
group_of_children.add(person1);
}
if(arr_selected[1] == 1)
{
group_of_children.add(person2);
}
if(arr_selected[2] == 1)
{
group_of_children.add(person3);
}
if(arr_selected[3] == 1)
{
group_of_children.add(person4);
}
if(group_of_children.length == 1)
{
 var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
 text_inst = this.add.text(100,400,"Select more than 1 friend",style);
}
if(group_of_children.length == 2)
{
this.game.state.start('food_cuter_with_two',true,false,group_of_children);
}
if(group_of_children.length == 3)
{
this.game.state.start('food_cuter_with_three',true,false,group_of_children);
}
if(group_of_children.length == 4)
{
this.game.state.start('food_cuter_with_four',true,false,group_of_children);
}
};

