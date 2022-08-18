
const Logger = require('./basics/events');
const {Circle} = require("./oop/constructors");

const logger = new Logger();
//emit() is called inside Logger::log()
logger.on('messageLoggedEmission', (dataArgs) => {
   console.log(dataArgs);
});

logger.log('Some Message to Log');

const circle = new Circle(5, 1, 1);
logger.log(`Circle with radius 5 has an area of : ${circle.area()}`);