MyGame.School = function(game) {};
MyGame.School.prototype = {
    create: function() {
        this.add.image(0,0,'bg');

        GameUI.headMod();

        this.introducePlane = this.add.image(this.world.centerX,190,'introducePlane2');
        this.introducePlane.anchor.set(0.5,0);

        GameUI.userBar();
        GameUI.cutscenes();
    }
};