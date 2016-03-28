MyGame.Hospital = function(game) {};
var index = 0;
MyGame.Hospital.prototype = {
    create: function() {
        this.add.image(0,0,'bg');

        GameUI.headMod();


        this.sGroup = this.add.group();
        this.sGroup.x = 0;
        this.sGroup.y = this.world.centerY - 50;

        for(var i=0;i<=4;i++)
        {
            this.sGroup.create(this.world.width*i+this.world.centerX,0,'s_'+i+'');
        }
        this.sGroup.forEach(function(item){
            item.anchor.set(0.5);
        })

        this.add.text(40, 925, '点击查看\n种子的不同状态', { font: "30px Microsoft YaHei", fill: "#000000", align: "left" })


        this.l_btn = this.add.button(20,600,'atlas_ico',function(){
            if(index<=0)
            {
                return
            }
            else
            {
                index--
            }
            this.cut(index)
        },this);
        this.l_btn.frameName = 'l_btn.png';

        this.r_btn = this.add.button(this.world.width - 70,600,'atlas_ico',function(){
            if(index>=4)
            {
                return
            }
            else
            {
                index++
            }
            this.cut(index)
        },this);
        this.r_btn.frameName = 'r_btn.png';

        GameUI.userBar();
        GameUI.cutscenes();
    },
    cut : function(index){
        this.add.tween(this.sGroup).to( { x: - this.world.width * index }, 1000, Phaser.Easing.Cubic.Out, true);
    }
};