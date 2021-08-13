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
  for (let i = 0; i < array.length; i++) {
    console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}.`);
  }
}

function findByArtist(artist) {
  let array = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      console.log('found artist');
      array.push(collection[i]);
    }
  }
  return array;
}

function search(searchObject) {
  /*
  -check object to see if it has any values(keys) with the Object.keys() method
   Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  -also check if the variable's constructor type is an objects
   Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
  */
  if (Object.keys(searchObject).length === 0 || searchObject.constructor != Object) {
    console.log('empty or missing object');
    return collection;
  }
  //create a new local array
  let newArray = [];
  //iterate through the collection array
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === searchObject.artist && collection[i].yearPublished === searchObject.yearPublished) {
      newArray.push({artist: searchObject.artist,
                     yearPublished: searchObject.yearPublished})
    }
  }
  if (newArray.length === 0) {
    console.log('no matches');
  }
  else {
    console.log('here are your results');
  }
  return newArray;
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
console.log(search({artist: 'Metallica', yearPublished: 1986}));
console.log(search({}));
console.log(search(56));
console.log(search({artist: 'Metallica', yearPublished: 1999}));
test = Object.keys(collection[0]);
console.log(test[0]);
if (test[0] === 'title') {
  console.log('success');
}
