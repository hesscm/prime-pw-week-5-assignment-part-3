console.log('***** Music Collection *****')
//Outside sources for search function:
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor




let collection = []; //create global collection array
main(); //run the tests

//main function to perform testing, created for organization and code cleanup
function main() {

  console.log('----ADD TO COLLECTION REQUIREMENT----');
  //add 6 albums to collection array with Title, Artist, Year Published
  console.log(addToCollection('No Roots', 'Alice Merton', 2016));
  console.log(addToCollection('Master of Puppets', 'Metallica', 1986));
  console.log(addToCollection('Nightmare', 'Avenged Sevenfold', 2010));
  console.log(addToCollection('Little Voice', 'Sara Bareilles', 2007));
  console.log(addToCollection('Wildfire', 'Rachel Platten', 2016));
  console.log(addToCollection('Boston', 'Boston', 1976));
  //extra album to test multiple albums by 1 artist
  console.log(addToCollection('...And Justice For All', 'Metallica', 1988));
  console.log(collection);   //print collection to the console

  console.log('----SHOW COLLECTION REQUIREMENT----');
  showCollection(collection); //pass collection array into function

  console.log('----FIND BY ARTIST REQUIREMENT----');
  console.log(findByArtist('Metallica')); //find an artist that exists in collection
  console.log(findByArtist('Green Day')); //find an artist that does not exist in collection

  console.log('----SEARCH FUNCTION STRETCH GOAL----');
  console.log(search({}));
  //search with value that is not an object
  console.log(search('not an object'));
  //search by artist and year that exists in collectionKeys
  console.log(search({artist: 'Metallica', yearPublished: 1986}));
  //search with artist that does exist and year that does not
  console.log(search({artist: 'Metallica', yearPublished: 1999}));
  //search with empty object

  //Adding 2 tracks per album
  console.log('----TRACKS ARRAY STRETCH GOAL----');
  //search for the album and then insert the track name and track duration
  //Adding 2 tracks per album
  addTracksToAlbum('No Roots', 'No Roots', '3:58');
  addTracksToAlbum('No Roots', 'Jealousy', '3:40');
  addTracksToAlbum('Master of Puppets', 'Battery', '5:12');
  addTracksToAlbum('Master of Puppets', 'Master of Puppets', '5:12');
  addTracksToAlbum('Nightmare', 'Welcome to the Family', '4:08');
  addTracksToAlbum('Nightmare', 'Buried Alive', '6:44');
  addTracksToAlbum('Little Voice', 'Love Song', '4:19');
  addTracksToAlbum('Little Voice', 'Vegas', '4:07');
  addTracksToAlbum('Wildfire', 'Stand By You', '3:39');
  addTracksToAlbum('Wildfire', 'Better Place', '2:56');
  addTracksToAlbum('Boston', 'More Than a Feeling', '4:46');
  addTracksToAlbum('Boston', 'Foreplay/Long Time', '7:47');

  showCollection(collection);
  search({track: 'Buried Alive'});
}

//Add a track and track duration to a specific album
function addTracksToAlbum(albumName, trackName, duration) {
  //iterate through the collection array
  for (var i = 0; i < collection.length; i++) {
    //if the album matches, add the track title and duration to the tracks array
    if (albumName === collection[i].title) {
      collection[i].tracks.push({title: trackName, duration: duration});
    }
  }
}

//Add an album to the collection array. Take in arguments
//title, artist, and the year published.
function addToCollection(title, artist, yearPublished, trackName, trackDuration) {
  let newAlbum = { //new album object
    //add property values
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: [] //added for tracks stretch goal
  }
  collection.push(newAlbum); //add album object to collection array
  return newAlbum; //return the album object
}

//Show an entire collection in the console.
//An array is taken as an argument, and formatted and logged in the console.
function showCollection(array) {
  console.log('Number of items in collection: ' + array.length); //log the amount of keys in the array
  //iterate through the array
  for (let i = 0; i < array.length; i++) {
    //if there are no tracks, print this
    if (array[i].tracks.length === 0) {
      //print each value, formatted according to the requirements
      console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}.`);
    }
    //else, print the tracks as well
    else {
      console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}:
1. ${array[i].tracks[0].title}: ${array[i].tracks[0].duration}
2. ${array[i].tracks[1].title}: ${array[i].tracks[1].duration}`);

    }
  }
}

//Find an album in the collection by artist.
//If the artist has more than one title, return each title.
function findByArtist(artist) {
  let array = []; //create local array
  for (let i = 0; i < collection.length; i++) { //iterate through collection
    if (collection[i].artist === artist) { //if match is found...
      array.push(collection[i]); //add the album to the local array
    }
  }
  //console clarity to alert if artists were found
  if (array.length === 0) {
    console.log('No artists found.');
  }
  else {
    console.log('Artists found: ');
  }
  return array; //return the search results
}

//Pass through an object and see if a match exists. ONLY returns results with
//searches for artist AND year published. I tried to make this fully modular
//but it was very difficult to account for the endless input possibilities.
//This function can also identify if the object is empty or if the argument
//is not an object.
function search(searchObject) {


  if (searchObject.track === 'Buried Alive') {
    console.log('woot');
  }
  //check if the object has keys(properties) or if the argument is not an object
  if (Object.keys(searchObject).length === 0 || searchObject.constructor != Object) {
    //log confirmation that nothing was found to the console
    console.log('Object is either empty or the argument is not an object.');
    return collection; //return the entire album collection
  }

  //create a new local array
  let newArray = [];
  //iterate through the collection array
  for (let i = 0; i < collection.length; i++) {
    //check to ensure artist AND yearPublished match
    if (collection[i].artist === searchObject.artist &&
        collection[i].yearPublished === searchObject.yearPublished) {
      //add the found albums to the local array
      newArray.push(collection[i]);
    }

    /*--------------HELP---------------*/
    //this works and logs the correct tracks...
    //console.log(collection[1].tracks[0]);
    //but this doesn't, and I have no idea why. property is returned as undefined
    //console.log(collection[1].tracks[0].title);


    //if there is a match, push the whole album to the new array
    // if (searchObject.track === collection[i].tracks[0].title){
    //    console.log('test successful');
    //    newArray.push(collection[i]);
    // }
   /*-------------END HELP--------------*/
  }
  //console clarity to alert if results were found
  if (newArray.length === 0) {
    console.log('No search results found.');
  }
  else {
    console.log('Here are your results:');
  }
  return newArray; //return the array either empty or with results
}
