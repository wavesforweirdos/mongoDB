db = db.getSiblingDB('restaurants'); // equivalente a use restaurants
// mongoimport --db <db-name> --collection <coll-name> --type json --file nombrearchivo.json --jsonArray
db.restaurants.find({});
db.restaurants.find().forEach(function(x){print(`${x.restaurant_id} - ${x.name} - ${x.borough} - ${x.cuisine}` )})
db.restaurants.find({},{restaurant_id: 1,name: 1,borough: 1,cuisine: 1,_id:0});
db.restaurants.find({},{restaurant_id: 1,name: 1,borough: 1, 'address.zipcode': 1,_id:0});
db.restaurants.find({borough:"Bronx"},{name:1,_id:0});
db.restaurants.find({borough:"Bronx"},{name:1,_id:0}).limit(5);
db.restaurants.find({borough:"Bronx"},{name:1,_id:0}).limit(5).skip(5);
db.restaurants.find({'grades.score':{$gt:90}},{name:1,_id:0});
db.restaurants.find({'grades.score':{$gt:80, $lt: 100}},{name:1,_id:0});
db.restaurants.find({'address.coord.0':{$lt: -95.754168}},{name:1,_id:0});
db.restaurants.find({$and:[{cuisine:{$ne:'American'},'grades.score':{$gt:70},'address.coord.0':{$lt:-65.754168}}]},{name:1,_id:0});
db.restaurants.find({cuisine:{$ne:'American'},'grades.score':{$gt:70},'address.coord.0':{$lt:-65.754168}},{name:1,_id:0});
db.restaurants.find({cuisine:{$ne:'American'},'grades.grade':'A',borough:{$ne:'Brooklyn'}},{name:1,cuisine:1,_id:0}).sort({cuisine:-1});
db.restaurants.find({name:{$regex:/^Wil/}},{restaurant_id:1, name:1, borough:1,cuisine:1,_id:0});
db.restaurants.find({name: {$regex: /ces$/}},{restaurant_id:1, name:1, borough:1,cuisine:1,_id:0});
db.restaurants.find({name: {$regex: /Reg/}},{restaurant_id:1, name:1, borough:1,cuisine:1,_id:0});
db.restaurants.find({borough:"Bronx",cuisine:{$in:["American","Chinese"]}},{name:1,_id:0});
db.restaurants.find({borough:{$in:["Staten Island","Queens","Bronx","Brooklyn"]}}).forEach(function(x){print(`${x.restaurant_id} - ${x.name} - ${x.borough} - ${x.cuisine}`)})
db.restaurants.find({borough:{$not:{$in:["Staten Island","Queens","Bronx","Brooklyn"]}}}).forEach(function(x){print(`${x.restaurant_id} - ${x.name} - ${x.borough} - ${x.cuisine}`)})
db.restaurants.find({'grades.score':{$lt:10}}).forEach(function(x){print(`${x.restaurant_id} - ${x.name} - ${x.borough} - ${x.cuisine}`)}); /*or */db.restaurants.find({grades:{$elemMatch:{score:{$lt:10}}}}).forEach(function(x){print(`${x.restaurant_id} - ${x.name} - ${x.borough} - ${x.cuisine}`)});
db.restaurants.find({$and:[{cuisine:"Seafood"}, {$nor:[{cuisine:{$in:["American","Chinese"]}},{name:{$regex:/^Wil/}}]}]}).forEach(function(x){print(`${x.restaurant_id} - ${x.name} - ${x.borough} - ${x.cuisine}`)});
db.restaurants.find({grades:{$elemMatch:{grade:"A",score:11,date:ISODate("2014-08-11T00:00:00Z")}}},{restaurant_id:1,name:1,grades:1,_id:0});
db.restaurants.find({$and:[{'grades.1.grade':"A"},{'grades.1.score':9},{'grades.1.date': ISODate("2014-08-11T00:00:00Z")}]},{restaurant_id:1,name:1,grades:1,_id:0});
db.restaurants.find({$and:[{'address.coord.1':{$gt:42}},{'address.coord.1':{$lt:52}}]},{restaurant_id:1,name:1,adress:1,'address.coord':1,_id:0});
db.restaurants.find({}).sort({name:1});
db.restaurants.find({}).sort({name:-1});
db.restaurants.find({}).sort({cuisine:1},{borough:-1}).forEach(function(x){print(`${x.cuisine} - ${x.borough} - ${x.name}}`)});
db.restaurants.find({'address.street':{$exists:null}}) /*devuelve los que NO 'street' en 'address' */ db.restaurants.find({'address.street':{$ne:null}}) //devuelve los que SI tienen 'street' en 'address'
db.restaurants.find({'address.coord':{$type:'double'}});
db.restaurants.find({'grades.score':{$mod:[7,0]}}).forEach(function(x){print(`${x.name} - ${x.restaurant_id} - ${x.grades.map(x=>{return x.grade})}`)});
db.restaurants.find({name:{$regex:/mon/}}).forEach(function(x){print(`${x.name} - ${x.borough} - ${x.address.coord} - ${x.cuisine}`)});
db.restaurants.find({name:{$regex:/^Mad/}}).forEach(function(x){print(`${x.name} - ${x.borough} - ${x.address.coord} - ${x.cuisine}`)});