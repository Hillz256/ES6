/*
Example one

All men are mortal
Socrates is a man
Therefore, Socrates is a man
*/
//Creating the Men Object
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

//Instances of the Cake Object
const cake1 = new Cake(2); //chocolate
const cake2 = new Cake(8); //vanilla

//taking an instance of cake1
let cakeType = cake1.type;

//checks if the cake types are both valid

if (cake1.type !== "Invalid" && cake2.type !== "Invalid") {
  //checking to make sure the cake types are not the same

  if (cake1.type !== cake2.type) {
    //checking for the cake type as specified by the sweetness assigned

    if (cakeType === cake2.type) {
      console.log("This cake is not a " + cake1.type + " cake");
      console.log("Therefore, this cake is a " + cake2.type + " cake");
    } else {
      console.log("This cake is not a " + cake2.type + " cake");
      console.log("Therefore, This cake is a " + cake1.type + " cake");
    }
  } else {
    console.log(
      "Cake one and Cake two are both " +
        cake1.type +
        ". Note, they can't be the same!"
    );
  }
} else {
  //checking for which cake type in particular is not valid.
  if (cake1.type === "Invalid") {
    //checking cake two type, if invalid then both are invalid
    if (cake2.type === "Invalid") {
      console.log("Both cake one and cake two types are invalid");
    } else {
      //if only one is invalid, then we output the sweetness
      console.log(
        "Cake one Sweetness can not be " +
          cake1.sweetness +
          ", Choose sweetness from 1 - 10"
      );
    }
  } else {
    console.log(
      "Cake two sweetness can not be " +
        cake2.sweetness +
        ", Choose sweetness from 1 - 10"
    );
  }
}
