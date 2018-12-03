pics = document.getElementById("pics");
createPicsHolders();
createLlamaImages ();

function createPicsHolders() {
    for(var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createLlamaImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
  for(var i = 0; i < pictureHolders.length; i++) {
      favoriet = document.createElement("div");
      favoriet.className = "favoriet";
      favoriet.id = "favoriet_" + (i+1);
      lamaPlaatje = document.createElement("img");
      lamaPlaatje.src = "pictures005/lama" + (i+1) + ".jpg";
      lamaPlaatje.id = (i+1);
      lamaPlaatje.addEventListener("click", function() {
          maakFavoriet(this.id);
      });
      pictureHolders[i].appendChild(favoriet);
      pictureHolders[i].appendChild(lamaPlaatje);
  }
}
function maakFavoriet(id) {
    console.log("Maak mij Favoriet! Het gaat om lama..." + id );
    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('../pictures005/hartje.png')";
}


//picsHolders maken
//picsHolder bevat een plaatje van een lama en een favorite symbool (hartje)

//lamaPlaatjes toevoegen aan picsHolders
//favoriteSymbools