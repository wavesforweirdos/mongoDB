/*---------------eliminar cualquier db creada anteriormente llamada optica--------------*/
/*

show databases  //lista todas las db in MongoDB
use optica //selecciona la db y, si no existe, la crea
db //muestra la db
db.dropDatebase(); //elimina la base de datos selecionada

*/
/*---------------creacion de db--------------*/
use('optica');
db.cliente.drop();
db.cliente.insertMany([{
    "_id": "C001",
    "nombre": "Margaret",
    "apellidos": "Moore",
    "direccion": {
      "calle": "MySQL Boulevard",
      "numero": 28,
      "piso": 8,
      "puerta": 2,
      "cp": 17886,
      "ciudad": "San Bernardino",
      "pais": "EE. UU."
    },
    "telefono": 393029409,
    "mail": "MARGARET.MOORE@sakilacustomer.org",
    "fecha_registro": {
      "$date": "2006-02-14T00:00:00Z"
    },
    "recomendacion": {}
  },
  {
    "_id": "C002",
    "nombre": "Dorothy",
    "apellidos": "Taylor",
    "direccion": {
      "calle": "Inegl Manor",
      "numero": 156,
      "piso": 8,
      "puerta": 4,
      "cp": 77948,
      "ciudad": "Hamilton",
      "pais": "Canadá"
    },
    "telefono": 393029409,
    "mail": "DOROTHY.TAYLOR@sakilacustomer.org",
    "fecha_registro": {
      "$date": "2006-02-15T00:00:00Z"
    },
    "recomendacion": {
      "_id": "C001"
    }
  },
  {
    "_id": "C003",
    "nombre": "Mary",
    "apellidos": "Smith",
    "direccion": {
      "calle": "Santiago de Compostela Way",
      "numero": 900,
      "piso": 3,
      "puerta": 6,
      "cp": 53628,
      "ciudad": "Esfahan",
      "pais": "Irán"
    },
    "telefono": 994788528,
    "mail": "MARY.SMITH@sakilacustomer.org",
    "fecha_registro": {
      "$date": "2006-02-16T00:00:00Z"
    },
    "recomendacion": {
      "_id": "C001"
    }
  },
  {
    "_id": "C004",
    "nombre": "Patricia",
    "apellidos": "Johnson",
    "direccion": {
      "calle": "Hanoi Way",
      "numero": 109,
      "piso": 10,
      "puerta": 2,
      "cp": 42399,
      "ciudad": "Nantou",
      "pais": "Taiwán "
    },
    "telefono": 617920961,
    "mail": "PATRICIA.JOHNSON@sakilacustomer.org",
    "fecha_registro": {
      "$date": "2006-02-17T00:00:00Z"
    },
    "recomendacion": {
      "_id": "C002"
    }
  },
  {
    "_id": "C005",
    "nombre": "Linda",
    "apellidos": "Williams",
    "direccion": {
      "calle": "Idfu Parkway",
      "numero": 179,
      "piso": 2,
      "puerta": 1,
      "cp": 45844,
      "ciudad": "Masqat",
      "pais": "Omán "
    },
    "telefono": 921053851,
    "mail": "LINDA.WILLIAMS@sakilacustomer.org",
    "fecha_registro": {
      "$date": "2006-02-18T00:00:00Z"
    },
    "recomendacion": {}
  }
]);

db.proveedor.drop();
db.proveedor.insertMany([{
    "_id": "P001",
    "nombre": "Alco Distribuciones",
    "direccion": {
      "calle": "Korolev Drive",
      "numero": 153,
      "piso": 6,
      "puerta": 2,
      "cp": 10672,
      "ciudad": "Osmaniye",
      "pais": "Turquía"
    },
    "telefono": 670058259,
    "fax": 932219871,
    "nif": "B54798214"
  },
  {
    "_id": "P002",
    "nombre": "Bauba Style",
    "direccion": {
      "calle": "Joliet Way",
      "numero": 613,
      "piso": 6,
      "puerta": 2,
      "cp": 10672,
      "ciudad": "Yamuna Nagar",
      "pais": "India"
    },
    "telefono": 670058259,
    "fax": 932219871,
    "nif": "B54798214"
  },
  {
    "_id": "P003",
    "nombre": "Polo Grup",
    "direccion": {
      "calle": "Santiago de Compostela Parkway",
      "numero": 478,
      "piso": 4,
      "puerta": 4,
      "cp": 1027,
      "ciudad": "Saarbrcken",
      "pais": "Alemani"
    },
    "telefono": 932214231,
    "fax": 981139800,
    "nif": "B65920571"
  }
]);

