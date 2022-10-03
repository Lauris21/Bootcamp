const citys = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const newUl = document.createElement("ul");
document.body.appendChild(newUl);
for (const city of citys) {
    let list = `<li>${city}</li>`
    newUl.innerHTML += list;
}

const deleteP = document.querySelector(".fn-remove-me");
deleteP.remove();

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const nodoDiv = document.querySelector("div[data-function=printHere]");
const ulDivPrint= document.createElement("ul");
nodoDiv.appendChild(ulDivPrint);
for (const car of cars) {
    let listCar = `<li>${car}</li>`
    ulDivPrint.innerHTML += listCar;
}

const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const listDiv = document.createElement("ul");
document.body.appendChild(listDiv);

for (const country of countries) {
    let list = `<li></li>`;
    listDiv.innerHTML += list;
    const divH4 = `<div></div>`;
    list.innerHTML += divH4;
    for (const key in country) {
        let title = `<h4>${country[key].title}</h4>`
        divH4.innerHTML += title;
        let img = `<img src= ${country[key].imgUrl}>`
        divH4.innerHTML += img;
    }
}

