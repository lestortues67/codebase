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
{id:1,idclient:1,date:new Date('December 17, 1995 03:24:00'),ca:100}
];

var d0 = new Date('December 17, 1995 03:24:00')

var dd = commandes[0]['date']
dd.toISOString().slice(0, 19).replace('T', ' ');

// Le format 'datetime' dans mySQL est idéal pour cumuler date et heure. 
// Voici comment il est représenté :  2020-12-12 08:21:29 ( Format datetime dans mySQL )

// Comment ces infos en JS ? 
// new Date().toISOString().slice(0, 19).replace('T', ' ');  --> "2020-02-21 09:45:07"
// "2020-02-21 09:45:07" est directement utilisable dans mySQL.



// Convertir le format mySQL 'datetime' en un objet JS 'Date'
// 
// Le format 'datetime' dans mySQL est représenté :  2020-12-12 08:21:29
// Convertir le string de data issu de mySQL en un array comme ceci : [ Y, M, D, h, m, s ]
var t = "2020-12-12 08:21:29".split(/[- :]/);

// Créer une nouvelle instance de la classe 'Date' : 
var d = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));
// d est un objet 'date' : 
// d --> Date 2020-12-12T08:21:29.000Z