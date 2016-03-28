
var canclick = false;

var GameUI = ( function (mod){

    mod.cutscenes = function(){ //过场动画
        game.graphics = game.add.graphics(0, 0);
        game.graphics.beginFill(0x000000);
        game.graphics.drawRect(0, 0, game.world.width,game.world.height);
        game.graphics.endFill();

        game.add.tween(game.graphics).to({alpha:0},500,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
            game.graphics.kill()
        },this);
    };

    mod.headMod = function(){
        game.fruitsPlane = game.add.sprite(0,40,'atlas_ico');
        game.fruitsPlane.frameName = 'fruits_plane.png';
        game.fruitsNum = game.add.text(165, 35, user.fruits, { font: "bold 44px Microsoft YaHei", fill: "#ffffff", align: "left" });
        game.fruitsPlane.addChild(game.fruitsNum);

        game.backHomeBtn = game.add.button(game.world.width - 150,40,'atlas_ico',function(){
            game.state.start('Map');
        },this);
        game.backHomeBtn.frameName = 'backHome_btn.png';
    };


    mod.userBar = function(){ //底部用户信息

        this.footBar = game.add.sprite(20,game.world.height - 180,'atlas_bar');
        this.footBar.frameName = 'bar.png';


        this.userHeaderImg = game.add.image(30,15,'wxHead');
        this.userHeaderImg.width = this.userHeaderImg.height = 124;
        this.name = game.add.text(180, 25, user.name, { font: "bold 34px Microsoft YaHei", fill: "#000000", align: "left" });

        this.coin = game.add.sprite(170,70,'atlas_bar');
        this.coin.frameName = 'coin.png';

        this.coinNum = game.add.text(240, 85, user.coin, { font: "34px Microsoft YaHei", fill: "#ffffff", align: "left" });

        this.toCoin = game.add.button(405,35,'atlas_bar',function(){
            if(canclick || !user.fall)
            {
                window.location.href = 'prize/prize.html'
            }
        },this);
        this.toCoin.frameName = 'toCoin_btn.png';


        this.footBar.addChild(this.userHeaderImg);
        this.footBar.addChild(this.name);
        this.footBar.addChild(this.coin);
        this.footBar.addChild(this.coinNum);
        this.footBar.addChild(this.toCoin);
    };

    return mod;
})(window.GameUI || {});