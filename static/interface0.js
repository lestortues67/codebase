
function master_NotInSlave(p_listMaster,p_listSlave) {
	//Ne fonctionne qu'AVEC une SIMPLE liste. Un array possède une méthode appelée
	// 'filter' qui est utilisée ici. 

	//Ne fonctionne PAS avec une liste de Maps !!

	//Renvoie un array des éléments de p_listMaster qui ne 
	//se trouvent PAS dans p_listSlave
	//si p_listMaster=[0,1,2,55]  p_listSlave=[2,55]
	//réponse = [0,1]
	var temp = p_listMaster.filter(x => !p_listSlave.includes(x));
	return temp;
	}

function master_InSlave(p_listMaster,p_listSlave) {
	//Ne fonctionne qu'AVEC une SIMPLE liste. Un array possède une méthode appelée
	// 'filter' qui est utilisée ici. 

	//Ne fonctionne PAS avec une liste de Maps !!

	//Renvoie un array des elements de p_listMaster qui se 
	// TROUVENT dans p_listSlave
	//si p_listMaster=[0,1,2,55]  p_listSlave=[2,55]
	//réponse = [2,55]
	var temp = p_listMaster.filter(x => p_listSlave.includes(x));
	//console.log(temp);
	return temp;
	}
function slave_NotInMaster(p_listMaster,p_listSlave) {
	//Ne fonctionne qu'AVEC une SIMPLE liste. Un array possède une méthode appelée
	// 'filter' qui est utilisée ici. 

	//Ne fonctionne PAS avec une liste de Maps !!

	//Renvoie un array des éléments de p_listSlave qui ne 
	//se trouvent PAS dans p_listMaster
	//si p_listMaster=[0,1,2,55]  p_listSlave=[2,55]
	//réponse = [0,1]
	var temp = p_listSlave.filter(x => !p_listMaster.includes(x));
	return temp;
	}

function slave_InMaster(p_listMaster,p_listSlave) {
	//Ne fonctionne qu'AVEC une SIMPLE liste. Un array possède une méthode appelée
	// 'filter' qui est utilisée ici. 

	//Ne fonctionne PAS avec une liste de Maps !!

	//Renvoie un array des elements de p_listSlave qui se 
	// TROUVENT dans p_listMaster
	//si p_listMaster=[0,1,2,55]  p_listSlave=[2,55]
	//réponse = [2,55]
	var temp = p_listSlave.filter(x => p_listMaster.includes(x));
	//console.log(temp);
	return temp;
	}







function f_change(p_event){
	console.log('Le texte saisi dans input est : '+p_event.target.value)
	var opt = document.createElement('option');
	opt.value = p_event.target.value;
	opt.innerHTML = p_event.target.value
	ss.appendChild(opt);
	
	// alert('in the input change')
}

function f_select(p_event){
	console.log('LA selection dans select est : '+p_event.target.value)
	// var opt = document.createElement('option');
	// opt.value = p_event.target.value;
	// opt.innerHTML = p_event.target.value
	// ss.appendChild(opt);
	
	alert('in the select change')
}




var labInp = document.createElement('label');
labInp.for = "input-select"
labInp.innerHTML = "Saisir la nouvelle option : "


var ss = document.createElement('input');
ss.type = "text"
ss.id = "input-select"
ss.name = "input-select"
ss.addEventListener('change',f_change,false)




var lab = document.createElement('label');
lab.for = "pet-select"
lab.innerHTML = "Choose a pet:"

var ss = document.createElement('select');
ss.id = "pet-select"
ss.name = "pets"
ss.addEventListener('change',f_select,false)

var opt = document.createElement('option');
opt.value = "dog";
opt.innerHTML = "Dog"
ss.appendChild(opt);
var opt = document.createElement('option');
opt.value = "cat";
opt.innerHTML = "cat"
ss.appendChild(opt);



