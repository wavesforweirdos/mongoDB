db = connect( 'mongodb://localhost' );

/*---------------creacion de db--------------*/
db = db.getSiblingDB("spotify");
db.dropDatabase();
db = db.getSiblingDB("spotify");

/*---------------creacion de colecciones--------------*/

db.music.drop();
db.music.insertMany([{
  "_id": {
    "$oid": "62f238baced7065922181258"
  },
  "artist_name": "The Tyets",
  "artist_imgURL": "img/thetyets.jpg",
  "albums": [
    {
      "album_id": {
        "$oid": "62f23a8c92ea60325b3d428f"
      },
      "album_name": "2022 - Sencillo",
      "album_year": "2022",
      "cover_imgURL": "img/sencillo22.jpg",
      "songs": [
        {
          "song_id": {
            "$oid": "62f23a9292ea60325b3d4290"
          },
          "title": "De l'1 al que",
          "duration": "0,001793981",
          "reproductions": 1
        },
        {
          "song_id": {
            "$oid": "62f23aa892ea60325b3d4292"
          },
          "title": "Tot el que vull",
          "duration": "0,002256944",
          "reproductions": 98
        },
        {
          "song_id": {
            "$oid": "62f23ab892ea60325b3d4294"
          },
          "title": "Hamaking",
          "duration": "0,002337963",
          "reproductions": 2
        }
      ]
    }
  ],
  "artistRelated": [
    {
      "$oid": "62f238baced706592218125d"
    },
    {
      "$oid": "62f238baced706592218125f"
    }
  ]
},{
  "_id": {
    "$oid": "62f238baced706592218125b"
  },
  "artist_name": "Gil Scott-Heron",
  "artist_imgURL": "img/scott-heron.jpg",
  "albums": [
    {
      "album_id": {
        "$oid": "62f23ac192ea60325b3d4295"
      },
      "album_name": "Johannesburg",
      "album_year": "2021",
      "cover_imgURL": "img/johannes.jpg",
      "songs": [
        {
          "song_id": {
            "$oid": "62f23ac392ea60325b3d4296"
          },
          "title": "The bottle",
          "duration": "0,006284722",
          "reproductions": 58
        }
      ]
    }
  ]
},{
  "_id": {
    "$oid": "62f238baced706592218125c"
  },
  "artist_name": "The Philadelphia International All-Stars",
  "artist_imgURL": "img/philadelphia.jpg",
  "albums": [
    {
      "album_id": {
        "$oid": "62f23acb92ea60325b3d4297"
      },
      "album_name": "Let's Clean Up the Ghetto",
      "album_year": "2015",
      "cover_imgURL": "img/cleanup.jpg",
      "songs": [
        {
          "song_id": {
            "$oid": "62f23ace92ea60325b3d4298"
          },
          "title": "Let's Clean Up the Ghetto - 12'' Version",
          "duration": "0,002407407",
          "reproductions": 56
        }
      ]
    }
  ]
},{
  "_id": {
    "$oid": "62f238baced706592218125d"
  },
  "artist_name": "El Columpio Asesino",
  "artist_imgURL": "img/columpio.jpg",
  "albums": [
    {
      "album_id": {
        "$oid": "62f23ad792ea60325b3d4299"
      },
      "album_name": "Toro (Andre VII Remix)",
      "album_year": "2021",
      "cover_imgURL": "img/andrevii.jpg",
      "songs": [
        {
          "song_id": {
            "$oid": "62f23ada92ea60325b3d429a"
          },
          "title": "Toro (Andre VII Remix)",
          "duration": "0,005",
          "reproductions": 9
        }
      ]
    }
  ]
},{
  "_id": {
    "$oid": "62f238baced706592218125e"
  },
  "artist_name": "Dj Mega Jay",
  "artist_imgURL": "img/djmega.jpg",
  "albums": [
    {
      "album_id": {
        "$oid": "62f23ae292ea60325b3d429b"
      },
      "album_name": "Cintura",
      "album_year": "2020",
      "cover_imgURL": "img/cintura.jpg",
      "songs": [
        {
          "song_id": {
            "$oid": "62f23ae592ea60325b3d429c"
          },
          "title": "Cintura",
          "duration": "0,001388889",
          "reproductions": 16
        }
      ]
    }
  ]
},{
  "_id": {
    "$oid": "62f238baced706592218125f"
  },
  "artist_name": "Zzoilo",
  "artist_imgURL": "img/zzoilo.jpg",
  "albums": [
    {
      "album_id": {
        "$oid": "62f23aeb92ea60325b3d429d"
      },
      "album_name": "Marches",
      "album_year": "2017",
      "cover_imgURL": "img/marches.jpg",
      "songs": [
        {
          "song_id": {
            "$oid": "62f23aed92ea60325b3d429e"
          },
          "title": "Matches",
          "duration": "0,002430556",
          "reproductions": 0
        }
      ]
    }
  ]
},{
  "_id": {
    "$oid": "62f238baced7065922181260"
  },
  "artist_name": "ACRAZE",
  "artist_imgURL": "img/acraze.jpg",
  "albums": [
    {
      "album_id": {
        "$oid": "62f23af492ea60325b3d429f"
      },
      "album_name": "Do It To It",
      "album_year": "2020",
      "cover_imgURL": "img/doittoti.jpg",
      "songs": [
        {
          "song_id": {
            "$oid": "62f23af792ea60325b3d42a0"
          },
          "title": "Do It To It",
          "duration": "0,002997685",
          "reproductions": 28
        }
      ]
    }
  ]
},{
  "_id": {
    "$oid": "62f238baced7065922181261"
  },
  "artist_name": "Two Feet",
  "artist_imgURL": "img/2feet.jpg",
  "albums": [
    {
      "album_id": {
        "$oid": "62f23afd92ea60325b3d42a1"
      },
      "album_name": "First Steps",
      "album_year": "2018",
      "cover_imgURL": "img/firststeps.jpg",
      "songs": [
        {
          "song_id": {
            "$oid": "62f23b0092ea60325b3d42a2"
          },
          "title": "Go Fuck Yourself",
          "duration": "0,006273148",
          "reproductions": 2
        }
      ]
    }
  ]
},{
  "_id": {
    "$oid": "62f238baced7065922181262"
  },
  "artist_name": "Tono",
  "artist_imgURL": "img/tono.jpg",
  "albums": [
    {
      "album_id": {
        "$oid": "62f23b0792ea60325b3d42a3"
      },
      "album_name": "Que esto dure pa' siempre",
      "album_year": "2017",
      "cover_imgURL": "img/durepasiempre.jpg",
      "songs": [
        {
          "song_id": {
            "$oid": "62f23b0a92ea60325b3d42a4"
          },
          "title": "Que esto dure pa' siempre",
          "duration": "0,001145833",
          "reproductions": 6
        }
      ]
    }
  ]
},{
  "_id": {
    "$oid": "62f23dbd92ea60325b3d42b0"
  }
},{
  "_id": {
    "$oid": "62f23dbd92ea60325b3d42b1"
  }
}]);

