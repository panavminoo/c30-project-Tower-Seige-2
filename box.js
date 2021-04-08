class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("wood1.png");
    }
    display(){
      if (this.body.speed>2.2){
        World.remove(world,this.body);
        //push();
        tint(255,this.visible);
        this.visible-=5
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        //pop();
      }
      else{
        super.display();
      }
    }
  };