let names = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];


let swap = (array , index1, index2) => {
    let nameOne = array[index1];
    let nameTwo = array[index2];
    if(array.length > index1 && array.length > index2) {
        array.splice(index1, 1, nameTwo);
        array.splice(index2, 1, nameOne);
        return array;
    } else {
        return "No se encuentra el elemento";
    }
}
    
       

console.log(swap(names, 1, 3));
console.log(swap(names, 10, 3));


