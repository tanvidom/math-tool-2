var MenuState = function () {};

MenuState.prototype.preload = function() {

this.load.image('logo','assets/iconcf.png');
  this.load.image('title','assets/title.png');
  this.load.image('button','assets/strt-button.png');
};

MenuState.prototype.create = function() {
var logo =   this.add.sprite(this.world.centerX,this.world.centerY,'logo');
logo.anchor.setTo(0.5,0.5);//set the anchor so that the image is centered on the stage
var logo =   this.add.sprite(this.world.centerX,this.world.centerY-150,'title');
logo.anchor.setTo(0.5,0.5);//set the anchor so that the image is centered on the stage
var button = this.add.button(this.world.centerX-100,this.world.centerY+100, 'button', this.actionOnClick);
logo.anchor.setTo(0.5,0.5);

};
MenuState.prototype.update = function() {



};
MenuState.prototype.actionOnClick = function() {

  this.game.state.start('selecting_friends');


};
