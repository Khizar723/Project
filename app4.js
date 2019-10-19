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
    constructor(name,maker, year) {
        this.name = name;
        this.maker = maker ;
        this.year = year;
    }
};




class UI {
    addAlbumToList(album) {
        const display = document.querySelector('.display');

        let html = '<div class="display-album"><div class="display-name">%name%</div><div class="display-maker">%maker%</div><div class="display-year">%year%</div><div class="remove-album"><p class="remove-album">Remove Album &#10006;</p></div></div>;'
        const newAlbum = new Album(document.querySelector('#name').value, document.querySelector('#maker').value, document.querySelector('#year').value)
        let newHtml = html.replace('%name%', newAlbum.name);
        newHtml = newHtml.replace('%maker%', newAlbum.maker);
        newHtml = newHtml.replace('%year%', newAlbum.year);
        document.querySelector('.display').insertAdjacentHTML('beforeend', newHtml);
        album.preventDefault()
    }

   /*   clearFields(){
        document.getElementById('name').value === '';
        document.getElementById('maker').value === '';
        document.getElementById('year').value === '';
    }  */

    // init() {
    //     document.getElementById('name').value === '';
    //     document.getElementById('maker').value === '';
    //     document.getElementById('year').value === '';
    //   }



    removeAlbum(e) {
        if (e.target.parentElement.classList.contains('remove-album')) {
            e.target.parentElement.parentElement.remove();
            //console.log(e.target.parentElement);
        }
    };
}
  
function addForm() {
    const name = document.getElementById('name').value;
    const maker = document.getElementById('maker').value;
    //const maker = document.getElementById('artist').value;
    const year = document.getElementById('year').value;
  

    const album = new Album(name, maker, year);
    const ui = new UI();
    console.log(ui);
    ui.addAlbumToList(album);
    album.preventDefault();
}

document.getElementById("album-form").addEventListener('submit', addForm);

function eventListeners() {
    const ui = new UI;
    const form = document.querySelector('#album-form')
    form.addEventListener('submit', ui.addAlbumToList)
    display.addEventListener('click', ui.removeAlbum)
}

eventListeners()
