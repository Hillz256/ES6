/**
 * Assignment three
 * if statements and operators
 */

/**
 * All men are mortal
 * Socrates is a man
 * Therefore, Socrates is mortal
 */

const men = ["Nkurumah", "Mandela", "Gadafi", "Socrates", "Plato"];
const man = "Socrates";

if (men.length > 0) {
    const isMortal = true;
    if (men.indexOf(man) !== -1 && isMortal) {
        console.log("All men are mortal");
        console.log(man + " is a man");
        console.log("Therefore, " + man + " is mortal");
        console.log("\n");
    } else {
        console.log(man + " is not a man");
        console.log("\n");
    }
} else {
    console.log("There are no men listed");
    console.log("\n");
}

/*
    This cake is either chocolate or vanilla
    This cake is not chocolate
    Therefore, this cake is vanilla
*/

const cakes = ["vanilla", "chocolate"];
const cake = "vanilla"

if (cakes.length > 0 && (cake === cakes[0] || cake === cakes[1])) {
    if (!(cake === "chocolate")) {
        console.log("This cake is either chocolate or vanilla");
        console.log("This cake is not chocolate");
        console.log("Therefore, this cake is " + cake);
    } else {
        console.log("This cake is either chocolate or vanilla");
        console.log("This cake is not vanilla");
        console.log("Therefore, this cake is " + cake);
    }
} else {
    console.log("The cake object is either empty or " + cake + " is not a cake");
}
