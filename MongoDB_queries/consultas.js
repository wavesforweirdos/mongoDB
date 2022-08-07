db = db.getSiblingDB('restaurants'); // equivalente a use restaurants

// mongoimport --db <db-name> --collection <coll-name> --type json --file nombrearchivo.json --jsonArray

// 01 - Escriu una consulta per mostrar tots els documents en la col·lecció Restaurants
db.restaurants.find().pretty();
// 02 - Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine de tots els documents en la col·lecció Restaurants
db.restaurants.find({},{restaurant_id: 1,name: 1,borough: 1,cuisine: 1});
// 03 - Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine, però excloent el camp _id per tots els documents en la col·lecció Restaurants
db.restaurants.find({},{restaurant_id: 1,name: 1,borough: 1,cuisine: 1,_id:0});
// 04 - Escriu una consulta per mostrar restaurant_id, name, borough i zip code, però excloent el camp _id per tots els documents en la col·lecció Restaurants
db.restaurants.find({},{restaurant_id: 1,name: 1,borough: 1, 'address.zipcode': 1,_id:0});
// 05 - Escriu una consulta per mostrar tots els restaurants que estan en el Bronx
db.restaurants.find({borough:"Bronx"},{name:1,_id:0});
// 06 - Escriu una consulta per mostrar els primers 5 restaurants que estan en el Bronx
db.restaurants.find({borough:"Bronx"},{name:1,_id:0}).limit(5);
// 07 - Escriu una consulta per mostrar els 5 restaurants després de saltar els primers 5 que que siguin del Bronx
db.restaurants.find({borough:"Bronx"},{name:1,_id:0}).limit(5).skip(5);
// 08 - Escriu una consulta per trobar els restaurants que tenen algun score més gran de 90
db.restaurants.find({'grades.score':{$gt:90}},{name:1,_id:0});
// 09 - Escriu una consulta per trobar els restaurants que tenen un score més gran que 80 però menys que 100
db.restaurants.find({'grades.score':{$gt:80, $lt: 100}},{name:1,_id:0});
// 10 - Escriu una consulta per trobar els restaurants que estan situats en una longitud inferior a -95.754168
db.restaurants.find({'address.coord.0':{$lt: -95.754168}},{name:1,_id:0});
// 11 - Escriu una consulta de MongoDB per a trobar els restaurants que no cuinen menjar 'American ' i tenen algun score superior a 70 i latitud inferior a -65.754168
db.restaurants.find({$and:[{cuisine:{$ne:'American'},'grades.score':{$gt:70},'address.coord.0':{$lt:-65.754168}}]},{name:1,_id:0});
// 12 - Escriu una consulta per trobar els restaurants que no preparen menjar 'American ' i tenen algun score superior a 70 i que, a més,  és localitzen en longituds inferiors a -65.754168. Nota : Fes aquesta consulta sense utilitzar operador $and 
db.restaurants.find({cuisine:{$ne:'American'},'grades.score':{$gt:70},'address.coord.0':{$lt:-65.754168}},{name:1,_id:0});
// 13 - Escriu una consulta per trobar els restaurants que no preparen menjar  'American ', tenen alguna nota 'A' i no pertanyen a Brooklyn. S'ha de mostrar el document segons la cuisine en ordre descendent
db.restaurants.find({cuisine:{$ne:'American'},'grades.grade':'A',borough:{$ne:'Brooklyn'}},{name:1,cuisine:1,_id:0}).sort({cuisine:-1});
// 14 - Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'Wil' en les tres primeres lletres en el seu nom
db.restaurants.find({name:{$regex:/^Wil/}},{restaurant_id:1, name:1, borough:1,cuisine:1,_id:0});
// 15 - Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'ces' en les últimes tres lletres en el seu nom
db.restaurants.find({name: {$regex: /ces$/}},{restaurant_id:1, name:1, borough:1,cuisine:1,_id:0});
// 16 - Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'Reg' en qualsevol lloc del seu nom
db.restaurants.find({name: {$regex: /Reg/}},{restaurant_id:1, name:1, borough:1,cuisine:1,_id:0});
// 17 - Escriu una consulta per trobar els restaurants que pertanyen al Bronx i preparen plats Americans o xinesos
db.restaurants.find( { borough: "Bronx", cuisine: { $in: [ "American", "Chinese" ] } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 } );
// 18 - Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per aquells restaurants que pertanyen a Staten Island, Queens, Bronx o Brooklyn

// 19 - Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que NO pertanyen a Staten Island, Queens, Bronx o Brooklyn

// 20 - Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que aconsegueixin una nota menor que 10

// 21 - Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que preparen marisc ('seafood') excepte si son 'American ', 'Chinese' o el name del restaurant comença amb lletres 'Wil'

// 22 - Escriu una consulta per trobar el restaurant_id, name i grades per a aquells restaurants que aconsegueixin un grade de "A" i un score de 11 amb un ISODate "2014-08-11T00:00:00Z"

// 23 - Escriu una consulta per trobar el restaurant_id, name i grades per a aquells restaurants on el 2n element de l'array de graus conté un grade de "A" i un score 9 amb un ISODate "2014-08-11T00:00:00Z"

// 24 - Escriu una consulta per trobar el restaurant_id, name, adreça i ubicació geogràfica per a aquells restaurants on el segon element del array coord conté un valor entre 42 i 52

// 25 - Escriu una consulta per organitzar el nom dels restaurants en ordre ascendent juntament amb totes les columnes

// 26 - Escriu una consulta per organitzar el nom dels restaurants en ordre descendent juntament amb totes les columnes

// 27 - Escriu una consulta per organitzar el nom de la cuisine en ordre ascendent i el barri en ordre descendent

// 28 - Escriu una consulta per saber si les direccions contenen el carrer

// 29 - Escriu una consulta que seleccioni tots el documents en la col·lecció de restaurants on els valors del camp coord és de tipus Double

// 30 - Escriu una consulta que seleccioni el restaurant_id, name i grade per a aquells restaurants que retornen 0 com a residu després de dividir algun dels seus score per 7

// 31 - Escriu una consulta per trobar el name de restaurant, borough, longitud, latitud i cuisine per a aquells restaurants que contenen 'mon' en algun lloc del seu name

// 32 - Escriu una consulta per trobar el name de restaurant, borough, longitud, latitud i cuisine per a aquells restaurants que contenen 'Mad' com a primeres tres lletres del seu name