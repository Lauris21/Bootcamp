

export const getData = async (filter) => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/?name=${filter}`);
    const dataJson = await data.json();
    
    return dataJson.results;
    
    
}