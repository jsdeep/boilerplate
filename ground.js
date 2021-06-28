 class ground{
  constructor( x,y,w,h){
    let groundoptions={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,w,h,groundoptions);
    this.w=w;
    this.h=h;
    World.add(world,this.body);
  } 
  show(){
      var pos =this.body.position
  } 
  
 }


 