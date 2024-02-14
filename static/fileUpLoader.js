// Fichier : upLoader.js

// Création d'un pointeur vers la drop zone (DIV) "dropZone0" : 
var maZone = document.getElementById("dropZone0")
// Création d'un pointeur vers la balise <input type="file" de la drop zone (DIV): 
var myInputFileDrag = document.getElementById("inputFileDrag")
// Création d'un pointeur vers la balise <input type="text" de la drop zone (DIV): 
var myinputTextDrag = document.getElementById("inputTextDrag")

// Création d'un pointeur vers la balise <output> de Rechercher ... sur "dropZone0": 
var mydragOutput = document.getElementById("dragOutput")


// ================================== Les boutons de la section "... dropZone ... "
// Création d'un pointeur vers le btn "dragBtnSend" ("Envoyer le fichier") : 
var myDragBtnSend = document.getElementById("dragBtnSend")
// Création d'un pointeur vers le btn "dragBtnCancel" ("Annuler l'envoi du fichier") : 
var myDragBtnCancel = document.getElementById("dragBtnCancel")


// ================================== Les boutons de la section "... fichier sur ma machine ... "
// Création d'un pointeur vers le form "machineForm" ("Rechercher un fichier sur ma machine") : 
var myMachineForm = document.getElementById("machineForm")
// Création d'un pointeur vers le btn "btnMachineSearch" ("Rechercher un fichier sur ma machine") : 
var myBtnMachineSearch = document.getElementById("btnMachineSearch")
// Création d'un pointeur vers le btn "btnMachineSearchSend" ("Envoyer pour Rechercher un fichier sur ma machine") : 
var myBtnMachineSearchSend = document.getElementById("btnMachineSearchSend")
// Création d'un pointeur vers le btn "btnMachineSearchCancel" ("Annuler l'envoi du fichier") : 
var myBtnMachineSearchCancel = document.getElementById("btnMachineSearchCancel")

// Création d'un pointeur vers la balise <input type="file" de Rechercher ... sur ma machine: 
var myInputFile = document.getElementById("inputFile")


// Création d'un pointeur vers la balise <output> de Rechercher ... sur ma machine: 
// var myOutput = document.getElementById("machineOutput")
var myMachineOutput = document.getElementById("machineOutput")

// Rechercher quel est le navigateur utilisé
var ua = navigator.userAgent;
// "Mozilla/5.0 (Windows NT 5.1; rv:52.0) Gecko/20100101 Firefox/52.0"
// var regex = 





var myDiv = document.getElementById("divForFile")
var myImage = document.createElement("img")
// Informations sur le fichier transmis
// var myFile;



	// console.log("In eventManager !")
