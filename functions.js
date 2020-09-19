/*
  All men are mortal
  Socrates is a man
  Therefore, Socrates is mortal

*/

function Men(name) {
  this.name = name;

  //boolean variable
  this.isMan = true;
}

console.log("*********************************************************");
console.log("Example One");
console.log("*********************************************************");

//creating instances of Men
let socrates = new Men("Socrates");
if (socrates.isMan) {
  console.log(socrates.name + " is man");
  console.log("Therefore, " + socrates.name + " is mortal");
} else {
  console.log(socrates.name + " is not a man");
  console.log("Therefore, " + socrates.name + " is not mortal");
}

/*
  Example two
  This cake is either vanilla or chocolate.
    This cake is not chocolate.
    Therefore, this cake is vanilla.
*/
//Creating the cake object
function Cake(sweetness) {
  this.sweetness = sweetness;
  //Assigning cake type using sweetness
  if (this.sweetness > 0 && this.sweetness <= 5) {
    this.type = "chocolate";
  } else if (this.sweetness > 5 && this.sweetness <= 10) {
    this.type = "vanilla";
  } else {
    this.type = "Invalid";
  }
}
console.log("*********************************************************");
console.log("Example Two");
console.log("*********************************************************");

//Instance of the Cake Object
const myCake = new Cake(4); //chocolate cake


//taking an instance of cake1
let cakeType = myCake.type;

if (cakeType !== "chocolate" && cakeType !== "Invalid") {
  console.log("This cake is not chocolate");
  console.log("Therefore, this cake is vanilla");
} else if (cakeType !== "vanilla" && cakeType !== "Invalid") {
  console.log("This cake is not vanilla");
  console.log("Therefore, this cake is chocolate");
} else {
  console.log("Invalid cake type, Sweetness must range from 1 to 10!");
}
