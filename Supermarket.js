MyGame.Supermarket = function(game) {};
MyGame.Supermarket.prototype = {
    create: function() {
        this.add.image(0,0,'bg');

        GameUI.headMod();

        this.introducePlane = this.add.image(this.world.centerX,190,'introducePlane');
        this.introducePlane.anchor.set(0.5,0);

        GameUI.userBar();
        GameUI.cutscenes();
    }
};