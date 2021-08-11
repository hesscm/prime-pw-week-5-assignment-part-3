console.log('***** Music Collection *****')

let collection = [];


function addToCollection(title, artist, yearPublished) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(newAlbum);
  return newAlbum;
}

function showCollection(array) {
  console.log(array.length);
  for (var i = 0; i < array.length; i++) {
    console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}.`);
  }
}

function findByArtist(artist) {
  let array = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      console.log('found artist');
      array.push(collection[i]);
    }
  }
  return array;
}

console.log(addToCollection('No Roots', 'Alice Merton', 2016));
console.log(addToCollection('Master of Puppets', 'Metallica', 1986));
console.log(addToCollection('Nightmare', 'Avenged Sevenfold', 2010));
console.log(addToCollection('Little Voice', 'Sara Bareilles', 2007));
console.log(addToCollection('Wildfire', 'Rachel Platten', 2016));
console.log(addToCollection('Boston', 'Boston', 1976));
console.log(addToCollection('...And Justice For All', 'Metallica', 1988));



console.log(collection);
showCollection(collection);
console.log(findByArtist('Metallica'));
console.log(findByArtist('Green Day'));
