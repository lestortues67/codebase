// Source : 
// Date : 25/01/20
// Auteur : Christian Doriath
// Dossier : /Python34/MesDEv/Flask/flasl_JS_BASE_myLib
// Fichier : incSearch.js
// Description : Création d'une recherche incrémentale de texte. 

// Mot cles : incSearchJS

    var cac0 = document.getElementById("select0");
    var cac1 = document.getElementById("select1");

    var obj0 = {id:0,nom:'dor',ref:'250'}

    mesMotsCles = ['create','creer','chat','chaton','string','strint','stroint','stint','strincg','breer','kat','challe','dormir',
    'blue','dore','flash','flask']

    var gTable = document.getElementById("table0");
    var gTableTbody = document.getElementById("tbody");

    function f_myItt(p_event){
        console.log('Dans event = input');
        // Lire la valeur saisie
        var saisie = document.getElementById("itt0").value;
        // Obtenir une nouvelle liste 'mesMotsCles' filtrée : 'filteredMesMotsCles'
        var filteredMesMotsCles = mesMotsCles.filter(motCle => motCle.includes(saisie));
        // Afficher dans la table 'filteredMesMotsCles'
        replaceTbody(filteredMesMotsCles);
    }

    function replaceTbody(p_data){
        var table = document.getElementById("table0");
        var tableTbody = document.getElementById("tbodyTA");

        var newTbody = document.createElement('tbody')
        newTbody.id = "newTbody"

        for (var i = 0; i < p_data.length; i++) {
            var newTr = document.createElement('tr')
            newTr.classList.add("text-center");
            var newTd = document.createElement('td')
            newTd.innerHTML = p_data[i];
            newTr.appendChild(newTd)
            newTbody.appendChild(newTr)
        }
        // table.replaceChild(newTbody, tableTbody);
        tableTbody.replaceWith(newTbody) 
        // tableTbody.id = "tbodyTA"

        var newTbody = document.getElementById("newTbody");
        newTbody.id = "tbodyTA"
        // var tableTbody = document.getElementById("tbodyTA");
        // newTbody.id = "newTbody"
    }   

    myItt = document.getElementById("itt0")
    myItt.addEventListener('input',f_myItt,false);
    myItt.focus()

    replaceTbody(mesMotsCles);


