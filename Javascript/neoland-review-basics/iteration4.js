let animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

let findArrayIndex = (arrays, text) => {
    textMayu = text.charAt(0).toUpperCase() + text.substring(1);
    for (const array of arrays) {  
        if (array == textMayu) {
            return arrays.indexOf(array);  
        } /*else {
            return `El animal ${textMayu} no se encuentra en la lista.`
        } */
    }
}
    
console.log(findArrayIndex(animals, "Mosquito"));
console.log(findArrayIndex(animals, "mariquita"));
console.log(findArrayIndex(animals, "ajolote"));
