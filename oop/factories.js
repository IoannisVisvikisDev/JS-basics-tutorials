

//I can create an object like this

const circle1 = {
    radius : 1,
    centre : {
        x : 0,
        y : 0
    },
    area : function (){
        return Math.PI * Math.pow(this.radius, 2);
    }
};

//And another circle
const circle2 = {
    radius : 2,
    centre : {
        x : 1,
        y : 1
    },
    area : function (){
        return Math.PI * Math.pow(this.radius, 2);
    }
};


//Better yet, use a Factory function for creting these objects
function createCircle(radius, centerX, centerY) {
    return {
        radius: radius,
        centre: {
            x: centerX,
            y: centerY
        },
        area : function () {
            return Math.PI * Math.pow(this.radius, 2);
        }
    }
}


let circle3 = createCircle(3, 2, 2);

console.log(circle3.area());
