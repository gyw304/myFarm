MyGame.Market = function(game) {};
MyGame.Market.prototype = {
    create: function() {
        this.add.image(0,0,'bg');

        GameUI.headMod();

        this.fruitsPlane = this.add.image(this.world.width/2-10,200,'fruitsPlane');
        this.fruitsPlane.anchor.set(0.5,0);

        this.fruitsNum = this.add.text(this.world.centerX+10, 535, '你卖掉了 '+user.sell+' 个果实\n获得了 '+user.getcoin+' 枚金币', { font: "bold 44px Microsoft YaHei", fill: "#ffffff", align: "center" });
        this.fruitsNum.anchor.set(0.5,0);
        this.fruitsNum.lineSpacing = 30;

        this.art = this.add.text(this.world.centerX, 795, '提示：1个果实可兑换288枚金币', { font: "34px Microsoft YaHei", fill: "#000000", align: "center" });
        this.art.anchor.set(0.5,0);


        this.gohomeBtn = this.add.button(this.world.centerX,880,'atlas_ico',function(){
            game.state.start('Farm');
        },this);
        this.gohomeBtn.anchor.set(0.5,0);
        this.gohomeBtn.frameName = 'gohome.png';


        GameUI.userBar();
        GameUI.cutscenes();
    }
};