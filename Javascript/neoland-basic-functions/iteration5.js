const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

let sumNumbers = 0;
let sumString = 0;

const averageWord = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            sumNumbers += array[i];
        } else {
            sumString += array[i].length;
        }
    }
    return `La suma de los números es ${sumNumbers}, y la suma de los string es ${sumString}`;
}

console.log(averageWord(mixedElements));