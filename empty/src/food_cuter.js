var LevelThreeState = function(){

};
var part1;
var part2;
var part3;
var plate1;
var plate2;
var button;

LevelThreeState.prototype.init = function(){
};

LevelThreeState.prototype.preload = function(){
     this.load.atlasJSONHash('chocolate', 'assets/chocolates1.png', 'assets/chocolates1_tp_hash.json');  
     this.load.image('plate1','assets/plate_empty.png');
     this.load.image('plate2','assets/plate_empty.png');
     this.load.image('button3','assets/strt-button.png');

 

};

LevelThreeState.prototype.create = function()
{
 part1 = this.add.sprite(0, 0, 'chocolate', 'sprite1');
 part2 = this.add.sprite(0, 50, 'chocolate', 'sprite2');
 plate1 = this.add.sprite(50,200, 'plate1');
 plate2 = this.add.sprite(100,200,'plate2');
  part1.inputEnabled = true;
  part2.inputEnabled = true;
  part2.events.onInputDown.add(this.onthis, this);
  button = this.add.button(300,300, 'button3', this.actionOnClick);
  
};

LevelThreeState.prototype.update = function()
{

};
LevelThreeState.prototype.onthis = function()
{
part1.loadTexture('chocolate','sprite2');
part3 = this.add.sprite(100,0,'chocolate','sprite3');
part3.inputEnabled = true;
part3.input.enableDrag(true);
part1.input.enableDrag(true);

};
LevelThreeState.prototype.actionOnClick = function()
{
if (part3.overlap(plate1))
{
  console.log('hi');

}
else 
{
console.log('bye');
}

};




