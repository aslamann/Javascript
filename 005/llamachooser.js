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

      lamaPlaatje = document.createElement("img");
      lamaPlaatje.src = "pictures005/lama" + (i+1) + ".jpg";
      pictureHolders[i].appendChild(lamaPlaatje);
  }
}

//picsHolders maken
//picsHolder bevat een plaatje van een lama en een favorite symbool (hartje)

//lamaPlaatjes toevoegen aan picsHolders
//favoriteSymbools