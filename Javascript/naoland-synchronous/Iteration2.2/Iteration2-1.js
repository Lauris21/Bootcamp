const runTimeOut = async () => {
    await new Promise ((resolve) => {
    setTimeout(() => resolve(), 2000);
    })
    console.log("Time Out!");
}
runTimeOut();

//2.2
const getCharacter = async() => {
    try {
        const data = await fetch("https://rickandmortyapi.com/api/character");
        const dataToJson = await data.json();
        console.log(dataToJson);
    } catch (error) {
        return error;
    }
    
}
getCharacter();