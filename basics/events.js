
const EventEmitter = require('events')

class Logger extends EventEmitter{

    log(messageToLog){
        console.log(messageToLog);
        //emitt an event that signals the logging
        this.emit('messageLoggedEmission', {id:1, dataText : "Some data related to emission"});
    }
}

module.exports = Logger; //imported at index.js


