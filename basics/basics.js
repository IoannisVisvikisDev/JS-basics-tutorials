
//don't use var for variables. They had fucked up
let age = 45; //Can change
const name = "Giannis"; //Doesn't change
const amMale = true;
//supports null and undefined

//Value Types
//String, Booelean, Number (all arithmetics are numbers, nno distinctions here), undefined.
//Reference Types
//Objects, null, Array, Function etc

console.log("Type of name is : " + typeof name);
console.log("Type of age is : " + typeof age);
console.log("Type of amMale is : " + typeof amMale);;

console.log("I am " + name + " and I am " + age + " years old");
console.log('2 == \'2\' returns ' + (2 == '2'));
console.log('2 === \'2\' returns ' + (2 === '2'));
console.log('2 != \'2\' returns ' + (2 != '2'));
console.log('2 !== \'2\' returns ' + (2 !== '2'));

console.log("===== OBJECTS =====");
let person = {
    name : "Giannis",
    age : 45
};

//Dot notation
person.name = "Mary";
//Bracket notation
person['name'] = "Joe";

console.log(person.name);
console.log(person);

//we can add or delete properties at runtime (what a BS)
person.lastName = "Papariadis";
person['address'] = "Stou diaolou ti mana"; //brackets are useful when adding/removing dynamically and we do not know the name of the property in advance


//or delete properties at runtime
delete person.address;

console.log(person);

console.log("===== ARRAYS =====");

let colors = ['green', 'red'];
console.log(colors[0]);
colors.push('black');
colors.push('purple');
let tailColor = colors.pop();
console.log("Popped last element : " + tailColor);
console.log(colors);


console.log("===== DICTS =====");

let map = new Map();
map.set(1, "One");
map.set("Two", 2);
map.set("Red", ()=>{console.log("I am a lamda")});
map[3] = "Three";

map.forEach(value => {
    console.log(value);
});

console.log("===== FUNCTIONS =====");

function add(num1, num2){
    return num1 + num2;
}

console.log(add(1, 2));

let greetings = function greet(name){
    console.log("Hello " + name);
};

function notDoesAll(){
    greetings("Giorgos");
    console.log(greetings("Kostas"));
    return;
    console.log("Malakas");
}

notDoesAll();


