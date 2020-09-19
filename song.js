/*
  The program has an object song that descirbes my favourite 
  song from my faviurite actor.
*/

var song = {
    title: "Crash",
  //Artist is an object that describes all the artist attributes
    artist: {
      //name object
        name: {
            first_name: "Usher",
            last_name: "Raymond IV",
        },
        age: 46,
        gender: "Male",
        Nationality: "American",
    },
  
  //Album on which the song belongs
    album: "Hard II love",
  
  //Year the song was released
    released: 2016,
  
  //Boolean attribute to check if the song was a single or belonged to an album
    single: false,
  
  //the writers array
    writters: ["Corey Latif Williams", "Usher Raymomnd IV", "Lee Stashenko", "Carlos St. John"],
  //song genre
    genre: "R&B/Soul",
  //song duration in seconds
    duration: 219,
  
  //function to loop through the writers array and print the song writers one at a time
    printWriters: function(){
      for(var i = 0; i < this.writters.length; i++){
        var writer = this.writters[i];
        console.log(" - " + writer);
      }
    },
}

//Outputting song details to the console
//checking the song was a single or not and out putting depending on the result
if(song.single === true){
  console.log(`The song ${song.title} was not on the album ${song.album} `)
}else{
  console.log("*******************************************");
  console.log("---Let me tell you about my favourite song---");
  console.log("*******************************************");
  console.log(`My favourite artist is ${song.artist.name.first_name} ${song.artist.name.last_name}`);
  console.log(`He is ${song.artist.gender} aged ${song.artist.age } yrs old and an ${song.artist.Nationality}`);
  console.log(`And my fovourite song is ${song.title} an ${song.genre } song that was released in ${song.released} off the album ${song.album}`);

  console.log("*******************************************");
  console.log(`The ${song.duration} second was written by: `);
  console.log("*******************************************");
  song.printWriters()  
}

