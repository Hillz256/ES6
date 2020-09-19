
song.printWriters();
if(this.single === true){
    this.album = null;
}

let song = function(title, single, album, yrReleased, genre, writers, duration){
    this.title = title;
    this.single = single;
    this.album = album;
    this.yrReleased = yrReleased;
    this.genre = genre;
    this.writers = writers;
    this.duration = duration;

    this.artist = function(first_name, last_name, age, gender, nationality, stillSinging){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
        this.stillSinging = stillSinging; 

    }
}
