db = connect( 'mongodb://localhost' );

/*---------------creacion de db--------------*/
db = db.getSiblingDB("pizzeria");
db.dropDatabase();
db = db.getSiblingDB("pizzeria");

/*---------------creacion de colecciones--------------*/

db.producto.drop();
db.producto.insertMany([{"_id": {
    "$oid": "62e8e673e122c8ad5414049d"
  },
  "nombre": "Pizza Carbonara",
  "descripcion": "Masa fresca, doble de bacon, champinyones, salsa carbonara, queso fundido y extra de queso",
  "imagen": "img/carbonara.jpg",
  "precio": 5.95,
  "categoria": {
    "_id": {
      "$oid": "62e8e79fe122c8ad5414049e"
    },
    "nombre": "clásica"
  }
},{
  "_id": {
    "$oid": "62e93a67e122c8ad541404d1"
  },
  "nombre": "Pizza Cuatro Quesos",
  "descripcion": "Masa fresca, mezcla de cuatro quesos y tomate",
  "imagen": "img/4quesos.jpg",
  "precio": 5.95,
  "categoria": {
    "_id": {
      "$oid": "62e8e79fe122c8ad5414049e"
    },
    "nombre": "clásica"
  }
},{
  "_id": {
    "$oid": "62e93a7ee122c8ad541404d2"
  },
  "nombre": "Pizza Barbacoa",
  "descripcion": "Masa fresca, bacon, pollo, queso fundido, carne vacuna y salsa barbacoa",
  "imagen": "img/barbacoa.jpg",
  "precio": 5.95,
  "categoria": {
    "_id": {
      "$oid": "62e8e79fe122c8ad5414049e"
    },
    "nombre": "clásica"
  }
},{
  "_id": {
    "$oid": "62e93a96e122c8ad541404d3"
  },
  "nombre": "Pizza Pepperoni",
  "descripcion": "Base de margarita con ración doble de pepperoni y queso fundido",
  "imagen": "img/pepperoni.jpg",
  "precio": 9.95,
  "categoria": {
    "_id": {
      "$oid": "62e93ad3e122c8ad541404d4"
    },
    "nombre": "premium"
  }
},{
  "_id": {
    "$oid": "62e93afbe122c8ad541404d5"
  },
  "nombre": "Pizza Trufatta",
  "descripcion": "Base de margarita con champiñones y salsa de trufa",
  "imagen": "img/trufatta.jpg",
  "precio": 11.95,
  "categoria": {
    "_id": {
      "$oid": "62e93ad3e122c8ad541404d4"
    },
    "nombre": "premium"
  }
},{
  "_id": {
    "$oid": "62e93b1ce122c8ad541404d6"
  },
  "nombre": "Pizza Personalizada",
  "descripcion": "Base de margarita con 4 ingredientes maximo a escoger",
  "imagen": "img/personaliza.jpg",
  "precio": 9.95,
  "categoria": {
    "_id": {
      "$oid": "62e93b23e122c8ad541404d7"
    },
    "nombre": "a tu gusto"
  }
},{
  "_id": {
    "$oid": "62e93b41e122c8ad541404d8"
  },
  "nombre": "Hamburguesa Clasica",
  "descripcion": "Carne vacuna acompañada de pepinillo, queso de cabra fundido, cebolla y mayonesa",
  "imagen": "img/burguer.jpg",
  "precio": 4.95
},{
  "_id": {
    "$oid": "62e93b58e122c8ad541404d9"
  },
  "nombre": "Hamburguesa de Pollo",
  "descripcion": "Carne de pollo  acompañada de pepinillo, queso de cabra fundido, cebolla y mayonesa",
  "imagen": "img/burguer_pollo.jpg",
  "precio": 4.95
},{
  "_id": {
    "$oid": "62e93b72e122c8ad541404da"
  },
  "nombre": "Agua 33cl",
  "descripcion": "Botella de 33cl",
  "imagen": "img/agua.jpg",
  "precio": 1.5
},{
  "_id": {
    "$oid": "62e93b87e122c8ad541404db"
  },
  "nombre": "Coca-Cola 33cl",
  "descripcion": "Lata de 33cl",
  "imagen": "img/cocacola.jpg",
  "precio": 2.5
}]);