function eventManager(p_event){
	p_event.preventDefault()
	p_event.stopPropagation();
	var stop = 77;





	if(p_event.type == "change"){
		console.log("p_event.type == change")
			var nameOfFile = myInputFile.files[0]['name']
			var lou = myInputFile.files[0]['lastModified']
			// Créer un objet 'date' avec lou
			var DateMaintenant = new Date(lou);
			// Convertir "lou" en un string 
			var myDateLou = DateMaintenant.toLocaleDateString('fr-FR', options)
			// Inscrire le nom du fichier dans la balise "output"
			myMachineOutput.value = nameOfFile+" modifié le : "+myDateLou

			// Activer le btn d'envoi
			myBtnMachineSearchSend.disabled =false;
			// Activer le btn d'annulation
			myBtnMachineSearchCancel.disabled =false;
			
			// Pour lire le contenu du fichier : 
			var file = myInputFile.files[0];
			if (file) {
			    var reader = new FileReader();
			    reader.readAsText(file, "UTF-8");
			    reader.onload = function (evt) {
			        document.getElementById("divForFileContent").innerHTML = "Contenu du fichier reçu : "+evt.target.result;
			    }
			    reader.onerror = function (evt) {
			        document.getElementById("divForFileContent").innerHTML = "error reading file";
			    }
			}

		}
	if(p_event.type == "click"){
		// 5 balises gèrent le click : 
		//	1) (Envoyer le fichier au serveur) var myDragBtnSend
		//	2)  Annuler l'envoi du fichier au serveur 
		// 3) ("Rechercher un fichier sur ma machine") var myBtnMachineSearch
		//	4) (Envoyer le fichier pour "Rechercher un fichier sur ma machine") var myBtnMachineSearchSend
		// 5) Annuler l'envoi du fichier au serveur 
		if (p_event.target.id == "dragBtnSend"){
			console.log("dragBtnSend a été pressé ")
			// Afficher un texte dans 'output'
			myOutput.innerHTML = "Fichier envoyé !!"
		}
		if (p_event.target.id == "btnMachineSearch"){
			console.log("btnMachineSearch a été pressé ")
			// Simuler un clic sur la balise <input type="file" de Rechercher ... sur ma machine: 
			myInputFile.click()
		}
		if (p_event.target.id == "btnMachineSearchSend"){
			console.log("myBtnMachineSearchSend a été pressé ")
			// Envoyer le formulaire au serveur
			myMachineForm.submit();
		}
		if (p_event.target.id == "dragBtnCancel"){
			console.log("myDragBtnCancel ")
			// Supprimer l'objet 'file' dans myInputFileDrag
			myInputFileDrag.files = null;
			// btn envoyer et annuler = disabled
			myDragBtnSend.disabled = true
			myDragBtnCancel.disabled = true
			// écrire 'aucun' à la place du nom du fichier
			mydragOutput.value = " aucun"
		}
		if (p_event.target.id == "btnMachineSearchCancel"){
			console.log("myBtnMachineSearchCancel")
			// Supprimer l'objet 'file' dans myInputFile
			myInputFile.files = null;
			// btn envoyer et annuler = disabled
			myBtnMachineSearchSend.disabled =true;
			myBtnMachineSearchCancel.disabled =true;
			// écrire 'aucun' à la place du nom du fichier
			myMachineOutput.value = " aucun"

		}
		


		
		// var myFile = document.getElementById("myFile").files[0]
		// console.log("Type de fichier : "+myFile['type'])
		// console.log("Taille du fichier : "+myFile['size'])
		// console.log("Nom du fichier : "+myFile['name'])
		// console.log("Fin des affichages dans la console ...")
	}

	if(p_event.type=="drop"){
		console.log("drop event") 
		var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute:"2-digit" };

		// Activer l'envoie par le btn
		myDragBtnSend.disabled = false
		myDragBtnCancel.disabled = false

		// Relever le nom du fichier dans la variable "ou"
		var ou = p_event.dataTransfer.files[0]['name']
		// Relever le nom du fichier dans la variable "Lou"
		var lou = p_event.dataTransfer.files[0]['lastModified']
		// Créer un objet 'date' avec lou
		var DateMaintenant = new Date(lou);

		// Convertir "lou" en un string 
		var myDateLou = DateMaintenant.toLocaleDateString('fr-FR', options)
		// Inscrire le nom du fichier dans la balise "output"
		mydragOutput.value = ou+" modifié le : "+myDateLou

		// Inscrire de la data dans input type="text" 
		myinputTextDrag.value = "input type=text"
		
		
		var myP_eventDataTransferFiles = p_event.dataTransfer.files;
  		console.log("p_event.dataTransfer.files is a list of 'File' objects ? ")


  		var ft_name = p_event.dataTransfer.files[0]['name']
  		// 	console.log("nom du fichier passé : "+myP_eventDataTransferFiles.item(0).name)
  		// }
  		var stop0 = 100;


  		// Ajouter à <input type=file> un obj FileList
  		myInputFileDrag.files = p_event.dataTransfer.files;

  		var stop = 100;

	 	// for (let i = 0; i < myP_eventDataTransferFiles.length; i++) {
	 	// 	const file = myP_eventDataTransferFiles[i];
	 	// 	if (!file.type.startsWith('image/')){ continue }
	 	// 	const img = document.createElement("img");
	  //   	img.classList.add("obj");
	  //   	img.file = file;
	  //   	preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.
	  // 	}
	}

	if(p_event.type=="dragover"){
		// console.log("dragover event")
		// this.style['background-color'] = "rgb(238, 222, 111)"
		this.classList.remove("bg-success")
	}
	if(p_event.type=="mouseover"){
		console.log("mouseover")
		// bg-success remove
		this.classList.remove("bg-success")
		// this.style['background-color'] = "rgb(238, 222, 111)"
		var stophere = 100
	}
	if(p_event.type=="mouseleave"){
		console.log("mouseleave")
		this.classList.add("bg-success")
		// this.style['background-color'] = "rgb(238, 238, 238)"
		var stophere = 100
	}
	if(p_event.type=="dragstart"){
		var tt = p_event.target;
		p_event.dataTransfer.setData("image/jpeg", p_event.target.innerText);
		console.log("dragstart ! ")
		var stophere = 100
	}
	if(p_event.type=="dragend"){
		var tt = p_event.target;
		this.style['background-color'] = "rgb(238, 238, 238)"
		console.log("dragstart vers : "+tt)
	}
	if(p_event.type=="dragleave"){
		console.log("dragleave")
		maZone.style['background-color'] = "rgb(238, 238, 238)"
		var stophere = 100
	}

}


function attachAndShow(p_image){
	var myImage = document.createElement("img")
	myImage.src=p_image
	myDiv.appendChild(myImage)
}

maZone.addEventListener("drop",eventManager,false)
maZone.addEventListener("dragover",eventManager,false)
maZone.addEventListener("mouseover",eventManager,false)
maZone.addEventListener("mouseleave",eventManager,false)

myBtnMachineSearch.addEventListener("click",eventManager,false)
myBtnMachineSearchSend.addEventListener("click",eventManager,false)
myBtnMachineSearchCancel.addEventListener("click",eventManager,false)

myInputFile.addEventListener("change",eventManager,false)

myDragBtnCancel.addEventListener("click",eventManager,false)
myBtnMachineSearchCancel.addEventListener("click",eventManager,false)