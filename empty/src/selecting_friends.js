var LevelOneState = function(){

};

LevelOneState.prototype.init = function(){
};

LevelOneState.prototype.preload = function(){
this.load.image('boy1','assets/boy1.png');
  this.load.image('boy2','assets/boy2.png');
  this.load.image('boy3','asysets/boy3.png');
  this.load.image('girl1','assets/girl1.png');
  this.load.image('girl2','assets/girl2.png');
  this.load.image('girl3','assets/girl3.png');
};

LevelOneState.prototype.create = function()
{
 this.mouseClicks=0;
 var person1 = this.add.sprite(this.world.centerX-200,this.world.centerY-100,'boy1');
 person1.anchor.setTo(0.5,0.5);
 person1.inputEnabled = true;
 person1.events.onInputDown.add(this.onthis, this);
 
};

LevelOneState.prototype.update = function(){
};
LevelOneState.prototype.onthis = function(){
/** this.mouseClicks++;
if (this.mouseClicks%2!=0)
{
console.log('hi');
}
else
{
console.log('bye');
}**/

this.game.state.start('food_cuter');
 
};
