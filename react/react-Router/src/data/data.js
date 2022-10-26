let characters = [
    {
        id: 1,
        name: "Bebé Daisy",
        genero: "Female",
        especie: "Human",
        grupo: "very light",
        img: "https://static.wikia.nocookie.net/mario/images/0/0f/BabyDaisy.png/revision/latest?cb=20111211012626&path-prefix=es"
    },
    {
        id: 2,
        name: "Bebé Luigi",
        genero: "Male",
        especie: "Human",
        grupo: "very light",
        img: "https://static.wikia.nocookie.net/mario/images/3/35/Beb%C3%A9_Luigi.png/revision/latest/scale-to-width-down/638?cb=20110218153245&path-prefix=es"
    },
    {
        id: 3,
        name: "Bebé Mario",
        genero: "Male",
        especie: "Human",
        grupo: "very light",
        img: "https://static.wikia.nocookie.net/mario/images/e/e6/Beb%C3%A9_Mario_MSS.PNG/revision/latest?cb=20101123054153&path-prefix=es"
    },
    {
        id: 4,
        name: "Bebé Peach",
        genero: "Female",
        especie: "Human",
        grupo: "very light",
        img: "https://static.wikia.nocookie.net/mario/images/9/97/Beb%C3%A9_Peach.png/revision/latest?cb=20100914005605&path-prefix=es"
    },
    {
        id: 5,
        name: "Yoshi",
        genero: "Male",
        especie: "Yoshi",
        grupo: "medium light",
        img: "https://static.wikia.nocookie.net/mario/images/4/4d/Yoshi_-_Mario_Party_10.png/revision/latest/scale-to-width-down/653?cb=20171012174642&path-prefix=es"
    },
    {
        id: 6,
        name: "Bowser Jr",
        genero: "Male",
        especie: "Koopa",
        grupo: "very heavy",
        img: "https://static.wikia.nocookie.net/mario/images/9/97/Bowser_Jr_Bowser%27s_Fury_artwork.png/revision/latest?cb=20210813135151&path-prefix=es"
    },
    {
        id: 7,
        name: "Bowsitos/Dry Bowser",
        genero: "Male",
        especie: "Koopa",
        grupo: "heavy",
        img: "https://static.wikia.nocookie.net/mario/images/f/f7/EA722DFB-D8BF-40B2-8D79-96DABF94CFB9.png/revision/latest/scale-to-width-down/699?cb=20200522144315&path-prefix=es",
    },
    {
        id: 8,
        name: "Luigi",
        genero: "Male",
        especie: "Human",
        grupo: "medium",
        img: "https://static.wikia.nocookie.net/mario/images/6/6d/Luigi.png/revision/latest?cb=20120428023844&path-prefix=es",
    },
    {
        id: 9,
        name: "Donkey Kong",
        genero: "Male",
        especie: "Gorila",
        grupo: "heavy light",
        img: "https://static.wikia.nocookie.net/mario/images/a/a4/600px-DonkeyKong_SSBU.png/revision/latest?cb=20190521193955&path-prefix=es"
    },
    {
        id: 10,
        name: "Mario",
        genero: "Male",
        especie: "Human",
        grupo: "medium heavy",
        img: "https://static.wikia.nocookie.net/mario/images/d/d7/SMO_Art_-_Mario.png/revision/latest/scale-to-width-down/700?cb=20170114200910&path-prefix=es"
    },
    {
        id: 11,
        name: "Daisy",
        genero: "Female",
        especie: "Human",
        grupo: "medium light",
        img: "https://static.wikia.nocookie.net/mario/images/2/2e/Daisy_Super_Mario_Party.png/revision/latest/scale-to-width-down/645?cb=20210409085933&path-prefix=es"
    },
    {
        id: 12,
        name: "Peach",
        genero: "Female",
        especie: "Human",
        grupo: "medium light",
        img: "https://static.wikia.nocookie.net/mario/images/4/46/PeachMarioPartySuperstars.png/revision/latest?cb=20211209203004&path-prefix=es"
    },
    {
        id: 13,
        name: "Huesitos",
        genero: "Male",
        especie: "Koopa",
        grupo: "very light",
        img: "https://static.wikia.nocookie.net/mario/images/8/8e/HuesitosSMP.png/revision/latest/scale-to-width-down/699?cb=20200321161227&path-prefix=es"
    },
    {
        id: 14,
        name: "Shy Guy",
        genero: "Male",
        especie: "Koopa",
        grupos:"light",
        img: "https://static.wikia.nocookie.net/mario/images/1/1d/Shy_Guy_Artwork.png/revision/latest/scale-to-width-down/700?cb=20220503165415&path-prefix=es"
    },
    {
        id: 15,
        name: "Toad",
        genero: "Male",
        especie: "Toad",
        grupo: "light",
        img: "https://static.wikia.nocookie.net/mario/images/2/2c/Toad_super_mario.png/revision/latest/scale-to-width-down/643?cb=20161129175624&path-prefix=es"
    },
    {
        id: 16,
        name: "Toadette",
        genero: "Female",
        especie: "Toad",
        grupo: "light",
        img: "https://static.wikia.nocookie.net/mario/images/0/0e/Toadette-0.png/revision/latest?cb=20190124142649&path-prefix=es"
    },
    {
        id: 17,
        name: "Waluigi",
        genero: "Male",
        especie: "Human",
        grupo: "heavy lights",
        img: "https://static.wikia.nocookie.net/mario/images/3/3b/Waluigi_SMP.png/revision/latest/scale-to-width-down/700?cb=20220510155404&path-prefix=es"
    },
    {
        id: 18,
        name: "Wario",
        genero: "Male",
        especie: "Human",
        grupo: "heavy",
        img: "https://static.wikia.nocookie.net/mario/images/3/3c/Wario_MP100.png/revision/latest/scale-to-width-down/700?cb=20171120161202&path-prefix=es"
    },
    {
        id: 19,
        name: "Wendy",
        genero: "Female",
        especie: "Koopa",
        grupo: "light",
        img: "https://static.wikia.nocookie.net/mario/images/c/c1/94C19BAB-5581-436A-AA49-81696A9CD8F0.png/revision/latest?cb=20200212213842&path-prefix=es"
    }
    
];

export const getCharacters = () => characters;

export const getCharacter = id => characters.find(character =>
    character.id.toString() === id);

export const deleteCharacter = async (id) => characters = characters.filter(character => character.id !== id);

//export const updateCharacter = async (id, characterToUpdate) => {
    //getCharacter(id) = {id, ...characterToUpdate};
//}