db.user.drop(); 
db.user.insertMany([{
  "_id": {
    "$oid": "62f21fddced70659221811d8"
  },
  "mail": "brendan6@hotmail.com",
  "pasword": "G3Hp0O744xg@",
  "username": "Leialoha",
  "birthDate": {
    "$date": {
      "$numberLong": "560217600000"
    }
  },
  "sexe": "mujer",
  "pais": "Sudan",
  "cp": 2853,
  "type": "premium",
  "playlists": [
    {
      "$oid": "62f23269ced70659221811f8"
    },
    {
      "$oid": "62f23335ced7065922181203"
    }
  ],
  "favArtists": [
    {
      "$oid": "62f238baced7065922181258"
    }
  ],
  "favAlbums": [
    {
      "$oid": "62f23a8c92ea60325b3d428f"
    },
    {
      "$oid": "62f23a8c92ea60325b3d428f"
    }
  ],
  "favSongs": [
    {
      "$oid": "62f23a9292ea60325b3d4290"
    },
    {
      "$oid": "62f23aa892ea60325b3d4292"
    },
    {
      "$oid": "62f23aa892ea60325b3d4294"
    }
  ]
},{
  "_id": {
    "$oid": "62f22593ced70659221811eb"
  },
  "mail": "hallie_schuster46@yahoo.com",
  "pasword": "3Z%&E7^90Uz5",
  "username": "Leolani ",
  "birthDate": {
    "$date": {
      "$numberLong": "336700800000"
    }
  },
  "sexe": "hombre",
  "pais": "Bangladesh",
  "cp": 88307,
  "type": "free"
},{
  "_id": {
    "$oid": "62f225e3ced70659221811ec"
  },
  "mail": "colten21@yahoo.com",
  "pasword": "95N*H5$tjRqA",
  "username": "Kapahu ",
  "birthDate": {
    "$date": {
      "$numberLong": "1317506400000"
    }
  },
  "sexe": "hombre",
  "pais": "Nauru",
  "cp": 55598,
  "type": "premium"
}]);

