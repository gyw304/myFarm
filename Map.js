MyGame.Map = function(game) {

};
MyGame.Map.prototype = {
    create: function() {

        this.add.image(0,0,'map_bg');



        this.farm = this.add.button(230,420,'atlas_map',function(){
            if(canclick || !user.fall)
            {
                game.state.start('Farm');
            }
        }, this);
        this.farm.frameName = 'farm_btn.png';

        this.farmPao = this.add.sprite(this.farm.x+300,this.farm.y+200,'atlas_pao');
        this.farmPao.frameName = 'm_2.png';





        this.hospital = this.add.button(30,610,'atlas_map',function(){
            if(canclick || !user.fall)
            {
                game.state.start('Hospital');
            }
        },this);
        this.hospital.frameName = 'hospital_btn.png';

        this.hospitalPao = this.add.sprite(this.hospital.x+180,this.hospital.y+300,'atlas_pao');
        this.hospitalPao.frameName = 'm_4.png';



        this.market = this.add.button(30,310,'atlas_map',function(){
            if(canclick || !user.fall)
            {
                game.state.start('Market');
            }
        }, this);
        this.market.frameName = 'market_btn.png';

        this.marketlPao = this.add.sprite(this.market.x+100,this.market.y+220,'atlas_pao');
        this.marketlPao.frameName = 'm_0.png';


        this.supermarket = this.add.button(410,125,'atlas_map',function(){
            if(canclick || !user.fall)
            {
                game.state.start('Supermarket');
            }
        },this);
        this.supermarket.frameName = 'supermarket_btn.png';

        this.supermarketPao = this.add.sprite(this.supermarket.x+200,this.supermarket.y+220,'atlas_pao');
        this.supermarketPao.frameName = 'm_1.png';


        this.school = this.add.button(360,735,'atlas_map',function(){
            if(canclick || !user.fall)
            {
                game.state.start('School');
            }
        },this);
        this.school.frameName = 'school_btn.png';

        this.schoolPao = this.add.sprite(this.school.x+270,this.school.y+120,'atlas_pao');
        this.schoolPao.frameName = 'm_3.png';

        this.brand = this.add.image(0,0,'brand')



        this.paoGroup = this.add.group();
        this.paoGroup.add(this.farmPao);
        this.paoGroup.add(this.hospitalPao);
        this.paoGroup.add(this.marketlPao);
        this.paoGroup.add(this.supermarketPao);
        this.paoGroup.add(this.schoolPao);
        this.paoGroup.forEach(function(i){
            i.anchor.set(0.5,1);
            game.add.tween(i).to({y: i.y-5},800,Phaser.Easing.Linear.None,true,0,-1,true);
            game.add.tween(i.scale).to({y:.9}, 800, Phaser.Easing.Linear.None, true,800,-1,true);
        })

        GameUI.userBar()


        if(user.fall)
        {
            this.showFall()
        }


        GameUI.cutscenes();
    },
    showFall : function(){
        this.cover = game.add.graphics(0, 0);
        this.cover.beginFill(0x000000,0.8);
        this.cover.drawRect(0, 0, game.world.width,game.world.height);
        this.cover.endFill();

        this.goLook = game.add.button(this.world.centerX,835,'atlas_ico',function(){
            game.state.start('Farm')
        },this);
        this.goLook.frameName = 'golook.png';
        this.goLook.anchor.set(0.5,0);

        this.close = game.add.button(this.world.width-30,30,'atlas_ico',function(){
            this.cover.destroy();
            canclick = true;
/*            user.fall = false;*/
        },this);
        this.close.frameName = 'close.png';
        this.close.anchor.set(1,0);

        this.isfill = this.add.image(this.world.centerX,200,'isfill');
        this.isfill.anchor.set(0.5,0);

        this.fillText = this.add.image(this.world.centerX,700,'fillText');
        this.fillText.anchor.set(0.5,0);

        this.cover.addChild(this.fillText);
        this.cover.addChild(this.close);
        this.cover.addChild(this.isfill);
        this.cover.addChild(this.goLook);


    }
};

