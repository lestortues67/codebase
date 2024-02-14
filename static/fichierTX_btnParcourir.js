// Fichier : upLoader.js

// Pointeur vers la balise 'input type=file'
var monInputSimple = document.getElementById("fichiers")
// Pointeur vers la balise div des messages à afficher
var listFileSelected = document.getElementById("preview")

var fileTypes = [
  'image/jpeg',
  'image/pjpeg',
  'image/png'
]

function validFileType(file) {
// Vérification du type du fichier. 
// Cette f_ se sert de la liste 'fileTypes' pour vérifier que le fichier courant est 
// bien de l'un des types contenu dans cette liste. 
  for(var i = 0; i < fileTypes.length; i++) {
    if(file.type === fileTypes[i]) {
      return true;
    }
  }

  return false;
}

function returnFileSize(number) {
// Retourner une taille de fichier avec une unité adaptée octets, ko, Mo.
  if(number < 1024) {
    return number + ' octets';
  } else if(number >= 1024 && number < 1048576) {
    return (number/1024).toFixed(1) + ' Ko';
  } else if(number >= 1048576) {
    return (number/1048576).toFixed(1) + ' Mo';
  }
}


function returnDate(p_epochNumber) {
	console.log("The epoch number I received is : ",p_epochNumber)
	var d = new Date(p_epochNumber); // The 0 there is the key, which sets the date to the epoch
	var date = d.getDate().toString() +"/"+ (d.getMonth()+1).toString()+"/"+d.getFullYear().toString()+" "+d.getHours().toString()+":"+d.getMinutes().toString()
	console.log("date : ",date)
	return date;
}






function updateImageDisplay() {
// Afficher le contenu du fichier choisi

	// 'listFileSelected' est le pointeur vers la balise 'div' des messages
	while(listFileSelected.firstChild) {
		listFileSelected.removeChild(listFileSelected.firstChild);
	}
	// 'monInputSimple' est le pointeur vers la balise 'input type=file'
  var curFiles = monInputSimple.files;
  if(curFiles.length === 0) {
    var para = document.createElement('p');
    para.textContent = 'Aucun fichier sélectionné999';
    listFileSelected.appendChild(para);
  } else {
    var list = document.createElement('ol');
    listFileSelected.appendChild(list);
    for(var i = 0; i < curFiles.length; i++) {
      var listItem = document.createElement('li');
      var para = document.createElement('p');

      // Vérifier que le type du fichier est acceptable. 
      if(validFileType(curFiles[i])) {
        para.textContent = 'Fichier : ' + curFiles[i].name + ' '+returnDate(curFiles[i].lastModified)+ ', taille : ' + returnFileSize(curFiles[i].size) ;
        // Création d'une 'img' pour y placer une image à afficher
        var image = document.createElement('img');
        // URL.createObjectURL() crée une chaîne contenant une URL représentant l’objet passé en paramètre. 
        // La nouvelle URL d’objet représente l’objet File 

        // On passe à 'image' l'objet 'file' à afficher. 
        image.src = window.URL.createObjectURL(curFiles[i]);

        listItem.appendChild(para);
        listItem.appendChild(image);
        

      } else {
        para.textContent = 'Fichier : ' + curFiles[i].name + ' Extension du fichier invalide, veuillez modifier.';
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}






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
	// L'event 'change' est déclenché par la balise 'input type=file'
	// Lorsque l'on clique sur 'OK' pour choisir le fichier

		// Avant d'envoyer on affiche le contenu du fichier choisi :
		updateImageDisplay()

		// Autoriser le btn 'envoyer'
		btnEnvoyer.disabled = false
		// Autoriser le btn 'annuler'
		btnAnnuler.disabled = false
		}
	if(p_event.type == "click"){
		// 5 balises gèrent le click : 
		//	1) (Envoyer le fichier au serveur) var myDragBtnSend
		//	2)  Annuler l'envoi du fichier au serveur 
		// 3) ("Rechercher un fichier sur ma machine") var myBtnMachineSearch
		//	4) (Envoyer le fichier pour "Rechercher un fichier sur ma machine") var myBtnMachineSearchSend
		// 5) Annuler l'envoi du fichier au serveur 
		if (p_event.target.id == "btnEnvoyer"){
			console.log("btnEnvoyer a été pressé ")
			// Envoyer le formulaire au serveur
			myMachineForm.submit();
			// Afficher un texte dans 'output'
			// myOutput.innerHTML = "Fichier envoyé !!"
		}

		if (p_event.target.id == "btnAnnuler"){

			// Supprimer l'objet 'file' dans myInputFile
			document.getElementById('fichiers').value = "";

			// btn envoyer et annuler = disabled
			btnEnvoyer.disabled =true;
			btnAnnuler.disabled =true;

			// Effacer la zone de 'preview'
			while(listFileSelected.firstChild) {
			listFileSelected.removeChild(listFileSelected.firstChild);
			}
		}


		



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

// Btn 'envoyer'
var btnEnvoyer = document.getElementById("btnEnvoyer")
var btnAnnuler = document.getElementById("btnAnnuler")

monInputSimple.addEventListener('change',eventManager,false);
btnEnvoyer.addEventListener('click',eventManager,false);
btnAnnuler.addEventListener('click',eventManager,false);





