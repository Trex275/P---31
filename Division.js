class Divisions{
    constructor(x, y, w, h){
        var options = {
            isStatic: true
        }
        this.body = Bodies.Rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world. this.body);
    }
    
}