db.subscription.drop();
db.subscription.insertMany([{
  "_id": {
    "$oid": "62f22247ced70659221811e0"
  },
  "user_id": {
    "$oid": "62f21fddced70659221811d8"
  },
  "startDate": {
    "$date": {
      "$numberLong": "1596326400000"
    }
  },
  "renewalDate": {
    "$date": {
      "$numberLong": "1627855200000"
    }
  },
  "payment": {
    "type": "credit card",
    "number": {
      "$numberLong": "5011005259222565"
    },
    "month": 12,
    "year": 2023,
    "cvv": 385
  },
  "orders": [
    {
      "date": {
        "$date": {
          "$numberLong": "1579474800000"
        }
      },
      "order_id": {
        "$oid": "62f22506ced70659221811e1"
      },
      "totalPrice": 10
    },
    {
      "date": {
        "$date": {
          "$numberLong": "1611097200000"
        }
      },
      "order_id": {
        "$oid": "62f2250cced70659221811e2"
      },
      "totalPrice": 10
    },
    {
      "date": {
        "$date": {
          "$numberLong": "1642633200000"
        }
      },
      "order_id": {
        "$oid": "62f22510ced70659221811e3"
      },
      "totalPrice": 10
    }
  ]
},{
  "_id": {
    "$oid": "62f22609ced70659221811ef"
  },
  "user_id": {
    "$oid": "62f225e3ced70659221811ec"
  },
  "startDate": {
    "$date": {
      "$numberLong": "1577145600000"
    }
  },
  "renewalDate": {
    "$date": {
      "$numberLong": "1671836400000"
    }
  },
  "payment": {
    "type": "paypal",
    "username_paypal": "Adesin"
  },
  "orders": [
    {
      "date": {
        "$date": {
          "$numberLong": "1608764400000"
        }
      },
      "order_id": {
        "$oid": "62f226b5ced70659221811f0"
      },
      "totalPrice": 5
    },
    {
      "date": {
        "$date": {
          "$numberLong": "1640300400000"
        }
      },
      "order_id": {
        "$oid": "62f226b8ced70659221811f1"
      },
      "totalPrice": 5
    }
  ]
}]);

db.playlist.drop();
db.playlist.insertMany([{
  "_id": {
    "$oid": "62f23269ced70659221811f8"
  },
  "user_id": {
    "$oid": "62f21fddced70659221811d8"
  },
  "name": "El tiempo que curas",
  "songs": [
    {
      "user_id": {
        "$oid": "62f21fddced70659221811d8"
      },
      "song_id": {
        "$oid": "62f23aa892ea60325b3d4292"
      }
    },
    {
      "user_id": {
        "$oid": "62f22593ced70659221811eb"
      },
      "song_id": {
        "$oid": "62f23ab892ea60325b3d4294"
      }
    }
  ],
  "dateTime": {
    "$date": {
      "$numberLong": "1629525355000"
    }
  },
  "state": {
    "id": "active"
  }
},{
  "_id": {
    "$oid": "62f2332cced7065922181202"
  },
  "user_id": {
    "$oid": "62f21fddced70659221811d8"
  },
  "name": "La traca que suena",
  "songs": [],
  "dateTime": {
    "$date": {
      "$numberLong": "1637700000000"
    }
  },
  "state": {
    "id": "active"
  }
},{
  "_id": {
    "$oid": "62f23335ced7065922181203"
  },
  "user_id": {
    "$oid": "62f225e3ced70659221811ec"
  },
  "name": "FOCUS",
  "songs": [],
  "dateTime": {
    "$date": {
      "$numberLong": "1639922561000"
    }
  },
  "state": {
    "id": "active"
  }
},{
  "_id": {
    "$oid": "62f23340ced7065922181204"
  },
  "user_id": {
    "$oid": "62f225e3ced70659221811ec"
  },
  "name": "Pistas de Shazam",
  "songs": [],
  "dateTime": {
    "$date": {
      "$numberLong": "1653141326000"
    }
  },
  "state": {
    "id": "deleted",
    "deletedDate": {
      "$date": {
        "$numberLong": "1655819726000"
      }
    }
  }
},{
  "_id": {
    "$oid": "62f23348ced7065922181205"
  },
  "user_id": {
    "$oid": "62f21fddced70659221811d8"
  },
  "name": "Afrobeatz",
  "songs": [],
  "dateTime": {
    "$date": {
      "$numberLong": "1655152448000"
    }
  },
  "state": {
    "id": "active"
  }
}]);
