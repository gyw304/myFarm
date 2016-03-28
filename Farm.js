var rnd = 0;
var self;
MyGame.Farm = function(game) {};
MyGame.Farm.prototype = {
    create: function() {
        self = this;
        this.add.image(0,0,'bg');

        GameUI.headMod();

        this.flag = true;
        this.toolGroup = this.add.group();
        this.toolGroup.x = 40;
        this.toolGroup.y = -480;


        rnd = this.rnd.integerInRange(0, 4);

        this.toolBtn = this.add.button(40,180,'atlas_ico',function(){
            if(this.flag)
            {
                this.flag = false;
                this.toolGroup.visible = true
                self.add.tween(this.toolGroup).to({y:190}, 500, Phaser.Easing.Cubic.Out, true,0)
            }
            else
            {
                this.flag = true;
                self.add.tween(this.toolGroup).to({y:-480}, 500, Phaser.Easing.Cubic.Out, true,0).onComplete.add(function(){
                    self.toolGroup.visible = false
                })
            }
        },this);


        this.toolBtn.frameName = 'tool_btn.png';
        this.arr = this.add.sprite(55,130,'atlas_ico');
        this.arr.frameName = 'arr.png';



        this.tool_0 = this.add.sprite(10,160,'atlas_ico');
        this.tool_0.frameName = 'watering_btn.png';
        this.tool_0.name = 'tool_0';
        this.toolGroup.add(this.tool_0);


        this.tool_1 = this.add.sprite(10,280,'atlas_ico');
        this.tool_1.frameName = 'trim_btn.png';
        this.tool_1.name = 'tool_1';
        this.toolGroup.add(this.tool_1);

        this.tool_2 = this.add.sprite(10,400,'atlas_ico');
        this.tool_2.frameName = 'hoeing_btn.png';
        this.tool_2.name = 'tool_2';
        this.toolGroup.add(this.tool_2);

        this.tool_3 = this.add.sprite(15,530,'atlas_ico');
        this.tool_3.frameName = 'fertilize_btn.png';
        this.tool_3.name = 'tool_3';
        this.toolGroup.add(this.tool_3);

        this.tool_4 = this.add.sprite(10,660,'atlas_ico');
        this.tool_4.frameName = 'drug_btn.png';
        this.tool_4.name = 'tool_4';
        this.toolGroup.add(this.tool_4);


        this.toolBtn.addChild(this.arr);


        this.toolGroup.setAll('inputEnabled', true);

        this.toolGroup.callAll('events.onInputDown.add', 'events.onInputDown', this.clickTool);

        this.toolGroup.visible = false;


        game.graphics = game.add.graphics(0, 0);
        /*game.graphics.beginFill(0x000000,.5);*/
        game.graphics.drawRect(40, 300, 120,678);
        game.graphics.endFill();

        this.toolGroup.mask = game.graphics;


        this.zhongzi = this.add.image(this.world.centerX+40,this.world.height - 150,'z_'+user.state+'');
        this.zhongzi.anchor.set(0.5,1);

        this.shuohua = this.add.sprite(this.zhongzi.x+130,700,'atlas_pao');
        this.shuohua.alpha = 0;



        this.zhongzi.inputEnabled = true;
        this.zhongzi.events.onInputDown.add(function(){
            if(user.state == 3)
            {
                user.state = 0;
                self.add.tween(self.zhongzi).to({alpha:0}, 1000, Phaser.Easing.Linear.None, true,0).onComplete.add(function(){
                    self.add.tween(self.zhongzi).to({alpha:1}, 1000, Phaser.Easing.Linear.None, true,0)
                    self.zhongzi.loadTexture('z_'+user.state+'');
                });

                game.fruitsNum.setText(user.fruits+=30)

                //self.zhongzi.loadTexture('z_0')
            }
        },this)



        this.add.tween(this.zhongzi.scale).to({y:.98}, 500, Phaser.Easing.Linear.None, true,0,-1,true);
        if(user.fall)
        {
            this.showFill(rnd);
            this.zhongzi.alpha = 0;

            this.zhongziUp = this.add.image(this.world.centerX+40,this.world.height - 150,'z_'+(user.state+1)+'');
            this.zhongziUp.anchor.set(0.5,1);

            this.zhongziUp.visible = false;

        }

        this.add.image(this.world.centerX,this.world.height,'land').anchor.set(0.5,1);

        GameUI.userBar();
        GameUI.cutscenes();
    },
    showFill : function(rnd){
        self.fill = this.add.image(280,this.world.height - 150,'isfill');
        self.fill.anchor.set(0,1);
        self.pop = this.add.sprite(120,-680,'atlas_ico');
        self.pop.frameName = 'pop.png';

        self.fillico = this.add.sprite(self.pop.width/2,self.pop.height/2,'atlas_ico');
        self.fillico.anchor.set(0.5);
        self.fillico.frameName = 'fill_'+rnd+'.png';
        self.fillico.name = '2';

        self.add.tween(self.fill.scale).to({y:.98}, 500, Phaser.Easing.Linear.None, true,0,-1,true);


        self.pop.addChild(self.fillico);

        self.fill.addChild(self.pop);
    },
    clickTool : function(item){

        var key =item.name.split("_")[1];
        if(key == rnd && user.fall)
        {
            self.add.tween(self.fill).to({alpha:0}, 1000, Phaser.Easing.Linear.None, true,0)
            self.add.tween(self.zhongzi).to({alpha:1}, 1000, Phaser.Easing.Linear.None, true,0).onComplete.add(function(){
                self.add.tween(self.zhongzi).to({alpha:0}, 1000, Phaser.Easing.Linear.None, true,500).onComplete.add(function(){
                    self.add.tween(self.zhongzi).to({alpha:1}, 1000, Phaser.Easing.Linear.None, true,0)
                    self.zhongzi.loadTexture('z_'+(user.state+1)+'');

                    user.state++;

                    if(user.state == 3)
                    {
                        self.showShuohua('p_2.png');
                    }

                })
            })

            if(user.fall)
            {
                self.showShuohua('p_1.png');
            }


            user.fall = false;
        }
        else
        {
            if(user.fall)
            {
                self.showShuohua('p_0.png');
            }
        }
        cantouch = false;
    },

    showShuohua : function(data){

            self.shuohua.alpha = 0;
            self.add.tween(self.shuohua).to({alpha:1}, 800, Phaser.Easing.Linear.None, true,0).onComplete.add(function(){
                self.add.tween(self.shuohua).to({alpha:0}, 800, Phaser.Easing.Linear.None, true,500)
            })
            self.shuohua.frameName = data;

    }

};