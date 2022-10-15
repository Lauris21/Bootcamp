const getData = async () => {
    try {
        const data = await fetch('https://api.agify.io?name=michael')
        const dataJson = await data.json();
        return dataJson;
        
    } 
    catch (error) {
        return error;
    }
   
}
console.log(getData());