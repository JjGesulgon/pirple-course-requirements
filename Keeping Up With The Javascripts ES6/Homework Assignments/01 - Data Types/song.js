/*
  This is a javascript file that shows the details of my Favorite Song
*/

// Data Declaration
var title = "The Beginning";
var genre = ["Hard Rock", "Post-Hardcore"];
var artist = {
  name: "One Ok Rock",
  isBand: true,
  members: ["Takahiro Moriuchi", "Toru Yamashita", "Ryota Kohama", "Tomoya Kanki"],
  isJapanese: true,
};
var label = "A-Sketch";
var songwriter = "Takahiro Moriuchi";
var lengthInSeconds = 296;


// Console Output
console.log("Title: " + title);
console.log("Genre: " + genre);
console.log("Artist: " + artist.name);
console.log("Is the artist a band? " + artist.isBand);
console.log("Band Members: " + artist.members.join(", "))
console.log("Is the band Japanese? " + artist.isJapanese);
console.log("Label: " + label);
console.log("Songwriter: " + songwriter);
console.log("Length in Seconds: " + lengthInSeconds);