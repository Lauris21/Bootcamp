const newDiv = document.createElement("div");
document.body.appendChild(newDiv);

const newDivHijo = document.createElement("div");
const pTag = document.createElement("p");
newDivHijo.appendChild(pTag);
document.body.appendChild(newDivHijo);



const divP = document.createElement("div");
document.body.appendChild(divP);
 for (let i = 0; i < 6; i++) {
   let p = "<p></p>";
   divP.innerHTML += p;
 }

 const newParr = document.createElement("p");
 const newTest = document.createTextNode("Soy dinámico!");
 newParr.appendChild(newTest);
 document.body.appendChild(newParr);

 const editH2 = document.querySelector(".fn-insert-here");
 const textH2 = document.createTextNode("Wubba Lubba dub dub");
 editH2.appendChild(textH2);

 const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
 const ulDocu = document.createElement("ul");
 document.body.appendChild(ulDocu);
 for (const app of apps) {
    let list = `<li>${app}</li>`;
    ulDocu.innerHTML += list;
 }

const deleteNodo = document.querySelectorAll(".fn-remove-me");
for (const nodo of deleteNodo) {
    nodo.remove();
}
 
newDivHijo.insertAdjacentHTML("beforebegin", "<p>Voy en medio!</p>");
 
newDivInsert = document.querySelectorAll("div.fn-insert-here");
const textIn = "Voy dentro!";
for (const div of newDivInsert) {
    div.innerHTML += `${textIn}`;
}