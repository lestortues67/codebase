// Source : 
// Date : 07/02/2020
// Auteur : Christian Doriath
// Dossier : /Python34/MesDEv/Flask/Flask_JS_BASE_myLib
// Fichier : eventsFileManager.js
// Description : Création d'un élèment 'table'

// Mot cles : 

function eventManager(event){
    // Exécuté pour les EVENTS !

    if (event.target.nodeName === 'TR') {
        // 'pointer' est l'élément TR sur lequel 'event' est déclenché
    }
    if(event.type=='blur'){
        console.log("Je quitte : "+event.target.id+" "+Date.now());    
    }
    if(event.type=='keydown'){
        var nomTouche = event.key;
        if(nomTouche === "ArrowDown" || nomTouche === "Enter" ){
            if (pointer.nextSibling.nextElementSibling==null){
                //impossible de passer à une TR suivante, elle n'existe PAS
                console.log("No nextTr ! "+Date.now());
            }
            else{
                // On enlève la couleur de fond sur la TR active lors de l'event :
                pointer.classList.remove(bgColor);
                // On détermine quelle est la nouvelle TR active : 
                var nextTr = pointer.nextSibling.nextElementSibling
                // On envoie l'ID de la nouvelle vers une f_ externe 'eventFunction'  :
                eventFunction(nextTr.id);
                // On passe le focus à la nouvelle TR :
                nextTr.focus();
                // On applique la couleur de fond sur la nouvelle TR active :
                nextTr.classList.add(bgColor);
                }
            }
            if (nomTouche === "ArrowUp") {
                if (pointer.previousSibling.previousElementSibling==null){
                    //impossible de passer à une TR suivante, elle n'existe PAS
                    console.log("No previousTr ! "+Date.now());
                }
                else{// On enlève la couleur de fond sur la TR active lors de l'event :
                    pointer.classList.remove(bgColor);
                    // On détermine quelle est la nouvelle TR active : 
                    var previousTr = pointer.previousSibling.previousElementSibling
                    // On envoie l'ID de la nouvelle vers une f_ externe 'eventFunction'  :
                    eventFunction(previousTr.id);
                    // On passe le focus à la nouvelle TR :
                    previousTr.focus();
                    // On applique la couleur de fond sur la nouvelle TR active :
                    previousTr.classList.add(bgColor);
                }
            }
        }
    event.preventDefault();    
}

