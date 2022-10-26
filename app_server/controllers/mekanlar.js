var express = require('express');
var router = express.Router();

const anaSayfa = function(req, res, next) {
    res.render('anasayfa', 
    { "baslik": 'Ana Sayfa',
    "sayfaBaslik":{
      "siteAd":"MekanBul",
      "slogan":"Civardaki Mekanları Keşfet !"
    },
    "mekanlar":[
      {
        "ad":"Barida Cam Kafe",
        "adres":"SDÜ Batı Kampüsü",
        "puan":"4",
        "mesafe":"2km",
        "imkanlar":["Kahve","Çay","Pasta"]

      },
      {
        "ad":"Gloria",
        "adres":"SDÜ Doğu Kampüsü",
        "puan":"4",
        "mesafe":"2km",
        "imkanlar":["Kahve","Çay","Pasta"]

      }




    ]

  
  });
  }

  const mekanBilgisi = function(req, res) {
    res.render('mekanbilgisi', 
    {
      "baslik": "Mekan Bilgisi",
      "mekanBaslik":"Starbucks",
      "mekanDetay":{
        "ad":"Starbucks",
        "adres": "Centrum Garden AVM",
        "puan":"4",
        "imkanlar": ["Dünya Kahveleri","Kekler","Pastalar"],
        "koordinatlar": {
          "enlem":"37.7",
          "boylam":"30.5"
        },
        "saatler":[
          {
            "gunler":"Pazartesi-Cuma",
            "acilis":"9:00",
            "kapanis":"23:00",
            "kapali":false

          },

          {
            "gunler":"Cumartesi-Pazar",
            "acilis":"10:00",
            "kapanis":"22:00",
            "kapali":false


        }



      
      ],
      


    
      "yorumlar":[
        {
          "yorumYapan":"Fevzi Barış Demirel",
          "puan":"3",
          "tarih":"20 Ekim 2022",
          "yorumMetni":"Çevredeki en iyi mekan"

        }
        



      ]



    }

  
  
  });
  }

  const yorumEkle = function(req, res,) {
    res.render('yorumekle', { title: 'Yorum ekle' });
  }




  module.exports={

    anaSayfa,
    mekanBilgisi,
    yorumEkle


    
  }