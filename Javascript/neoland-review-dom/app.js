
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
countries.forEach(country => {
    let randomList = `
        <li class="listDiv">
            <div class="box-div">
                <h4>${country.title}</h4>
                <img url="${country.imgUrl}" alt=${country.title} >
            </div>
            <button class="deleteme">Delete me</button>
        </li>
            `
    listDiv.innerHTML += randomList;
});

let buttonDelete = document.createElement("button");
document.body.appendChild(buttonDelete);
buttonDelete.innerText = "Delete latest";


const deleteLatest = () => {
    let deleteDiv = document.querySelectorAll(".listDiv");
    deleteDiv[deleteDiv.length-1].remove();
}

buttonDelete.addEventListener("click", deleteLatest);


const indivButton = document.querySelectorAll(".deleteme");

indivButton.forEach((button) => {
    button.addEventListener("click", () =>{
    button.parentNode.remove();
    })
});


