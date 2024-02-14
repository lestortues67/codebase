// 21/02/2020
// Dossier : c:/javascript/JStest
// Fichier : mysqlDatetime.js
// Objet   : Les conversions du type mysql 'datetime' vers JS et inversement.
// Mot clé : mysql2jsDateTime



var maListe = [6,5,2,3,7,0,1,4,8,9]
var maListeDict = [
    {'n0':0,'n1':1,'n2':2,'n3':3,'n4':4,'n5':5,'n6':6,'n7':7,'n8':8,'n9':5},
    {'n0':1,'n1':1,'n2':2,'n3':3,'n4':4,'n5':5,'n6':6,'n7':7,'n8':8,'n9':4},
    {'n0':0,'n1':1,'n2':2,'n3':3,'n4':4,'n5':5,'n6':6,'n7':7,'n8':8,'n9':1},
    {'n0':1,'n1':1,'n2':2,'n3':3,'n4':4,'n5':5,'n6':6,'n7':7,'n8':8,'n9':3},
    {'n0':0,'n1':1,'n2':2,'n3':3,'n4':4,'n5':5,'n6':6,'n7':7,'n8':8,'n9':2}
    ]

var clientTest = [
    {'idClient':100,'nom':'doriath','prenom':'ch','actif':true, 'montant':3.29,'dateCmde':'05/01/2020', 'nbr':10 },
    {'idClient':101,'nom':'lamm','prenom':'caroline','actif':true, 'montant':3.71,'dateCmde':'22/07/2021', 'nbr':17 },
    {'idClient':102,'nom':'schnell','prenom':'jean claude','actif':true, 'montant':13.05,'dateCmde':'15/05/2022', 'nbr':1 },
    {'idClient':103,'nom':'lepage','prenom':'elise','actif':false, 'montant':39.03,'dateCmde':'05/04/2022', 'nbr':51 },
    {'idClient':104,'nom':'regal','prenom':'robert','actif':true, 'montant':84.32,'dateCmde':'11/01/2022', 'nbr':41 },
    {'idClient':105,'nom':'schwanger','prenom':'anneLaure','actif':true, 'montant':184.32,'dateCmde':'11/01/2022', 'nbr':141 },
    {'idClient':106,'nom':'wild','prenom':'sylvie','actif':false, 'montant':73.90,'dateCmde':'15/01/2022', 'nbr':13 }
    ]




var clients = [
{id:1,nom:'doriath'},
{id:7,nom:'lepage'},
{id:2,nom:'kaufholz'},
{id:3,nom:'schneider'},
{id:4,nom:'usselmann'},
{id:5,nom:'christ'},
{id:6,nom:'goetz'},
{id:8,nom:'monus'},
{id:9,nom:'daumas'},
{id:10,nom:'cartier'},
{id:11,nom:'lamm'},
{id:12,nom:'depp'}
];

