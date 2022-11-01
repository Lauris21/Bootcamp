
export const getComment = async () => {
    const data = await fetch("http://localhost:8080/Comments");
    const dataJson = await data.json();
    return dataJson;
}