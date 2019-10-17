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
    document.querySelector(".display").insertAdjacentElement('beforeend', newHtml);
};

function removeAlbum(e) {
    if(e.target.parentElement.classList.contains('remove-fullAlbum')){
        e.target.parentElement.parentElement.remove();
        //console.log(e.target.parentElement);
    }
  }

function init() {
    userAlbum.value = '';
    userArtist.value = '';
    userYearReleased.value = '';
  }
  


}

init()

 

//const newUI = new UI();

function eventListeners() {
    form.addEventListener('submit', displayScientist);
    form.addEventListener('submit', clearForm);
    display.addEventListener('click', removeScientist);
}

const title = document.getElementById('album').value

console.log(title)
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
    let html = '<div class="display-fullAlbum"><div class="display-album">%album%</div><div class="display-artist">%artist%</div><div class="display-year">%year%</div><div class="remove-album"><p class="remove album">Remove Album &#10006;</p></div></div>';

    let newHtml = html.replace('%album%', userAlbum.value);
    newHtml = newHtml.replace('%artist%', userArtist.value);
    newHtml = newHtml.replace('%year', userYearReleased.value);

    
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