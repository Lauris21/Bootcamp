
const idDiv = document.querySelector("#app");
const listCharacter = document.createElement("ul");
 export const initElement = () => {
    idDiv.appendChild(listCharacter);
}

const characters= [
    {name:"Eleven" , img: "https://upload.wikimedia.org/wikipedia/en/5/52/Eleven_%28Stranger_Things%29.jpg" },
    {name: "Mike", img: "https://indiehoy.com/wp-content/uploads/2017/05/stranger-things-2017.jpg"},
    {name: "Dustin", img:"https://elcomercio.pe/resizer/1iDRpSFYiiWc6jAlB5OV_JuVEiY=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/QFXOUMXJVVAY7PQB5GXJ6X33DY.jpg"},
    {name: "Will", img:"https://imgix.bustle.com/uploads/image/2022/7/12/fa8d3adf-cbe1-47e4-9b39-c016257a77c1-strangerthings_strangerthings4_9_00_39_05_02.jpg?w=414&h=478&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.34&fp-y=0.2293"},
    {name: "Max", img:"https://imagenes.elpais.com/resizer/Hc0XBJACH7b-ngk_y7cliItGZGk=/1960x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/O3C4WZ3FIT64UQJFL5BA2J56ZY.jpg"},
    {name: "Lucas", img: "https://estaticosgn-cdn.deia.eus/clip/1afb4e83-1c62-43c6-8963-c6899e9efe7e_16-9-discover-aspect-ratio_default_0.jpg"},
    {name: "Nancy", img:"https://elcomercio.pe/resizer/CBVlgFm4gxS1E4gxjfQA_QZ0ofQ=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/CSWYJGQLHNF2NFY67KAU4NZJTI.jpg"},
    {name:"Steve", img:"https://depor.com/resizer/skQr8rSEcHbLpQd32ZLO9xHLWmE=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/OIPD6INTFZEAFHOZCXBWSHLJXA.jpg"}
]

export const printCharacter = () => {
    characters.forEach((character) => {
        let dataCharacter = `
        <li>
            <div class="element">
                <h3>${character.name}</h3>
                <img src="${character.img}" alt="picture of ${character.name}"/>
                <div class="buttons">
                    <ul>
                        <li>
                            <button>🤩</button>
                        </li>
                        <li>
                            <button>😤</button>
                        </li>
                        <li>
                            <button>😑</button>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        `
    listCharacter.innerHTML += dataCharacter;
    })
}