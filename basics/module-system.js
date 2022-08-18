

/*
 * GLOBAL JS OBJECTS
 *
 * There is no window global object in node (because there is no browser duh).
 * We have an object called 'global' instead. So, we can call all the functions bellow as
 *
 * global.methodCall()
 * instead of window.methodCall()
 *
 * or just methodCall()
 *
 */

//call a function after 1000 milliseconds with given args
// setTimeout((num1, num2) => {
//     console.log('%s + %d  = %f', 1, 2, `${num1 + num2}`);    //Last two are tick symbols, not singl or double quotes. Uset to evaluate an expression accessing the variables
// }, 1000, 1, 2);

// clearTimeout();

//Calls a function repetitively
// setInterval();
// clearInterval(); //stop function being called repetitively



/* EVERY JS file is considered a module. Variables and methods declared in that file/module are available only in that module/file
 *  If we need to use them someplace else, we need to import them
 * So we have at least one file/module. The one we call main file/module.
 *
 */

function addTwoNumbers(num1, num2){
    return num1 + num2;
}

function multiplyTwoNumbers(num1, num2){
    return num1 * num2;
}


/* This means make `addTwoNumbers` method visible to other files that can import it as addThemUp
 * Inside the caller module, we use require('./module-system.js') [or require('./module-system)]
 * './' indicates current directory if imported and exported are in the same directory.
 *  '../module-system' had module-system file been inside a parent folder
 *  './otherfoldername/module-system'
 */

// export as objects under custom names
// module.exports.addThemUp = addTwoNumbers;
// module.exports.multEmUp = multiplyTwoNumbers;

//export as methods
module.exports = {addTwoNumbers, multiplyTwoNumbers};


