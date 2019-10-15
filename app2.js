//****View */ class for the UI which contains methods

//creates/insert the HTML for the UI  [DISPLAY]

//clear fields method

//remove something/object



//controller combines UI and model
//event handler w/ function
//get values


//instantiate new class/object with variable name


//instantiate a new UI const ui = new UI()

//call relevant methods

//seperate event handler for removing/deleting


class Album {
    constructor(name, artist, yearReleased) {
        this.name = name;
        this.artist = artisit;
        this.yearReleased = yearReleased
    }
}

//instantiate
const beerbong = new Album ('beerbongs & bentley', 'Post Malone', 2018);
//console.log(newScientist); 

/* const scientists = [];
    function newScientist(name, field, birthYear, birthCountry, nobelWinner, image) {
        Scientists.push(new Scientist(name, field, birthYear, birthCountry, nobelWinner, image));
    } */

class UI {
    displayAlbum(e) {
   //ui.addScientisttoList //make it the button and add event listener
    //constructor(form, formName, formField, formBirthYear, formBirthCountry, formNobelWinner, addScientist) 
    let html = '<div class="display-fullAlbum"><div class="display-album">%album%</div><div class="display-artist">%artist%</div><div class="display-year">%year%</div><div class="remove-album"><p class="remove album">Remove Album &#10006;</p></div></div>';

    let newHtml = html.replace('%album%', userAlbum.value);
    newHtml = newHtml.replace('%artist%', userArtist.value);
    newHtml = newHtml.replace('%year', userYearReleased.value);
};
}

function init() {
    userAlbum.value = '';
    userArtist.value = '';
    userYearReleased.value = '';
  }
  
  init();
function removeAlbum(e) {
    if(e.target.parentElement.classList.contains('remove-fullAlbum')){
        e.target.parentElement.parentElement.remove();
        //console.log(e.target.parentElement);
    }
  }

 

//const newUI = new UI();

function eventListeners() {
    form.addEventListener('submit', displayScientist);
    form.addEventListener('submit', clearForm);
    display.addEventListener('click', removeScientist);
}
eventListeners();  


/* //Controller 
        let formField = '';
        let formAge = '';
        let formBirthCountry = '';
        let formNobelWinner = '';
        let formImage = '';
        
function eventListeners(){ 
    form.addEventListener('submit', displayScientist);
    form.addEventListener('submit', clearForm);
    display.addEventListener('click', removeScientist);
}
eventListeners(); 
}
*/

function displayScientist(e) {
    let html = `<div class="display-scientist">
        <div class="display-full-name">
            Albert Einstein
        </div>
        <div class="display-field">
            Theoretical Physics
        </div>
        <div class="display-age">
            140
        </div>
        <div class="display-birth-country">
            Austria
        </div>
        <div class="display-nobel>
            True
        </div>
        <div class="display-image">
            <img src="https://cdn.mos.cms.futurecdn.net/c7dppKDbG3JXuMfybV5tUX.jpg">
        </div>
        <div class="remove-scientist">
            <p class="remove-scientist">Remove Scientist &#10006;</p>
        </div>
    </div>`;

    let newHtml = html.replace('%full-name%', formName.value);
    newHtml = newHtml.replace('%field%', formField.value);
    newHtml = newHtml.replace('%age-today%', formAge.value);
    newHtml = newHtml.replace('%birth-country%', formBirthCountry.value);
    newHtml = newHtml.replace('%nobel%', formNobelWinner.value);
    console.log('is the event firing?');
    newHtml = newHtml.replace('%url%', formImage.value);
    display.insertAdjacentHTML('beforeend', newHtml);
    e.preventDefault();
}

function clearForm(e) {
    form.reset();
}

function removeScientist(e) {
    if (e.target.parentElement.classList.contains('remove-scientist')) {
        e.target.parentElement.parentElement.remove();
        //console.log(e.target.parentElement);
    }
}