function eventManager(p_event){
	if(p_event.type == "change"){
		console.log("p_event.type == change")
		if( (p_event.target.classList.value.indexOf("filtering")>-1) ){
			// tous les éléments de la zone "filtrer" sauf la zone "mot clé"
			if(!p_event.target.value){
				p_event.target.classList.remove("bg-dark")
				p_event.target.classList.remove("text-white")
			}
			else{
				p_event.target.classList.add("bg-dark")
				p_event.target.classList.add("text-white")
			}	
			// Modifier les lignes à afficher selon les filtres appliqués ci-dessus
		}

		if( (p_event.target.id == "motcleFiltre") ){
			//Input text rechercher un mot-clé  dans "Filtrer" id=motcleFiltre 
				p_event.target.classList.add("bg-primary")
				p_event.target.classList.add("text-white")
		}
		if( (p_event.target.classList.value.indexOf("filtreI")>-1) ){
			//Input text rechercher un mot-clé  dans "Filtrer" id=
			if(p_event.target.value){
				p_event.target.classList.add("bg-primary")
				p_event.target.classList.add("text-white")
			}
			else{
				p_event.target.classList.add("bg-dark")
				p_event.target.classList.add("text-white")
			}
		}
		if( (p_event.target.classList.value.indexOf("triS")>-1) ){
			if(!p_event.target.value){
				p_event.target.classList.remove("bg-success")
				p_event.target.classList.remove("text-white")
			}
			else{
				p_event.target.classList.add("bg-success")
				p_event.target.classList.add("text-white")
			}	
		}
		

	}
	if(p_event.type == "click"){
		if(p_event.target.id == "razMotCle"){
			raz_filtreI()
		}
		if(p_event.target.id == "razFiltre"){
			raz_filtreS()	
		}

		if(p_event.target.className.indexOf('razTri') > -1){
			raz_triage()	
		}
		
		
	}
}
var f = document.getElementsByClassName("filtering")
var triElements = document.getElementsByClassName("triS")
var ifi = document.getElementsByClassName("filtreI")

var btnRazTri = document.getElementsByClassName("razTri") 

function raz_filtreS(){
	for (var i = 0; i < f.length; i++) {
		f[i].value="" 
		f[i].classList.remove("bg-dark")
		f[i].classList.remove("text-white")
	}
	var ty = document.getElementById("dateTextFiltre")	
	ty.value="" 
	ty.classList.remove("bg-dark")
	ty.classList.remove("text-white")
	document.getElementById("motcleFiltre").focus();
		
}
function raz_filtreI(){
	var ty = document.getElementById("motcleFiltre")	
		ty.value="" 
		ty.classList.remove("bg-primary")
		ty.classList.remove("text-white")
		ty.focus();
}

function raz_triage(){
	for (var i = 0; i < triElements.length; i++) {
		triElements[i].value="" 
		triElements[i].classList.remove("bg-success")
		triElements[i].classList.remove("text-white")
	}
	var ty = document.getElementById("motcleFiltre")	
		ty.value="" 
		ty.classList.remove("bg-primary")
		ty.classList.remove("text-white")
		ty.focus();
}


document.getElementById("langageFiltre").addEventListener('change',eventManager,false)
document.getElementById("dateTextFiltre").addEventListener('change',eventManager,false)

document.getElementById("categorieFiltre").addEventListener('change',eventManager,false)
document.getElementById("souscategorieFiltre").addEventListener('change',eventManager,false)
document.getElementById("auteurFiltre").addEventListener('change',eventManager,false)
document.getElementById("motcleFiltre").addEventListener('change',eventManager,false)


document.getElementById("razFiltre").addEventListener('click',eventManager,false)
document.getElementById("razMotCle").addEventListener('click',eventManager,false)

for (var i = 0; i < btnRazTri.length; i++) {
	btnRazTri[i].addEventListener('click',eventManager,false)
}

for (var i = 0; i < triElements.length; i++) {
	triElements[i].addEventListener('change',eventManager,false)
}


raz_filtreS()
raz_filtreI()
raz_triage()

document.getElementById("motcleFiltre").focus();
