class Album{
    constructor(name, maker, year) {
        this.name = name;
        this.maker = maker;
        this.year = year;
    }
}

class UI {
    addAlbumToList(album) {
        const display = document.querySelector('.display');

        let html = '<div class="display-fullAlbum"><div class="display-album">%name%</div><div class="display-artist">%maker%</div><div class="display-year">%year%</div><div class="remove-album"><p class="remove album">Remove Album &#10006;</p></div></div> '
        let newHtml = html.replace('%name%', album.name);
        newHtml = newHtml.replace('%maker%', album.maker);
        newHtml = newHtml.replace('%year%', album.year);
        document.querySelector('.display').insertAdjacentHTML('beforeend', newHtml);
    }

    if(album.name.value === "") {
        alert('Album Missing')
      } else if (album.maker.value === "") {
        alert('Artist Missing')
      } else if (album.year.value === "") {
        alert('No Year Released')
      }
    clearFields(){
        document.getElementById('name').value = '';
        document.getElementById('maker').value = '';
        document.getElementById('year').value = '';
    }

    deleteAlbum(target) {
        if(target.className === 'remove-album') {
            target.parentElement.remove();
        }
    }


//Event Listener for Album
document.getElementById('form').addEventListener('submit', function(e){
    //Get Values
    const title = document.getElementById('name').value;
    const artist = document.getElementById('maker').value;
    const url = document.getElementById('year').value;

    //inmstantiate new album
    const album = new Album(name, maker, year);
    //console.log(album);

    const ui = new UI();
    console.log(ui);

    ui.addAlbumToList(album);

    ui.clearFields();

    e.preventDefault();
});

//delete

document.querySelector('.display').addEventListener('click', function(e){
    const ui = new UI();
    
    ui.deleteAlbum(e.target);

    ui.clearFields();

    e.preventDefault();
})