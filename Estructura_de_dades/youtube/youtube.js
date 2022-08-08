db = connect( 'mongodb://localhost' );

/*---------------creacion de db--------------*/
db = db.getSiblingDB("youtube");
db.dropDatabase();
db = db.getSiblingDB("youtube");

/*---------------creacion de colecciones--------------*/

db.usuario.drop();
db.usuario.insertMany([{
  "_id": {
    "$oid": "62f144e1d7b6ce8ae403754e"
  },
  "email": "brendan6@hotmail.com",
  "password": "U5tBwT00!7@D",
  "username": "Leialoha",
  "birthdate": {
    "$date": {
      "$numberLong": "560217600000"
    }
  },
  "sexo": "Hombre",
  "pais": "Sudan",
  "cp": 2853
},{
  "_id": {
    "$oid": "62f1550fd7b6ce8ae403756b"
  },
  "email": "hallie_schuster46@yahoo.com",
  "password": "G3Hp0O744xg@",
  "username": "Leolani",
  "birthdate": {
    "$date": {
      "$numberLong": "336700800000"
    }
  },
  "sexo": "Mujer",
  "pais": "Bangladesh",
  "cp": 88307
},{
  "_id": {
    "$oid": "62f1551bd7b6ce8ae403756c"
  },
  "email": "colten21@yahoo.com",
  "password": "G3Hp0O744xg@",
  "username": "Kapahu",
  "birthdate": {
    "$date": {
      "$numberLong": "1317513600000"
    }
  },
  "sexo": "Mujer",
  "pais": "Nauru",
  "cp": 55598
},{
  "_id": {
    "$oid": "62f15552d7b6ce8ae403756f"
  },
  "email": "arne_stracke27@yahoo.com",
  "password": "95N*H5$tjRqA",
  "username": "Kapahu",
  "birthdate": {
    "$date": {
      "$numberLong": "1317513600000"
    }
  },
  "sexo": "No binario",
  "pais": "Saint Lucia",
  "cp": 9797
},{
  "_id": {
    "$oid": "62f15578d7b6ce8ae4037570"
  },
  "email": "katrine12@gmail.com",
  "password": "l4FZ5c6*YOI-",
  "username": "Pomaikaʻi ",
  "birthdate": {
    "$date": {
      "$numberLong": "970704000000"
    }
  },
  "sexo": " Mujer",
  "pais": "South Georgia and the South Sandwich Islands",
  "cp": 78256
}]);

