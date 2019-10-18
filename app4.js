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
    constructor(name,maker, yearReleased) {
        this.name = name;
        this.maker = maker ;
        this.yearReleased = yearReleased;
    }
};




class UI {
    addAlbumToList(Album) {
        const display = document.querySelector('.display');

        let html = `<div class="display-album">
            <div class="display-album">
            %album%
            </div>
            <div class="display-artist">
            %artist%
            </div>
            <div class="display-year">
            %year%
            </div>
            <div class="remove-album">
                <p class="remove-album">Remove Album &#10006;</p>
            </div>
        </div>`;
        const newAlbum = new Album(document.querySelector('#album').value, document.querySelector('#artist').value, document.querySelector('#year').value)
        let newHtml = html.replace('%album%', newAlbum.name);
        newHtml = newHtml.replace('%artist%', newAlbum.maker);
        newHtml = newHtml.replace('%year', newAlbum.yearReleased);
        display.insertAdjacentHTML('beforeend', newHtml);
        Album.preventDefault()
    }

    //clearForm(form) {
        //form.reset();
   // }

    removeAlbum(e) {
        if (e.target.parentElement.classList.contains('remove-album')) {
            e.target.parentElement.parentElement.remove();
            //console.log(e.target.parentElement);
        }
    };
}
function addForm() {
    const name = document.getElementById('album').value;
    const maker = document.getElementById('artist').value;
    //const maker = document.getElementById('artist').value;
    const yearReleased = document.getElementById('year').value;
  

    const album = new Album(name, maker, yearReleased);
    const ui = new UI();
    console.log(ui);

    ui.addAlbumToList(album);
   // ui.clearForm();
    Album.preventDefault;
}



document.getElementById("album-form").addEventListener('submit', addForm);

function eventListeners() {
    const ui = new UI;
    const form = document.querySelector('#album-form');
    form.addEventListener('submit', ui.addAlbumToList);
    display.addEventListener('click', ui.removeAlbum)
}

eventListeners()