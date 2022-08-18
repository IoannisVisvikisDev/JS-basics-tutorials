/* Import `addTwoNumbers` as addThemUp from defining file midule-system.js, We use require('./module-system.js')
 * [or require('./module-system)]
 * './' indicates current directory if imported and exported are in the same directory.
 *  '../module-system' had module-system file been inside a parent folder
 *  './otherfoldername/module-system'
 */

// if where exported as objects under custom names
// const { addThemUp, multEmUp} = require('./module-system');

//imported as function names
const { addTwoNumbers, multiplyTwoNumbers } = require('./module-system');

//Had we used './path' or '../path' the compiler would have searched for a file maned path.js within my application.
//It now just loads the default path module of Javascript
const path = require('path');
const os = require('os');
const fs = require('fs'); //file system



console.log(addTwoNumbers(1, 2));
console.log(multiplyTwoNumbers(3, 2));

console.log("==== PATH RELATED INFO ====");
let pathObj = path.parse(__filename);
console.log(pathObj);

console.log("==== OS RELATED INFO ====");
let totalMemory = os.totalmem();
let freeMemory = os.freemem();
console.log(`Total memory = ${totalMemory} Free memory = ${freeMemory}`); //again, these are ticks, not quotes

console.log("==== FileSystem RELATED INFO ====");
console.log(fs.readdir('./', (error, fileNames) => {
    if(error !== null) {
        console.log(error.message);
        return;
    }

    console.log(fileNames);

})); //always prefer these from methodsync in real world apps


//self-executing anonymous function.
(function(){
    console.log('Hello from auto-invoked function')
})();