db.video.drop(); 
db.video.insertMany([{
  "_id": {
    "$oid": "62f15184d7b6ce8ae4037558"
  },
  "title": "The Cats with the Amber Widows",
  "description": "Ghosts dots cherry Blinky Pac-Man Power Pellets fruit. Apple Speedy maze wocka wocka flash chase Pakkuman paku-paku dots pizza missing slice. Pac-Man Namco Toru Iwatani Pac-Man Fever maze dots. Poison ivy grew through the fence they said was impenetrable. Orange fickle blue guy maze chase.",
  "sizeMb": 3.16,
  "fileName": "cats_amber",
  "duration": "00:03:20",
  "thumbnailURL": "./cats.jps",
  "views": "809",
  "tags": [
    {
      "tag_id": {
        "$oid": "62f19273c41793ec4d09fa9b"
      },
      "tag": "cats"
    },
    {
      "tag_id": {
        "$oid": "62f19273c41793ec4d09fa9b"
      },
      "tag": "meowing"
    },
    {
      "tag_id": {
        "$oid": "62f19273c41793ec4d09fa9c"
      },
      "tag": "sounds cats love"
    },
    {
      "tag_id": {
        "$oid": "62f19273c41793ec4d09fa9d"
      },
      "tag": "things cats hate"
    }
  ],
  "state": "publicado",
  "publishedBy": {
    "$oid": "62f144e1d7b6ce8ae403754e"
  },
  "dateTime": "2014-11-19T00:00:00.000+00:00",
  "comments": [
    {
      "comment_id": {
        "$oid": "62f15a0849ff191f99cea087"
      },
      "text": "I hear that Nancy is very pretty. Clyde blue enemies flash dots wocka maze monsters ghosts red chaser. Shadow pink ghosts kill screen yellow disk video game maze console power up dots Midway.",
      "dateTime": {
        "$date": {
          "$numberLong": "1416355380000"
        }
      },
      "createdBy": {
        "$oid": "62f1550fd7b6ce8ae403756b"
      },
      "likes": [
        {
          "dateTime": {
            "$date": {
              "$numberLong": "1416355500000"
            }
          },
          "user_id": {
            "$oid": "62f1551bd7b6ce8ae403756c"
          }
        }
      ],
      "dislikes": [
        {
          "dateTime": {
            "$date": {
              "$numberLong": "1416355320000"
            }
          },
          "user_id": {
            "$oid": "62f15578d7b6ce8ae4037570"
          }
        }
      ]
    }
  ],
  "likes": [
    {
      "dateTime": {
        "$date": {
          "$numberLong": "1416355380000"
        }
      },
      "user_id": {
        "$oid": "62f1550fd7b6ce8ae403756b"
      }
    },
    {
      "dateTime": {
        "$date": {
          "$numberLong": "1416355500000"
        }
      },
      "user_id": {
        "$oid": "62f1551bd7b6ce8ae403756c"
      }
    }
  ],
  "dislikes": [
    {
      "dateTime": {
        "$date": {
          "$numberLong": "1416355320000"
        }
      },
      "user_id": {
        "$oid": "62f15578d7b6ce8ae4037570"
      }
    }
  ]
},{
  "_id": {
    "$oid": "62f18d2c58a7fc773632f3af"
  },
  "title": "Mountain in front of the Devils",
  "sizeMb": 1.05,
  "fileName": "mountain_front",
  "duration": "00:23:10",
  "thumbnailURL": "./mountain.jpg",
  "views": "485",
  "state": "oculto",
  "publishedBy": {
    "$oid": "62f144e1d7b6ce8ae403754e"
  },
  "dateTime": "2014-11-19T00:00:00.000+00:00",
  "dislikes": [
    {
      "dateTime": {
        "$date": {
          "$numberLong": "1596261113000"
        }
      },
      "user_id": {
        "$oid": "62f1550fd7b6ce8ae403756b"
      }
    }
  ]
},{
  "_id": {
    "$oid": "62f18e1358a7fc773632f3b2"
  },
  "title": "Irons in front of the Devil",
  "description": "Ambusher maze wocka wocka fruit Pac-Man Fever arcade Galaxian Boss power up intermission. I hear that Nancy is very pretty. He hated that he loved what she hated about hate. Ghosts dots cherry Blinky Pac-Man Power Pellets fruit. Don't put peanut butter on the dog's nose.",
  "sizeMb": 7.45,
  "fileName": "irons",
  "duration": "1:01:00",
  "thumbnailURL": "./iron.jpg",
  "views": "1000",
  "tags": [
    {
      "tag_id": {
        "$oid": "62f19273c41793ec4d09fa9d"
      },
      "tag": "things cats hate"
    },
    {
      "tag_id": {
        "$oid": "62f19273c41793ec4d09fa9f"
      },
      "tag": "devil"
    }
  ],
  "state": "privado",
  "publishedBy": {
    "$oid": "62f1550fd7b6ce8ae403756b"
  },
  "dateTime": "2022-03-24 18:07:29",
  "comments": [
    {
      "comment_id": {
        "$oid": "62f15a0849ff191f99cea087"
      },
      "text": "I hear that Nancy is very pretty. Clyde blue enemies flash dots wocka maze monsters ghosts red chaser. Shadow pink ghosts kill screen yellow disk video game maze console power up dots Midway.",
      "dateTime": {
        "$date": {
          "$numberLong": "1416355380000"
        }
      },
      "createdBy": {
        "$oid": "62f1550fd7b6ce8ae403756b"
      },
      "likes": [
        {
          "dateTime": {
            "$date": {
              "$numberLong": "1416355500000"
            }
          },
          "user_id": {
            "$oid": "62f1551bd7b6ce8ae403756c"
          }
        }
      ],
      "dislikes": [
        {
          "dateTime": {
            "$date": {
              "$numberLong": "1416355320000"
            }
          },
          "user_id": {
            "$oid": "62f15578d7b6ce8ae4037570"
          }
        }
      ]
    }
  ],
  "likes": [
    {
      "dateTime": {
        "$date": {
          "$numberLong": "1585762637000"
        }
      },
      "user_id": {
        "$oid": "62f15552d7b6ce8ae403756f"
      }
    }
  ],
  "dislikes": [
    {
      "dateTime": {
        "$date": {
          "$numberLong": "1622635112000"
        }
      },
      "user_id": {
        "$oid": "62f144e1d7b6ce8ae403754e"
      }
    },
    {
      "dateTime": {
        "$date": {
          "$numberLong": "1634128489000"
        }
      },
      "user_id": {
        "$oid": "62f15578d7b6ce8ae4037570"
      }
    }
  ]
}]);

