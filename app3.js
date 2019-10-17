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
    constructor(album, artisit, yearReleased) {
        this.album = album;
        this.artist = artist;
        this.yearReleased = yearReleased;
    }
};

//instantiate
//const Einstein = new Scientist('Albert Einstein', 'Theoretical Physics', 2018, 'Austria', true);
//console.log(newScientist); 

class UI {
    addAlbumToList(album) {
        const display = document.querySelector('.display');

        let html = '<div class="display-fullAlbum"><div class="display-album">%album%</div><div class="display-artist">%artist%</div><div class="display-year">%year%</div><div class="remove-album"><p class="remove album">Remove Album &#10006;</p></div></div>';

        let newHtml = html.replace('%album%', userAlbum.value);
        newHtml = newHtml.replace('%artist%', userArtist.value);
        newHtml = newHtml.replace('%year', userYearReleased.value);
        display.insertAdjacentHTML('beforeend', newHtml);

    e.preventDefault();
    if(userAlbum.value === "") {
      alert('Album Missing')
    } else if (userArtist.value === "") {
      alert('Artist Missing')
    } else if (userYearReleased.value === "") {
      alert('No Year Released')
    }

    clearFields(){
        document.getElementById("album").value = "";
        document.getElementById("artist").value = "";
        document.getElementById("year").value = "";
    }
    removeAlbum(e) {
        if (e.target.parentElement.classList.contains('remove-album')) {
            e.target.parentElement.parentElement.remove();
            //console.log(e.target.parentElement);
        }
    };
}

//put the following into the controller--separate function with an event listener
document.getElementById("form").addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const field = document.getElementById('field').value;
    const birthYear = document.getElementById('birthYear');
    const birthCountry = document.getElementById('birthCountry');
    const nobelWinner = document.getElementById('nobelWinner');
    const image = document.getElementById('image');

    const Scientist = new Scientist(name, field, birthYear, birthCountry, nobelWinner, image);

    const UI = new UI();
    console.log(ui);

    ui.addScientistToList(scientist);
    ui.clearForm();
    e.preventDefault;
});

/* function eventListeners() {
    form.addEventListener('submit', displayScientist);
    form.addEventListener('submit', clearForm);
    display.addEventListener('click', removeScientist);
}
eventListeners();   */

/*
function eventListeners(){
    form.addEventListener('submit', displayScientist);
    form.addEventListener('submit', clearForm);
    display.addEventListener('click', removeScientist);
}
eventListeners();
}
*/