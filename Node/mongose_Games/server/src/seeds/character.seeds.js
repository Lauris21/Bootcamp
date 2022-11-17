const mongoose = require("mongoose");

const Character = require("../models/character.model");

const character = [
  {
    clase: "Bárbaro",
    simbol:
      "https://img2.freepng.es/20190313/xse/kisspng--5c8955dc8549c4.853502091552504284546.jpg",
    recurso: "furia",
    skills: "fuerza y dedicadeza",
    posterFemale:
      "https://www.diablonext.com/wp-content/uploads/2020/05/female-barbarian.19645.jpg",
    posterMale:
      "https://img2.goodfon.com/wallpaper/nbig/a/e9/barbarian-diablo-3-voin.jpg",
  },
  {
    clase: "Médico brujo",
    simbol:
      "http://4.bp.blogspot.com/-5UFkR4TXhKQ/T8TpN1ZqRdI/AAAAAAAACUs/sVKjzTMcr_w/s1600/diablo3-witch-doctor-symbol-coloring.jpg",
    recurso: "maná",
    skills: "invocación, veneno y manejo de los muertos",
    posterFemale: "https://images.alphacoders.com/258/258063.jpg",
    posterMale:
      "https://blzmedia-a.akamaihd.net/d3/media/artwork/artwork-witch-doctor01-large.jpg",
  },
  {
    clase: "Mago",
    simbol: "https://static.wikia.nocookie.net/diablo/images/d/de/Escudow.png",
    recurso: "poder arcano",
    skills: "magia pura con conjuros de viento",
    posterFemale:
      "https://i.pinimg.com/originals/b5/fd/f3/b5fdf3f1a849d06f3d9f3667d7ed00d3.jpg",
    posterMale:
      "https://c4.wallpaperflare.com/wallpaper/257/218/484/mage-fantasy-art-books-artwork-realistic-diablo-iii-swords-1920x1440-abstract-fantasy-hd-art-wallpaper-preview.jpg",
  },
  {
    clase: "Monje",
    simbol:
      "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/gamer.batanga.com/files/Diablo-III-El-Monje-es-el-nuevo-personaje-03.jpg",
    recurso: "espíritu",
    skills: "ataque cuerpo a cuerpo y las artes marciales",
    posterFemale:
      "https://c4.wallpaperflare.com/wallpaper/679/789/318/diablo-monks-monk-diablo-wallpaper-preview.jpg",
    posterMale:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1e6a7415-9169-47f9-89e7-0088152a190e/d79wqqs-57054223-3385-441c-91f0-572b4881f3a0.jpg",
  },
  {
    clase: "Cazador de demonios",
    simbol:
      "https://w7.pngwing.com/pngs/717/751/png-transparent-diablo-iii-world-of-warcraft-legion-coat-of-arms-crest-icon-warrior-game-heraldry-weapon-thumbnail.png",
    recurso: "odio y disciplina",
    skills: "ataque a distancia con un gran manejo de ballestas",
    posterFemale:
      "https://www.diablonext.com/wp-content/uploads/2020/05/demon-hunter-concept.17096.jpg",
    posterMale:
      "https://www.diablonext.com/wp-content/uploads/2020/05/dh-ranger-evolution.17633.jpg",
  },
  {
    clase: "Cruzado",
    simbol:
      "https://eu.diablo3.blizzard.com/static/images/hero/crusader/crest.png",
    recurso: "cólera",
    skills: "ataque cuerpo a cuerpo con gran dominio de armas y escudos",
    posterFemale:
      "https://p4.wallpaperbetter.com/wallpaper/852/173/111/diablo-3-reaper-of-souls-women-sword-chain-wallpaper-preview.jpg",
    posterMale:
      "https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2018/10/diablo_3_crossplay.jpg",
  },
  {
    clase: "Nigromante",
    simbol:
      "https://img.favpng.com/5/2/16/world-of-warcraft-legion-world-of-warcraft-battle-for-azeroth-diablo-iii-reaper-of-souls-demon-hunter-png-favpng-vJsmM5MghEb99vfEJPkdVFSfU.jpg",
    recurso: "esencia",
    skills: "habilidades de sangre que domina a los muertos",
    posterFemale:
      "https://w0.peakpx.com/wallpaper/931/324/HD-wallpaper-diablo-immortal-necromancer-female.jpg",
    posterMale:
      "https://static1-es.millenium.gg/articles/7/47/96/7/@/259212-diablo-immortal-necromancien-orig-1-article_image_t-1.jpg",
  },
];

const characterToDB = character.map((charac) => new Character(charac));

mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.k5mu6an.mongodb.net/diablo?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(async () => {
    const characterRecord = await Character.find();
    if (characterRecord.length) {
      await Character.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Character.insertMany(characterToDB);
    console.log("DataBase Created");
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());
