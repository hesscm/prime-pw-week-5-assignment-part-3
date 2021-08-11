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

function showCollection(collection) {
  console.log(collection.length);
  for (var i = 0; i < collection.length; i++) {
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}.`);
  }
}

console.log(addToCollection('No Roots', 'Alice Merton', 2016));
console.log(addToCollection('Master of Puppets', 'Metallica', 1986));
console.log(addToCollection('Nightmare', 'Avenged Sevenfold', 2010));
console.log(addToCollection('Little Voice', 'Sara Bareilles', 2007));
console.log(addToCollection('Wildfire', 'Rachel Platten', 2016));
console.log(addToCollection('Boston', 'Boston', 1976));


console.log(collection);
showCollection(collection);
