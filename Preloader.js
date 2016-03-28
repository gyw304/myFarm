MyGame.Preloader = function(game){
};


MyGame.Preloader.prototype = {

    create:function(){

        this.add.image(0,0,'loading_bg');

        this.load.onFileComplete.add(this.fileComplete, this);
        this.load.onLoadComplete.add(this.loadComplete, this);
        this.text = this.add.text(this.world.width/2, this.world.height/2+150, '', { font: "bold 44px Microsoft YaHei",fill: '#fff' });
        this.text.anchor.set(0.5);
        this.start();
    },
    start:function(){


        this.load.image('wxHead',user.headerImg);

        this.load.image('map_bg','assets/map_bg.jpg');

        this.load.image('brand','assets/brand.png');

        this.load.image('bg','assets/bg.jpg');

        this.load.image('fruitsPlane','assets/fruitsPlane.png');
        this.load.image('introducePlane','assets/introducePlane.png');
        this.load.image('introducePlane2','assets/introducePlane2.png');
        this.load.image('isfill','assets/isfill.png?1');
        this.load.image('fillText','assets/fillText.png');
        this.load.image('land','assets/land.png?1');

        this.load.image('z_0','assets/z_0.png');
        this.load.image('z_1','assets/z_1.png');
        this.load.image('z_2','assets/z_2.png');
        this.load.image('z_3','assets/z_3.png');

        this.load.image('s_0','assets/s_0.png');
        this.load.image('s_1','assets/s_1.png');
        this.load.image('s_2','assets/s_2.png');
        this.load.image('s_3','assets/s_3.png');
        this.load.image('s_4','assets/s_4.png');

        //atlas
        this.load.atlas('atlas_bar', 'assets/atlas_bar.png', 'assets/atlas_bar.json');
        this.load.atlas('atlas_map', 'assets/atlas_map.png', 'assets/atlas_map.json');
        this.load.atlas('atlas_ico', 'assets/atlas_ico.png?9', 'assets/atlas_ico.json?9');
        this.load.atlas('atlas_pao', 'assets/atlas_pao.png', 'assets/atlas_pao.json');

        this.load.start();
    },
    fileComplete:function(progress){
        this.text.setText('≈¨¡¶º”‘ÿ÷–[' + progress + "%]");
    },
    loadComplete:function(){
        this.state.start('Map');
    }
};