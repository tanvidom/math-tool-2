var LevelTwoState = function(){

};
var person1;
var person2;

LevelTwoState.prototype.init = function(){
};

LevelTwoState.prototype.preload = function(){

  this.load.image('chocolate','assets/part.png');
  this.load.image('chocolate1','assets/part2.png');
};

LevelTwoState.prototype.create = function()
{
 this.mouseClicks=0;
 person1 = this.add.sprite(this.world.centerX-200,this.world.centerY-100,'chocolate');
 person1.anchor.setTo(0.5,0.5);
 person2 = this.add.sprite(this.world.centerX,this.world.centerY,'chocolate1');
 person2.anchor.setTo(0.5,0.5);
 person1.inputEnabled = true;
 person1.events.onInputDown.add(this.onthis, this);
};

LevelTwoState.prototype.update = function()
{

};
LevelTwoState.prototype.onthis = function()
{
person1.loadTexture('chocolate1');

};

