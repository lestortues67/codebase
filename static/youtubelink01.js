// 30/03/2023
// Dossier : /Flask_codebase
// Fichier : youtubelink01.js
// Objet   : Création par copier/coller d'un lien vers une vidéo youtube
// Mot clé : 



// Fichier : youtubelink01.js

function eventManager(p_event){
    p_event.preventDefault()
    p_event.stopPropagation();
    
    if(p_event.type=="paste"){
        console.log("coller !!")
        var texte = p_event.clipboardData.getData("text")
        // requete vers notre serveur avec fetch pour envoyer l'URL de la vidéo youtube

        // les informations 

    }
}
addEventListener("paste",eventManager,false)//"paste" = lien est coller ? 

var liste = []

async function mesData(){
    const response2 = await fetch('/youtubeApiTitle');
    let mesDataPapa2 = await response2.json();
    //console.log("2222:",mesDataPapa2)
    console.log(mesDataPapa2)
    liste.push(mesDataPapa2)

    // for (var i = 0; i < mesDataPapa2.length; i++) {
    //  liste.push(mesDataPapa2[i])
    // }

}

// https://codepen.io/jackocnr/pen/ezBKVQ
var t = "Jeon Jungkook"


function copyDiv(){
    var d = document.getElementById("divACopier")
    var url = "https://www.youtube.com/watch?v=170Mx8KuURM"
    var titre = "GIT est le roi"
    var newDiv = d.cloneNode(true);
    newDiv.id = "newDiv01"
    newDiv.children[1].id = "lienImg01"
    newDiv.children[2].id = "lienTitre01"
    newDiv.children[1].href = url
    newDiv.children[2].href = url
    newDiv.children[2].innerHTML = titre

    var te = document.getElementById("floatingTextarea")
    te.innerText = "<div class='container'>GIT est roi </div> "

    var stop = 100;
}



function copyV(myEvent){
    console.log("myEvent1:",myEvent)
    myEvent = myEvent || window.event; 
// 'myEvent' is event object
    let key = myEvent.which || myEvent.keyCode;
    let ctrl = myEvent.ctrlKey ? myEvent.ctrlKey : ((key === 17) ? true : false);
    console.log("ctrl1:",ctrl.value)
    console.log("ctrl1:",ctrl)
    if (key == 86 && ctrl) {
        console.log("myEvent2:",myEvent)
        console.log("myEvent3:",myEvent.value)
        console.log("key1:",key.value)
        console.log("key1:",key)
        console.log("Ctrl+V is pressed.")
        console.log(document.getElementById("floatingTextarea").value)
        document.getElementById("floatingTextarea").onpaste
        // document.execCommand('copy');
        // print in result
        // document.getElementById("result1").innerHTML =("Ctrl+V is pressed.");
    }

}

function myPage(){
    var x = document.getElementById("floatingTextarea")
    var inpLink = document.createElement("input")
    x.appendChild(inpLink)
    //x.addEventListener('focus')

}

function myLien(){
    var x = document.getElementById("floatingTextarea")
    var inpLink = document.createElement("input")
    x.appendChild(inpLink)
    //x.addEventListener('focus')

}


function copyText(htmlElement){

    if(!htmlElement){
        return;
    }

    let elementText = htmlElement.innerText;

    let inputElement = document.createElement('input');
    inputElement.setAttribute('value',elementText);
    document.body.appendChild(inputElement);
    inputElement.select();



    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);

}

document.querySelector('#copy-text-btn').onclick = function ()
{
    copyText(document.querySelector('#text'));
}

// document.body.addEventListener("keydown", function (myEvent) {
   
//    // function that verifies the detection
//    myEvent = myEvent || window.event; // 'myEvent' is event object
//    let key = myEvent.which || myEvent.keyCode; // this is to detect keyCode
   
//    // Detecting Ctrl
//    let ctrl = myEvent.ctrlKey ? myEvent.ctrlKey : ((key === 17) ? true : false);
   
//    // if the key being pushed is V and ctrl is true.

//    else if (key == 67 && ctrl) {
   
//       // if the key being pushed is C and the true value of ctrl
//       // print in result
//       document.getElementById("result2").innerHTML =("Ctrl+C is pressed.");
//    }
// }, false);
var x = document.getElementById("floatingTextarea")
x.focus()
function test44(){
    
    var maValeur = x.value

    for (var i = 0; i < maValeur.length; i++) {
        if(maValeur.indexOf("\n")){

            console.log(" \n est présent")
        }
        console.log(maValeur[i])
    }
}



// var x = document.getElementById("floatingTextarea")
// x.addEventListener("keydown",copyV,false)

// var x2 = document.getElementById("floatingTextarea")
// x2.addEventListener("paste",copyV,false)

var x3 = document.getElementById("floatingTextarea")
x3.addEventListener("input",test44,false)

// var y = document.getElementById("addLink")
// y.addEventListener("click",myLien,false)

// var y2 = document.getElementById("addLink")
// y2.addEventListener("click",myPage,false)


