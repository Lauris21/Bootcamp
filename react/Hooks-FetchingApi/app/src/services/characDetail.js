

export const getById = async (id) => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const dataJson = await data.json();

    return dataJson;
}