db.cliente.drop(); 
db.cliente.insertMany([{
    "_id": {
      "$oid": "62e8dd34e122c8ad54140478"
    },
    "nombre": "Margaret",
    "apellidos": "Moore",
    "direccion": {
      "calle": "Camiño Anguiano",
      "numero": 28,
      "piso": "Ent",
      "puerta": "",
      "cp": 77733,
      "localidad": "Gardelegi",
      "provincia": "Araba/Álava"
    },
    "telefono": 393029409
  },{
    "_id": {
      "$oid": "62e8e017e122c8ad54140479"
    },
    "nombre": "Dorothy",
    "apellidos": "Taylor",
    "direccion": {
      "calle": "Castillejos",
      "numero": 5,
      "piso": "Ent",
      "puerta": 9,
      "cp": 45819,
      "localidad": "Arrazua-ubarrundia",
      "provincia": "Araba/Álava"
    },
    "telefono": 920228082
  },{
    "_id": {
      "$oid": "62e8e049e122c8ad5414047a"
    },
    "nombre": "Mary",
    "apellidos": "Smith",
    "direccion": {
      "calle": "Travessera Paula",
      "numero": 10,
      "piso": 9,
      "puerta": 2,
      "cp": 61334,
      "localidad": "Horno Ciego",
      "provincia": "Albacete"
    },
    "telefono": 994788528
  },{
    "_id": {
      "$oid": "62e8e058e122c8ad5414047d"
    },
    "nombre": "Patricia",
    "apellidos": "Johnson",
    "direccion": {
      "calle": "Plaza Dominguez",
      "numero": 9,
      "piso": 2,
      "puerta": "A",
      "cp": 5948,
      "localidad": "Angostina",
      "provincia": "Araba/Álava"
    },
    "telefono": 617920961
  },{
    "_id": {
      "$oid": "62e8e0b8e122c8ad5414047e"
    },
    "nombre": "Linda",
    "apellidos": "Williams",
    "direccion": {
      "calle": "Travesia Daniela",
      "numero": 16,
      "piso": 27,
      "puerta": "E",
      "cp": 93551,
      "localidad": "Alcudia De Monteagud",
      "provincia": "Almería"
    },
    "telefono": 921053851
}]);

