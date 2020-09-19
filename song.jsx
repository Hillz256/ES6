var song = {
  title: "Crash",
  artist: {
    name: {
      first_name: "Usher",
      last_name: "Raymond IV",
    },
    age: 46,
    gender: "Male",
    Nationality: "American",
  },
  single: false,
  album: "Hard II love",
  released: 2016,
  writers: [
    "Corey Latif Williams",
    "Usher Raymond IV",
    "Lee Stashenko",
    "Carlos St. John",
  ],
  genre: "R&B/Soul",
  duration: 219,
  printWriters: function () {
    for (var i = 0; i < this.writers.length; i++) {
      var writer = this.writers[i];
      document.write(writer + "<br>");
    }
  },
};

document.write(song.artist.name.last_name);
document.write("<br>" + song.writers[2]);
document.write("<br>" + song.genre);
document.write("<br>");
document.write("<br>");
document.write(
  `The song ${song.title} was released by ${song.artist.name.first_name} ${song.artist.name.last_name} in ${song.released} <br>`
);
document.write(
  `The song is ${song.duration} seconds long written by ${song.writers}`
);
document.write("<br>");
document.write("<br>");
