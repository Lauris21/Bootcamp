function largestWord(list) {
    let minLength = 0;
    let maxLength = 0;
    let longestWord = [];
    for (let i = 0; i < list[i].length; i++) {
        if (list[i].length > minLength) {
            minLength = list[i].length;
        }  else {list[i].length = maxLength}

        }
        console.log(minLength, maxLength);
    }
    
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
largestWord(avengers);