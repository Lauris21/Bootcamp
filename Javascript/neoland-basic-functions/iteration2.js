const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

const findLongestWord = (array) => {
    let maxLength = 0;
    let wordLongest = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > maxLength) {
            maxLength = array[i].length;
            wordLongest = array[i];
        }
    }
    return wordLongest;
}

console.log(findLongestWord(avengers));