let characters = [
    {
        id: 1,
        name: "Bebé Daisy",
        genero: "Female",
        especie: "Human",
        grupo: "very light",
        img: "https://i.pinimg.com/474x/af/f8/a0/aff8a0fcc3fc2a27b3e4518d3219f6fe--mario-baby.jpg"
    },
    {
        id: 2,
        name: "Bebé Luigi",
        genero: "Male",
        especie: "Human",
        grupo: "very light",
        img: "https://i.pinimg.com/originals/c8/4d/1f/c84d1f11741ee80b7bbda79a449917ab.png"
    },
    {
        id: 3,
        name: "Bebé Mario",
        genero: "Male",
        especie: "Human",
        grupo: "very light",
        img: "https://i.pinimg.com/736x/82/a3/8b/82a38b5cf09c6cc2d7d287b68e2b6910.jpg"
    },
    {
        id: 4,
        name: "Bebé Peach",
        genero: "Female",
        especie: "Human",
        grupo: "very light",
        img: "https://i.pinimg.com/474x/e5/7e/83/e57e83c74e1b69685f12af39feb4aaf8.jpg"
    },
    {
        id: 5,
        name: "Yoshi",
        genero: "Male",
        especie: "Yoshi",
        grupo: "medium light",
        img: "https://www.clarin.com/img/2022/10/23/el-yoshi-actual-foto-super___VrNvcIwkv_720x0__1.jpg"
    },
    {
        id: 6,
        name: "Bowser Jr",
        genero: "Male",
        especie: "Koopa",
        grupo: "very heavy",
        img: "http://pm1.narvii.com/6446/06146cc96ae0b62c907411f5a1cd482f6d0fd1ac_00.jpg"
    },
    {
        id: 7,
        name: "Bowsitos/Dry Bowser",
        genero: "Male",
        especie: "Koopa",
        grupo: "heavy",
        img: "http://pm1.narvii.com/6968/fc60a7408e5a7cd7c74c6d4e5b56da0595f4fd84r1-720-869v2_uhq.jpg",
    },
    {
        id: 8,
        name: "Luigi",
        genero: "Male",
        especie: "Human",
        grupo: "medium",
        img: "https://www.nintenderos.com/wp-content/uploads/2009/08/luigi-nintendo.jpg",
    },
    {
        id: 9,
        name: "Donkey Kong",
        genero: "Male",
        especie: "Gorila",
        grupo: "heavy light",
        img: "https://www.dojoplay.it/wp-content/uploads/2015/05/Donkey_Kong.jpg"
    },
    {
        id: 10,
        name: "Mario",
        genero: "Male",
        especie: "Human",
        grupo: "medium heavy",
        img: "https://www.kissfm.es/wp-content/uploads/2022/03/mario-bros.jpg"
    },
    {
        id: 11,
        name: "Daisy",
        genero: "Female",
        especie: "Human",
        grupo: "medium light",
        img: "https://i.pinimg.com/originals/d0/c1/c4/d0c1c4d2155031fd73fb3e6290cc654d.png"
    },
    {
        id: 12,
        name: "Peach",
        genero: "Female",
        especie: "Human",
        grupo: "medium light",
        img: "https://i.pinimg.com/736x/99/79/61/997961bbb56052f93398ca815ec45f4a.jpg"
    },
    {
        id: 13,
        name: "Huesitos",
        genero: "Male",
        especie: "Koopa",
        grupo: "very light",
        img: "https://pbs.twimg.com/media/FRg2uNzWUAEByjb.jpg:large"
    },
    {
        id: 14,
        name: "Shy Guy",
        genero: "Male",
        especie: "Koopa",
        grupos: "light",
        img: "https://imagen.nextn.es/wp-content/uploads/2016/05/1605-09-Shy-Guy.jpg?strip=all&lossy=1&ssl=1"
    },
    {
        id: 15,
        name: "Toad",
        genero: "Male",
        especie: "Toad",
        grupo: "light",
        img: "https://media.vandalimg.com/common/1200x800/2014107135054.jpg"
    },
    {
        id: 16,
        name: "Toadette",
        genero: "Female",
        especie: "Toad",
        grupo: "light",
        img: "https://cdn.vox-cdn.com/thumbor/4crzBgRaelZaPl9I2fVLWKQk-IM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22763363/toadette.jpg"
    },
    {
        id: 17,
        name: "Waluigi",
        genero: "Male",
        especie: "Human",
        grupo: "heavy lights",
        img: "https://i.pinimg.com/originals/8f/a6/6d/8fa66d65def49b476dd0a0f168166033.png"
    },
    {
        id: 18,
        name: "Wario",
        genero: "Male",
        especie: "Human",
        grupo: "heavy",
        img: "https://upload.wikimedia.org/wikipedia/ca/a/ac/Wario.jpg"
    },
    {
        id: 19,
        name: "Wendy",
        genero: "Female",
        especie: "Koopa",
        grupo: "light",
        img: "https://www.kindpng.com/picc/m/331-3319364_super-mario-bros-wendy-png-download-wendy-o.png"
    }
    
];

export const getCharacters = () => characters;

export const getCharacter = id => characters.find(character =>
    character.id.toString() === id);

export const deleteCharacter = async (id) => characters = characters.filter(character => character.id !== id);

//export const updateCharacter = async (id, characterToUpdate) => {
    //getCharacter(id) = {id, ...characterToUpdate};
//}