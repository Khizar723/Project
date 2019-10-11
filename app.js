const album = []

const form = document.querySelector('#album-form'); //could also getElementById
const userName = document.querySelector('#name');
const userArtist = document.querySelector('#artist');
const userYearReleased = document.querySelector('#year');

/* function eventListeners(){
    form.addEventListener('submit', displayAlbum);
    display.addEventListener('click', removeAvenger);
    /* form.addEventListener('submit', function(){
       console.log('test');
   });  }*/

//eventListeners(); */

function eventListeners(){
  form.addEventListener('submit', displayAlbum);
  display.addEventListener('click', removeAlbum);
  /* form.addEventListener('submit', function(){
     console.log('test');
 });  */
}
eventListeners();

function displayAlbum(e) {
    let html = '<div class="display-fullAlbum"><div class="display-album">%album%</div><div class="display-artist">%artist%</div><div class="display-year">%year%</div><div class="remove-album"><p class="remove album">Remove Album &#10006;</p></div></div>';

    let newHtml = html.replace('%album%', userAlbum.value);
    newHtml = newHtml.replace('%artist%', userArtist.value);
    newHtml = newHtml.replace('%year', userYearReleased.value);

    //console.log('is the vent firing?');
    e.preventDefault();
    if(userAlbum.value === "") {
      alert('Album Missing')
    } else if (userArtist.value === "") {
      alert('Artist Missing')
    } else if (userYearReleased.value === "") {
      alert('No Year Released')
    }
}

function init() {
  userAlbum.value = '';
  userArtist.value = '';
  userYearReleased.value = '';
}

init();




class Album {
    constructor(name, artist, yearReleased) {
        this.name = name;
        this.artist = artisit;
        this.yearReleased = yearReleased
    }
}

function removeAlbum(e) {
  if(e.target.parentElement.classList.contains('remove-fullAlbum')){
      e.target.parentElement.parentElement.remove();
      //console.log(e.target.parentElement);
  }
}
