
/*
    What if you want to hide functionality?
    Well, just don't use 'this' keyword. Then the variable or the method will not be part of that object's properties or methods. Kinda like Java private
 */


//Constructor function
function Circle(radius, centerX, centerY) {
    //'this' keyword refers to the object created when the 'new' keywoard is used. 'new' creates the object and points 'this' to the new object.
    //otherwise, in the context of constructors, 'this' keyword refers to the global object. Window object when using browser, or
    this.radius = radius
    this.center = {
        x: centerX,
        y: centerY
    }

    //these are private variables, that can only be used inside this constructor function scope
    //they remain in memory as part of the 'closure'. Member methods can use them.
    let someX, someY;
    //this is a private function, that can only be used inside this constructor function scope
    //they remain in memory as part of the 'closure'. Member methods can use them.
    let distanceFromAxisCenter = function (){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };

    //this is a public method for every Circle instance
    this.area = function () {
        let whateverX, whatecerY; //these are inside the scope of this.area method, but they are erased every time
        //
        return Math.PI * Math.pow(this.radius, 2);
    }
    //no return statement in constructors
}


//auto invoked method bitch!
(() => {
    const circle = new Circle(3, 1, 1);
    console.log(`Area is ${circle.area()}`);
})();

module.exports = {Circle};