// mongosh --file optica.js linea de comando para ejecutar el archivo

db = connect( 'mongodb://localhost' );

/*---------------creacion de db--------------*/
db = db.getSiblingDB("optica"); // db.getSiblingDB('...') equivale a 'use <db>' comando en mongosh
db.dropDatabase(); //en caso de que exista, la eliminamos
db = db.getSiblingDB("optica");

/*---------------creacion de colecciones--------------*/
db.marca.drop();//en caso de que exista, la eliminamos
db.marca.insertMany([{
  "_id": ObjectId("62e80fddaf7ba59d7a292b27"),
  "name": "Carolina Herrera",
  "proveedor": {
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
  }
}, {
  "_id": ObjectId("62e80fe6af7ba59d7a292b28"),
  "name": "Oahkley",
  "proveedor": {
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
  }
}, {
  "_id": ObjectId("62e80fedaf7ba59d7a292b29"),
  "name": "Ray-Ban",
  "proveedor": {
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
  }
}, {
  "_id": ObjectId("62e80ff5af7ba59d7a292b2a"),
  "name": "Tous",
  "proveedor": {
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
}, {
  "_id": ObjectId("62e80ffcaf7ba59d7a292b2b"),
  "name": "Polaroid",
  "proveedor": {
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
}]);

db.gafas.drop();
db.gafas.insertMany([{
  "_id": ObjectId("62e80d98af7ba59d7a292b0a"),
  "marca": ObjectId("62e80fddaf7ba59d7a292b27"),
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
  "_id": ObjectId("62e80da6af7ba59d7a292b0b"),
  "marca": ObjectId("62e80ffcaf7ba59d7a292b2b"),
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
  "_id": ObjectId("62e80db2af7ba59d7a292b0c"),
  "marca": ObjectId("62e80fe6af7ba59d7a292b28"),
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
  "_id": ObjectId("62e80dbdaf7ba59d7a292b0d"),
  "marca": ObjectId("62e80fedaf7ba59d7a292b29"),
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
  "_id": ObjectId("62e80dc8af7ba59d7a292b0e"),
  "marca": ObjectId("62e80fedaf7ba59d7a292b29"),
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
  "_id": ObjectId("62e80dd3af7ba59d7a292b0f"),
  "marca": ObjectId("62e80ff5af7ba59d7a292b2a"),
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
  "precio": 92.55
}]);

db.cliente.drop(); 
db.cliente.insertMany([{
  "_id": ObjectId("62e80cd2af7ba59d7a292af3"),
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
    "$date": {
      "$numberLong": "1139875200000"
    }
  },
  "orders": [
    {
      "_id_order": ObjectId("62ed6408088f85aa43f5c3b2"),
      "nombre_empleado": "Jon",
      "id_gafas": ObjectId("62e80d98af7ba59d7a292b0a"),
      "fecha": {
        "$date": {
          "$numberLong": "1658595600000"
        }
      }
    },
    {
      "nombre_empleado": "Mike",
      "id_gafas": ObjectId("62e80db2af7ba59d7a292b0c"),
      "fecha": {
        "$date": {
          "$numberLong": "1658829600000"
        }
      }
    }
  ]
},{
  "_id": ObjectId("62e80ceeaf7ba59d7a292af4"),
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
    "$date": {
      "$numberLong": "1139961600000"
    }
  },"recomendacion": ObjectId("62e80cd2af7ba59d7a292af3"),
  "orders": {
    "nombre_empleado": "Jon",
    "id_gafas": {
      "$oid": "62e80da6af7ba59d7a292b0b"
    },
    "fecha": {
      "$date": {
        "$numberLong": "1658667600000"
      }
    }
  }
},{
  "_id": ObjectId("62e80cfbaf7ba59d7a292af5"),
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
    "$date": {
      "$numberLong": "1140048000000"
    }
  }
},{
  "_id": ObjectId("62e80d0aaf7ba59d7a292af6"),
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
    "$date": {
      "$numberLong": "1140134400000"
    }
  }
},{
  "_id": ObjectId("62e80d15af7ba59d7a292af7"),
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
    "$date": {
      "$numberLong": "1140220800000"
    }
  }
}]);