db.tienda.drop();
db.tienda.insertMany([{
    "_id": {
      "$oid": "62e8e86ee122c8ad541404a7"
    },
    "nombre": "Domino's Pizza",
    "direccion": {
      "calle": "Avenida Cuesta",
      "numero": 73,
      "piso": "Ent",
      "puerta": 8,
      "cp": 62464,
      "localidad": "Alcantud",
      "provincia": "Cuenca"
    },
    "trabajadores": [
      {
        "trabajador_id": {
          "$oid": "62e8ec1ae122c8ad541404af"
        },
        "trabajador_nombre": "Mary",
        "trabajador_apellidos": "Smith",
        "trabajador_nif": "994788528",
        "trabajador_telefono": "393029409",
        "trabajador_seccion": "repartidor"
      },
      {
        "trabajador_id": {
          "$oid": "62e8ec23e122c8ad541404b0"
        },
        "trabajador_nombre": "Patricia",
        "trabajador_apellidos": "Johnson",
        "trabajador_nif": "B32871909",
        "trabajador_telefono": "617920961",
        "trabajador_seccion": "cocinero"
      }
    ],
    "orders": [
      {
        "cliente_id": {
          "$oid": "62e8dd34e122c8ad54140478"
        },
        "cliente_orders": [
          {
            "_id": {
              "$oid": "62e8f4e8e122c8ad541404bd"
            },
            "num_pizzas": 3,
            "precio_total": 21.85,
            "tipo": "recogida",
            "fecha_pedido": {
              "$date": {
                "$numberLong": "1649504026000"
              }
            },
            "detalles_producto": [
              {
                "$oid": "62e8e673e122c8ad5414049d"
              },
              {
                "$oid": "62e93a67e122c8ad541404d1"
              },
              {
                "$oid": "62e93a96e122c8ad541404d3"
              }
            ]
          },
          {
            "_id": {
              "$oid": "62e8f4eee122c8ad541404be"
            },
            "num_pizzas": 1,
            "num_bebidas": 1,
            "precio_total": 7.45,
            "tipo": "recogida",
            "fecha_pedido": {
              "$date": {
                "$numberLong": "1654894899000"
              }
            },
            "detalles_producto": [
              {
                "$oid": "62e93a7ee122c8ad541404d2"
              },
              {
                "$oid": "62e93b72e122c8ad541404da"
              }
            ]
          }
        ]
      },
      {
        "cliente_id": {
          "$oid": "62e8e049e122c8ad5414047a"
        },
        "cliente_orders": [
          {
            "_id": {
              "$oid": "62e8f210e122c8ad541404bb"
            },
            "num_hamburguesas": 1,
            "precio_total": 4.95,
            "tipo": "domicilio",
            "fecha_pedido": {
              "$date": {
                "$numberLong": "1660501548000"
              }
            },
            "detalles_envio": {
              "fecha_entrega": {
                "$date": {
                  "$numberLong": "1660505148000"
                }
              },
              "repartidor_id": {
                "$oid": "62e8ec1ae122c8ad541404af"
              }
            },
            "detalles_producto": [
              {
                "$oid": "62e93b58e122c8ad541404d9"
              }
            ]
          }
        ]
      },
      {
        "cliente_id": {
          "$oid": "62e8e058e122c8ad5414047d"
        },
        "cliente_orders": [
          {
            "_id": {
              "$oid": "62e8f555e122c8ad541404c1"
            },
            "num_pizzas": 2,
            "precio_total": 15.9,
            "tipo": "domicilio",
            "fecha_pedido": {
              "$date": {
                "$numberLong": "1655707236000"
              }
            },
            "detalles_envio": {
              "fecha_entrega": {
                "$date": {
                  "$numberLong": "1648097590000"
                }
              },
              "repartidor_id": {
                "$oid": "62e8ec1ae122c8ad541404af"
              }
            },
            "detalles_producto": [
              {
                "$oid": "62e93b1ce122c8ad541404d6"
              },
              {
                "$oid": "62e8e673e122c8ad5414049d"
              }
            ]
          }
        ]
      }
    ]
  },{
    "_id": {
      "$oid": "62e8e94be122c8ad541404a8"
    },
    "nombre": "El palacio de las Pizzas",
    "direccion": {
      "calle": "Plaza Luis",
      "numero": 432,
      "piso": 2,
      "puerta": "E",
      "cp": 16119,
      "localidad": "Herbosa",
      "provincia": "Burgos"
    },
    "trabajadores": [
      {
        "trabajador_id": {
          "$oid": "62e8ecade122c8ad541404b2"
        },
        "trabajador_nombre": "Maria",
        "trabajador_apellidos": "Miller",
        "trabajador_nif": "B32871308",
        "trabajador_telefono": "625715694",
        "trabajador_seccion": "repartidor"
      },
      {
        "trabajador_id": {
          "$oid": "62e8ecb4e122c8ad541404b3"
        },
        "trabajador_nombre": "Susan",
        "trabajador_apellidos": "Wilson",
        "trabajador_nif": "B32821909",
        "trabajador_telefono": "557366384",
        "trabajador_seccion": "cocinero"
      }
    ],
    "orders": [
      {
        "cliente_id": {
          "$oid": "62e8e0b8e122c8ad5414047e"
        },
        "cliente_orders": [
          {
            "_id": {
              "$oid": "62e8f564e122c8ad541404c2"
            },
            "num_hamburguesas": 1,
            "num_pizzas": 1,
            "num_bebidas": 1,
            "precio_total": 13.4,
            "tipo": "domicilio",
            "fecha_pedido": {
              "$date": {
                "$numberLong": "1662989495000"
              }
            },
            "detalles_envio": {
              "fecha_entrega": {
                "$date": {
                  "$numberLong": "1662996695000"
                }
              },
              "repartidor_id": {
                "$oid": "62e8ecade122c8ad541404b2"
              }
            },
            "detalles_producto": [
              {
                "$oid": "62e8e673e122c8ad5414049d"
              },
              {
                "$oid": "62e93b41e122c8ad541404d8"
              },
              {
                "$oid": "62e93b87e122c8ad541404db"
              }
            ]
          }
        ]
      }
    ]
  },{
    "_id": {
      "$oid": "62e8e96ce122c8ad541404a9"
    },
    "nombre": "Pizza Hut",
    "direccion": {
      "calle": "Camino Soliz",
      "numero": 34,
      "piso": 8,
      "puerta": 1,
      "cp": 49993,
      "localidad": "Alda",
      "provincia": "Araba/Álava"
    },
    "trabajadores": [
      {
        "trabajador_id": {
          "$oid": "62e8ea61e122c8ad541404ac"
        },
        "trabajador_nombre": "Margaret",
        "trabajador_apellidos": "Williams",
        "trabajador_nif": "B65920571",
        "trabajador_telefono": "393029409",
        "trabajador_seccion": "repartidor"
      },
      {
        "trabajador_id": {
          "$oid": "62e8eb1be122c8ad541404ad"
        },
        "trabajador_nombre": "Dorothy",
        "trabajador_apellidos": "Taylor",
        "trabajador_nif": "B54798214",
        "trabajador_telefono": "920228082",
        "trabajador_seccion": "cocinero"
      },
      {
        "trabajador_id": {
          "$oid": "62e8eb86e122c8ad541404ae"
        },
        "trabajador_nombre": "Elizabeth",
        "trabajador_apellidos": "Brown",
        "trabajador_nif": "B65998571",
        "trabajador_telefono": "489578216",
        "trabajador_seccion": "repartidor"
      }
    ],
    "orders": [
      {
        "cliente_id": {
          "$oid": "62e8dd34e122c8ad54140478"
        },
        "cliente_orders": [
          {
            "_id": {
              "$oid": "62e8f4e8e122c8ad541404bd"
            },
            "num_pizzas": 3,
            "precio_total": 21.85,
            "tipo": "recogida",
            "fecha_pedido": {
              "$date": {
                "$numberLong": "1649504026000"
              }
            },
            "detalles_producto": [
              {
                "$oid": "62e8e673e122c8ad5414049d"
              },
              {
                "$oid": "62e93a67e122c8ad541404d1"
              },
              {
                "$oid": "62e93a96e122c8ad541404d3"
              }
            ]
          },
          {
            "_id": {
              "$oid": "62e8f4eee122c8ad541404be"
            },
            "num_pizzas": 1,
            "num_bebidas": 1,
            "precio_total": 7.45,
            "tipo": "recogida",
            "fecha_pedido": {
              "$date": {
                "$numberLong": "1654894899000"
              }
            },
            "detalles_producto": [
              {
                "$oid": "62e93a7ee122c8ad541404d2"
              },
              {
                "$oid": "62e93b72e122c8ad541404da"
              }
            ]
          }
        ]
      },
      {
        "cliente_id": {
          "$oid": "62e8e017e122c8ad54140479"
        },
        "cliente_orders": [
          {
            "_id": {
              "$oid": "62e8f501e122c8ad541404bf"
            },
            "num_hamburguesas": 1,
            "num_pizzas": 2,
            "precio_total": 24.85,
            "tipo": "domicilio",
            "fecha_pedido": {
              "$date": {
                "$numberLong": "1654008009000"
              }
            },
            "detalles_envio": {
              "fecha_entrega": {
                "$date": {
                  "$numberLong": "1654015209000"
                }
              },
              "repartidor_id": {
                "$oid": "62e8ea61e122c8ad541404ac"
              }
            },
            "detalles_producto": [
              {
                "$oid": "62e93b41e122c8ad541404d8"
              },
              {
                "$oid": "62e93b1ce122c8ad541404d6"
              },
              {
                "$oid": "62e93a96e122c8ad541404d3"
              }
            ]
          },
          {
            "_id": {
              "$oid": "62e8f507e122c8ad541404c0"
            },
            "num_pizzas": 1,
            "precio_total": 11.95,
            "tipo": "recogida",
            "fecha_pedido": {
              "$date": {
                "$numberLong": "1655066978000"
              }
            },
            "detalles_producto": [
              {
                "$oid": "62e93a96e122c8ad541404d3"
              }
            ]
          }
        ]
      }
    ]
  },{
    "_id": {
      "$oid": "62e8e98fe122c8ad541404aa"
    },
    "nombre": "Pizzamania",
    "direccion": {
      "calle": "Camino Carlota",
      "numero": 130,
      "piso": 1,
      "puerta": "F",
      "cp": 64530,
      "localidad": "Alejos, Los",
      "provincia": "Albacete"
    },
    "trabajadores": [
      {
        "trabajador_id": {
          "$oid": "62e8ec71e122c8ad541404b1"
        },
        "trabajador_nombre": "Jennifer",
        "trabajador_apellidos": "Davis",
        "trabajador_nif": "B54798215",
        "trabajador_telefono": "666761156",
        "trabajador_seccion": "cocinero"
      }
    ]
}]);