db.marca.drop();
db.marca.insertMany([{
    "_id": "M001",
    "name": "Carolina Herrera",
    "proveedor": {
      "_id": "P001"
    }
  }, {
    "_id": "M002",
    "name": "Oahkley",
    "proveedor": {
      "_id": "P002"
    }
  }, {
    "_id": "M003",
    "name": "Ray-Ban",
    "proveedor": {
      "_id": "P002"
    }
  }, {
    "_id": "M004",
    "name": "Tous",
    "proveedor": {
      "_id": "P003"
    }
  }, {
    "_id": "M005",
    "name": "Polaroid",
    "proveedor": {
      "_id": "P003"
    }
  }]);

db.gafas.drop();
db.gafas.insertMany([{
    "_id": "G001",
    "marca": {
      "_id": "M001"
    },
    "grafuacion": [
      1.25,
      0.75
    ],
    "color_vidrios": [
      "verde",
      "verde"
    ],
    "color_montura": "lilac",
    "precio": 174.45,
    "tipo_montura": "flotante"
  }, {
    "_id": "G002",
    "marca": {
      "_id": "M005"
    },
    "graduacion": [
      0.25,
      0.75
    ],
    "color_vidrios": [
      "transparente",
      "transparente"
    ],
    "color_montura": "niebla",
    "tipo_montura": "pasta",
    "precio": 174.45
  }, {
    "_id": "G003",
    "marca": {
      "_id": "M002"
    },
    "graduacion": [
      0.25,
      0.5
    ],
    "color_vidrios": [
      "gris ",
      "gris "
    ],
    "color_montura": "indigo",
    "precio": 85.1,
    "tipo_montura": "flotante"
  }, {
    "_id": "G004",
    "marca": {
      "_id": "M003"
    },
    "graduacion": [
      11,
      0.75
    ],
    "color_vidrios": [
      "transparente",
      "transparente"
    ],
    "color_montura": "tiger print",
    "tipo_montura": "flotante",
    "precio": 94.9
  }, {
    "_id": "G005",
    "marca": {
      "_id": "M003"
    },
    "graduacion": [
      0.5,
      0.25
    ],
    "color_vidrios": [
      "marrón",
      "marrón"
    ],
    "color_montura": "tiger print",
    "tipo_montura": "pasta",
    "precio": 155.7
  }, {
    "_id": "G006",
    "marca": {
      "_id": "M004"
    },
    "graduacion": [
      0.35,
      0.25
    ],
    "color_vidrios": [
      "amarillo",
      "amarillo"
    ],
    "color_montura": "tiger print",
    "tipo_montura": "metálica",
    "precio": "92.55"
  }]);

db.order.drop();
db.order.insertMany([{
    "_id": "O001",
    "nombre_empleado": "Jon",
    "id_cliente": {
      "_id": "C001"
    },
    "id_gafas": {
      "_id": "G001"
    },
    "fecha": new Date('2022-07-23T17:00:00Z')
  }, {
    "_id": "O002",
    "nombre_empleado": "Jon",
    "id_cliente": {
      "_id": "C002"
    },
    "id_gafas": {
      "_id": "G002"
    },
    "fecha": new Date('2022-07-24T13:00:00Z')
  }, {
    "_id": "O003",
    "nombre_empleado": "Mike",
    "id_cliente": {
      "_id": "C003"
    },
    "id_gafas": {
      "_id": "G003"
    },
    "fecha": new Date('2022-07-26T10:00:00Z')
  }]);

// Run a find command to view items sold on April 4th, 2014.