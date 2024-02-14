// Source : 
// Date : 05/11/2019
// Auteur : Christian Doriath
// Dossier : /Python34/MesDEv/Flask/Flask_JS_BASE_myLib
// Fichier : laDateHeure.js
// Description : Montrer la date et l'heure en JS. 

// Mot cles : JS_laDate JS_timeInterval JS_space_char

var dn = Date.now();// Le nombre de millisecondes écoulées depuis le 1er janvier 1970

// Convertir depuis Date.now() vers un string
var ff = document.getElementById("outputDiv1")

var DateMaintenant = new Date(Date.now());
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute:"2-digit" };

var myDateMaintenant = DateMaintenant.toLocaleDateString('fr-FR', options)
// "mercredi 18 mars 2020 à 09:46"

ff.value=myDateMaintenant


var dd = new Date();// Nombreuses propriétés : jour, mois, année, heure, etc...
//Source : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/toLocaleDateString
//dd.toLocaleDateString();// "05/11/2019"
//dd.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
// "mardi 5 novembre 2019"

//dd.getHours()
//dd.getMinutes()
//dd.getSeconds()

//dd.getDay(); 2 = mardi
//dd.getDate() = jour = 5 
//dd.getMonth()+1 car janvier = 0;
//dd.getFullYear() = annee = 2019




// Sur la page HTML afficher la date & un descriptif du code JS utilisé : 
// 1) Créer un groupe d'éléments "input type text"

document.getElementById("date").textContent= '\xa0' +dd.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });;  
document.getElementById("heure").textContent='\xa0' +dd.toLocaleTimeString();  
document.getElementById("milli").textContent='\xa0' +Date.now()+'\xa0';  

setInterval(function(){
    // code à répéter
    // recharger les variables de l'heure : 
    var dd = new Date();
    // rafraichir l'affichage des variables de l'heure et des ms : 
    document.getElementById("heure").textContent='\xa0' +dd.toLocaleTimeString();  
    document.getElementById("milli").textContent='\xa0' +Date.now()+'\xa0';  
    // attendre 1 seconde
 },1000);


function randomString(p_length){
  var st = "";
  var min = Math.ceil(65);
  var max = Math.floor(90);
  for (var i = 0; i < p_length; i++) {
    var al= Math.floor(Math.random() * (max - min)) + min;
    st = st.concat(String.fromCharCode(al));
  }
  return st;
}

function randomMonth(){
  var min = Math.ceil(13);
  var max = Math.floor(1);
  return Math.floor(Math.random() * (max - min)) + min;;
}

function randomDay(){
  var min = Math.ceil(32);
  var max = Math.floor(1);
  return Math.floor(Math.random() * (max - min)) + min;;
}

function randomHour(){
  var min = Math.ceil(24);
  var max = Math.floor(0);
  return Math.floor(Math.random() * (max - min)) + min;;
}

function randomMinute(){
  var min = Math.ceil(60);
  var max = Math.floor(0);
  return Math.floor(Math.random() * (max - min)) + min;;
}
function randomSeconde(){
  var min = Math.ceil(60);
  var max = Math.floor(0);
  return Math.floor(Math.random() * (max - min)) + min;;
}




// Date.UTC(année[,mois[,jour[,heures[,minutes[,secondes[,ms]]]]]])
// Date.UTC(96, 11, 1, 0, 0, 0) -> 849398400000

// var utcDate = new Date(Date.UTC(96, 11, 1, 0, 0, 0)); -> Date 1996-12-01T00:00:00.000Z
// utcDate.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });;  
// -> "dimanche 1 décembre 1996"

var myDataList = [];

// Le code qui suit produit une liste composée de 10 dict 

for (var i = 10 - 1; i >= 0; i--) {
	var dict ={};
	dict.nom=randomString(8);
	dict.annee=2019;
	dict.mois=randomMonth();
	dict.jour=randomDay();
	dict.heure=randomHour();
	dict.minute=randomMinute();
	dict.seconde=randomSeconde();

	var utcDate0 = new Date(Date.UTC(dict.annee, dict.mois, dict.jour, dict.heure, dict.minute, dict.seconde));

	dict.dateTexte=utcDate0.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });;  
	dict.heureTexte=utcDate0.toLocaleTimeString('fr-FR');
	var locTime = utcDate0.toLocaleTimeString('fr-FR');

	var ss = locTime.substring(0,2);
	dict.heure=parseInt(ss);


	myDataList.push(dict);
}

// function randomNumber(p_high){
//   var min = 0;
//   var max = Math.floor(p_high);
//   return Math.floor(Math.random() * (max - min)) + min;
// }

function randomNumber(p_high){
  return Math.floor(Math.random() * Math.ceil(p_high)) ;
}

maListe = [0,1,2,3,4,5,6,7,8,9]

while (maListe.length > 0){
	var delIt = randomNumber(maListe.length);
	console.log('Nbr tiré : '+maListe[delIt])
	maListe.splice(delIt,1);
};
