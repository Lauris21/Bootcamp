const divHeader = document.createElement("section");
const body= document.querySelector("body");
body.insertAdjacentElement("afterbegin", divHeader);

export const initTit = () => {
    insertHeader();
}

const insertHeader = () => {
    divHeader.innerHTML = `
    <header class="title">
        <h1>
            <img src="https://1000marcas.net/wp-content/uploads/2020/01/Stranger-Things-logo.png" alt="Stranger Thinks"/>
        </h1>
        <h2>Vota tu personaje</h2>
        <p>🏀</p>
    </header>
    `
}