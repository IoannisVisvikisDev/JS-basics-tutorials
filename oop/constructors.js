
//Another way (other than factories) is using constructors

//Naming convention for constructors is to use Upper case first Letter
function Circle(radius, centerX, centerY) {
    //'this' keyword refers to the object created when the 'new' keywoard is used. 'new' creates the object and points 'this' to the new object.
    //otherwise, in the context of constructors, 'this' keyword refers to the global object. Window object when using browser, or
    this.radius = radius
    this.center = {
        x: centerX,
        y: centerY
    }

    this.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    }
    //no return statement in constructors
}


//Auto called function
(() => {
    const circle = new Circle(2, 0, 0)
    console.log(`Area of circle with a radius of 2 is : ${circle.area()}`);
})();


//Auto called function
(function (){
    const circle = new Circle(4, 0, 0)
    console.log(`Area of circle with a radius of 4 is : ${circle.area()}`);
})();


(() => {
    const circle = new Circle(3);

    //check some property is part of the object
    if('radius' in circle) console.log(`Circle has a radius property : ${circle['radius']}`);

    console.log("Iterating through all properties of circle")
    for(let key in circle){
        //check property is type of something
        if(typeof circle[key] === 'function') continue;
        console.log(`Key is ${key} and value is ${circle[key]}`);
    }
})();

module.exports = {Circle};