db.canal.drop();
db.canal.insertMany([{
  "_id": {
    "$oid": "62f1538fd7b6ce8ae4037568"
  },
  "name": "Humanu",
  "description": "La mejor alternativa al diazepam",
  "dateTime": {
    "$date": {
      "$numberLong": "1585267200000"
    }
  },
  "createdBy": {
    "$oid": "62f144e1d7b6ce8ae403754e"
  },
  "suscriptors": [
    {
      "$oid": "62f1550fd7b6ce8ae403756b"
    },
    {
      "$oid": "62f1551bd7b6ce8ae403756c"
    },
    {
      "$oid": "62f15552d7b6ce8ae403756f"
    }
  ]
},{
  "_id": {
    "$oid": "62f15680d7b6ce8ae403757b"
  },
  "name": "Werevertumorro",
  "dateTime": {
    "$date": {
      "$numberLong": "1658448000000"
    }
  },
  "createdBy": {
    "$oid": "62f1550fd7b6ce8ae403756b"
  },
  "suscriptors": [
    {
      "$oid": "62f15552d7b6ce8ae403756f"
    }
  ]
},{
  "_id": {
    "$oid": "62f1568bd7b6ce8ae403757c"
  },
  "name": "Videópatas",
  "dateTime": {
    "$date": {
      "$numberLong": "1617062400000"
    }
  },
  "createdBy": {
    "$oid": "62f1550fd7b6ce8ae403756b"
  },
  "suscriptors": [
    {
      "$oid": "62f1550fd7b6ce8ae403756b"
    }
  ],
  "description": "Videojuegos en la vida real, sketches, series y cortometrajes. "
}]);

db.playlist.drop();
db.playlist.insertMany([{
  "_id": {
    "$oid": "62f18b6858a7fc773632f3a0"
  },
  "name": "The Bubbly Bay",
  "dateTime": {
    "$date": {
      "$numberLong": "1579305600000"
    }
  },
  "createdBy": {
    "$oid": "62f144e1d7b6ce8ae403754e"
  },
  "state": "publica",
  "videos_id": [
    {
      "$oid": "62f15184d7b6ce8ae4037558"
    },
    {
      "$oid": "62f18d2c58a7fc773632f3af"
    }
  ]
},{
  "_id": {
    "$oid": "62f18c3258a7fc773632f3a5"
  },
  "name": "Evening Cherry",
  "dateTime": {
    "$date": {
      "$numberLong": "1579392000000"
    }
  },
  "createdBy": {
    "$oid": "62f144e1d7b6ce8ae403754e"
  },
  "state": "publica",
  "videos_id": [
    {
      "$oid": "62f18d2c58a7fc773632f3af"
    }
  ]
},{
  "_id": {
    "$oid": "62f18c5a58a7fc773632f3a6"
  },
  "name": "Fierce Giant",
  "dateTime": {
    "$date": {
      "$numberLong": "1581206400000"
    }
  },
  "createdBy": {
    "$oid": "62f1551bd7b6ce8ae403756c"
  },
  "state": "privada",
  "videos_id": [
    {
      "$oid": "62f15184d7b6ce8ae4037558"
    },
    {
      "$oid": "62f18d2c58a7fc773632f3af"
    },
    {
      "$oid": "62f18e1358a7fc773632f3b2"
    }
  ]
}]);
