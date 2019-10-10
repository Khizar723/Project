const albuma = []

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



function displayAlbum(e) {
    let html = '<div class="display-avenger"><div class="display-alias">%alias%</div><div class="display-powers">%powers%</div><div class="display-name">%name%</div><div class="first-appearance">%years%</div><div class="display-image"><img src="%url%" alt=""></div><div class="remove-avenger"><p class="remove-avenger">Remove Avenger &#10006; </p></div></div>';

    let newHtml = html.replace('%alias%', userAlias.value);
    newHtml = newHtml.replace('%powers%', userPowers.value);
    newHtml = newHtml.replace('%name%', userFullName.value);
    newHtml = newHtml.replace('%years%', userFirstAppearance.value);
    newHtml = newHtml.replace('%url%', userImage.value);
    display.insertAdjacentHTML('beforeend', newHtml);
    //console.log('is the vent firing?');
    e.preventDefault();
    if(userAlias.value === "") {
      alert('Alias Missing')
    } else if (userPowers.value === "") {
      alert('Powers Missing')
    } else if (userFullName.value === "") {
      alert('No Name')
    } else if (userFirstAppearance.value === "") {
      alert('No First Appearence')
    } else if (userImage.value === "") {
      alert('No Image')
    }
    
}




class Album {
    constructor(name, artist, yearReleased) {
        this.name = name;
        this.artist = artisit;
        this.yearReleased = yearReleased
    }
}