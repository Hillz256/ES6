
/*
    var declarations are globally scoped if declared outside a function and function scoped when declared within a function while
    let and const declarations are block scoped.

    var declarationa can be re-declared and updated,
    let declarations can only be updated,
    and const declarations can neither be updated or re-declared.

    Hoisting is a mechanism by which variable and function declarations are moved to the top of their scope before code execution.
    var declarations are initialized with undefined while let and const declaration are not initialized and therefore trying to use 
    them gives a reference error.
*/

//Example using var
var number = 3;
if(number > 2){
    var say = "number is " + number;
}
else{
    //Updating and re-declaring var
    var number = 4; //re-declaring and updating number
    say = "new number is " + number; // new number is 4
}
console.log(say) //number is 3

//Example using let
let number = 3;
let say = "I print numbers" // scoped globally
if(number > 2){
    let say = "number is " + number; // scoped to the if block
    console.log(say) // number is 3
}
console.log(say) // I print numbers - 

//Updating let
let say = "New number" //error: identifier already declared
say = "I am the new number" // I am the new number

//re-declaring let
let name = "Phred"
let name = "Martinar"// Error: identifier name already declared

//Example using const
//const values remain the same within the scope they are declared in.
const age = 14;
//updating const give and error.
age = 20; // error: assignment to a constant

const name = {
    first_name = "Joy",
    last_name = "Nakusi"
}// declares and intialises the name dictionary.
