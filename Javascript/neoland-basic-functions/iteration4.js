const numbers = [12, 21, 38, 5, 45, 37, 6];
let total = 0;
let media = 0;
const average = (array) => {
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    media = total / array.length;
    return media;
}

console.log(average(numbers));