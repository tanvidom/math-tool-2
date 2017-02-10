var LevelThreeState = function()
{

};
var part1;
var part2;
var part3;
var plate1;
var plate2;
var button;


LevelThreeState.prototype.init = function()
{

};

LevelThreeState.prototype.preload = function(){
    
};

LevelThreeState.prototype.create = function()
{
 group_of_children.person1.x = 100;
 group_of_children.person1.y = 100;

 
 part1 = this.add.sprite(0, 0, 'chocolate', 'sprite1');
 part2 = this.add.sprite(0, 50, 'chocolate', 'sprite2');
 plate1 = this.add.sprite(50,200, 'table','table1');
 plate2 = this.add.sprite(200,200,'table','table2');
  
  part2.inputEnabled = true;
  part2.events.onInputDown.add(this.onthis, this);

  button = this.add.button(300,300, 'button3', this.actionOnClick);
  console.log('with 2');
  
};

LevelThreeState.prototype.update = function()
{

};
LevelThreeState.prototype.onthis = function()
{
part1.loadTexture('chocolate','sprite2');
part1.inputEnabled = true;
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




