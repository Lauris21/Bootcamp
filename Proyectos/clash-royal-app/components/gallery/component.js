const app = document.querySelector("#app");
const list = document.createElement("ul");

export const initElements = () => {
    getData();
}

const getData = async () => {
    try {
        const responseElement = await fetch("curl -H 'Authorization: Bearer API_KEY' https://api.clashroyale.com/v1/cards?limit=25");
        const jsonElement = await responseElement.json()
    } catch (error) {
        console.log(error);
    }
    transformData(jsonElement);
}

const transformData = (elements) => {
    const mapeoData = elements.map((element) => ({
            nameCharacter: element.name,
            //maxLevel: element.maxLevel,
    }))
    fillElements(mapeoData);
}

const fillElements = (elements) => {
    elements.forEach((element) => {
       let innerLi = `<li>${element.name}</li>`
        list.innerHTML += innerLi; 
    });
    printElements();
}


const printElements = () => {
    app.appendChild(list);
}