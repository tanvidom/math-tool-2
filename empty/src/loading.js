var loading = function(game){
    preload: function() 
   {
        
         game.load.image('logo','assets/iconcf.png');
         game.load.image('title','assets/title.png');
         game.load.image('button','assets/strt-button.png');
         game.load.atlasJSONHash('children', 'assets/people3.png', 'assets/child_people3_tp_hash.json'); 
         game.load.atlasJSONHash('texts', 'assets/text_files_1.png', 'assets/text_sprites_1.json'); 
         game.load.image('chocolate','assets/part.png');
         game.load.image('chocolate1','assets/part2.png');
         game.load.image('button3','assets/strt-button.png');
    },
  
    create: function() {
        logo =   game.add.sprite(game.world.centerX,game.world.centerY,'logo');
logo.anchor.setTo(0.5,0.5);//set the anchor so that the image is centered on the stage
logo =   game.add.sprite(game.world.centerX,game.world.centerY-150,'title');
logo.anchor.setTo(0.5,0.5);//set the anchor so that the image is centered on the stage
button = game.add.button(game.world.centerX-100,game.world.centerY+100, 'button', this.actionOnClick);
logo.anchor.setTo(0.5,0.5);
    },
    
    update: function() {    
       
    }
    actionOnClick: function(){
     game.state.start('selecting_friends');
}
};


