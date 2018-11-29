pics = document.getElementById("pics");
createPicsHolders();

function createPicsHolders() {
    for(var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "llamapicture";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}


//picsHolders maken
//picsHolder bevat een plaatje van een lama en een favorite symbool (hartje)

//lamaPlaatjes toevoegen aan picsHolders
//favoriteSymbools