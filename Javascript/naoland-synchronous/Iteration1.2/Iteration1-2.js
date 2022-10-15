const baseUrl = 'https://api.nationalize.io';

const btn = document.querySelector("#btn");
const input = document.querySelector("#input").value

const getData = async (text) => {
    try {
        const data = await fetch(`https://api.nationalize.io${text}`);
        const dataJson = await data.json();
        return dataJson;
    } catch (error) {
        
    }
}
const event = () => {
    btn.addEventListener("click", (ev) => {
        getData(input.value)
    } )
}