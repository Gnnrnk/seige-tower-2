class Blue extends Baseclass{
   constructor(x,y,width,height){
       super(x,y,width,height)
   }
   display(){
       fill(130,237,237);
       if(this.box.speed<3){
       super.display();
   }
   else{
      
       World.remove(world,this.box)
       push();
       this.visiblity = this.visiblity-5;
       tint(255,this.visiblity)
       pop();

   }
    }

}