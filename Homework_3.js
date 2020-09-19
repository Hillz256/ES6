/*
  All men are mortal
  Socrates is a man
  Therefore, Socrates is mortal

*/
//Men object
const Men = { name: "Socrates", isMortal: true };

if (Men.name === "Socrates" && Men.isMortal === true) {
  console.log("Socrates is a man");
  console.log("Therefore, Socrates is mortal");
} else if (Men.name !== "Socrates" && Men.isMortal === true) {
  console.log(Men.name + " is a man");
  console.log("Therefore, " + Men.name + " is mortal");
} else {
  console.log("All are men are mortal");
  console.log("Therefore, " + Men.name + " is not a man");
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