var commandes = [
{id:1,idclient:1,date:"2019-12-21 19:15:07",ca:100},
{id:2,idclient:1,date:"2019-12-28 17:40:07",ca:103},
{id:3,idclient:1,date:"2020-02-01 16:45:07",ca:56},


{id:4,idclient:2,date:"2019-10-11 19:29:17",ca:278},
{id:5,idclient:2,date:"2019-06-28 17:42:07",ca:34},
{id:6,idclient:2,date:"2020-01-08 11:45:07",ca:58},

{id:7,idclient:3,date:"2019-04-14 08:39:17",ca:78},
{id:8,idclient:3,date:"2019-04-15 17:43:07",ca:64},
{id:9,idclient:3,date:"2020-01-22 12:45:07",ca:68},
{id:10,idclient:3,date:"2020-01-23 19:39:17",ca:178},
{id:11,idclient:3,date:"2020-01-24 17:43:07",ca:874},
{id:12,idclient:3,date:"2020-01-25 11:45:07",ca:583},

{id:17,idclient:4,date:"2019-04-14 08:49:17",ca:78},
{id:18,idclient:4,date:"2019-04-15 17:44:07",ca:64},
{id:19,idclient:4,date:"2020-01-22 12:45:07",ca:68},
{id:20,idclient:4,date:"2020-01-24 19:49:17",ca:178},
{id:21,idclient:4,date:"2020-01-24 17:44:07",ca:874},
{id:22,idclient:4,date:"2020-01-25 11:45:07",ca:583},

{id:17,idclient:5,date:"2019-05-15 08:59:17",ca:78},
{id:18,idclient:5,date:"2019-05-15 17:55:07",ca:65},
{id:19,idclient:5,date:"2020-01-22 12:55:07",ca:68},
{id:20,idclient:5,date:"2020-01-25 19:59:17",ca:178},
{id:21,idclient:5,date:"2020-01-25 17:55:07",ca:875},
{id:22,idclient:5,date:"2020-01-25 11:55:07",ca:583},
{id:17,idclient:5,date:"2019-05-15 08:59:17",ca:78},
{id:18,idclient:5,date:"2019-05-15 17:55:07",ca:65},
{id:19,idclient:5,date:"2020-01-22 12:55:07",ca:68},
{id:20,idclient:5,date:"2020-01-23 19:59:17",ca:178},
{id:21,idclient:5,date:"2020-01-25 17:55:07",ca:875},
{id:22,idclient:5,date:"2020-01-25 11:55:07",ca:583},

{id:23,idclient:6,date:"2019-06-16 08:59:17",ca:78},
{id:24,idclient:6,date:"2019-06-16 17:46:07",ca:66},
{id:25,idclient:6,date:"2020-01-22 12:36:07",ca:68},
{id:26,idclient:6,date:"2020-01-26 19:19:17",ca:178},
{id:27,idclient:6,date:"2020-01-26 17:16:07",ca:876},
{id:28,idclient:6,date:"2020-01-26 11:26:07",ca:683},
{id:29,idclient:6,date:"2019-06-16 08:39:17",ca:78},
{id:30,idclient:6,date:"2019-06-16 17:56:07",ca:66},
{id:31,idclient:6,date:"2020-01-22 12:16:07",ca:68},
{id:32,idclient:6,date:"2020-01-23 19:59:17",ca:178},
{id:33,idclient:6,date:"2020-01-26 17:06:07",ca:876},
{id:34,idclient:6,date:"2020-01-26 11:16:07",ca:683},
{id:35,idclient:6,date:"2019-06-16 08:59:17",ca:78},
{id:36,idclient:6,date:"2019-06-16 17:16:07",ca:66},
{id:37,idclient:6,date:"2020-01-22 12:26:07",ca:68},
{id:38,idclient:6,date:"2020-01-26 19:29:17",ca:178},
{id:39,idclient:6,date:"2020-01-26 17:36:07",ca:876},
{id:40,idclient:6,date:"2020-01-26 11:46:07",ca:683},
{id:41,idclient:6,date:"2019-06-16 08:09:17",ca:78},
{id:42,idclient:6,date:"2019-06-16 17:06:07",ca:66},
{id:43,idclient:6,date:"2020-01-22 12:04:07",ca:68},
{id:44,idclient:6,date:"2020-01-23 19:11:17",ca:178},
{id:45,idclient:6,date:"2020-01-26 17:26:07",ca:876},
{id:46,idclient:6,date:"2020-01-25 11:55:07",ca:583},
];




//     JS -----> MySQL : 
// Convertir le format JS 'datetime' vers le type 'datetime' avec mySQL
// 
// Le format 'datetime' dans mySQL est représenté :  2020-12-12 08:21:29

// Comment ces infos en JS ? 
// new Date().toISOString().slice(0, 19).replace('T', ' ');  --> "2020-02-21 09:55:07"
// "2020-02-21 09:45:07" est directement utilisable dans mySQL.

// =============================================================================
var exemple = new Date().toISOString().slice(0, 19).replace('T', ' ');
console.log(exemple);

//     MySQL -----> JS : 
// Convertir le format mySQL 'datetime' en un objet JS 'Date'
// 
// Le format 'datetime' dans mySQL est représenté :  2020-12-12 08:21:29

// 1) Convertir le string de data issu de mySQL en un array comme ceci : [ Y, M, D, h, m, s ]
var t = "2020-12-12 08:21:29".split(/[- :]/);

// 2) Créer une nouvelle instance de la classe 'Date' : 
var d = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));

// 3) Résultat : d est un objet 'date' : 
// d --> Date 2020-12-12T08:21:29.000Z

// MySQL info : 
// The TIMESTAMP and DATETIME data types offer automatic initialization and updating 
// to the current date and time. For more information, 
// see Section 11.2.6, “Automatic Initialization and Updating for TIMESTAMP and DATETIME”. 
// https://dev.mysql.com/doc/refman/5.7/en/timestamp-initialization.html