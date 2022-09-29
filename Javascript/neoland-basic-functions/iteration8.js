/*Crea una función que nos devuelva el número de veces que se repite cada una de las 
palabras que lo conforma.  
Puedes usar este array para probar tu función:
NO SE QUE OPERACION REALIZAR
*/

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  let orderWords = counterWords.sort();

  let contador = 1;

  let countArray = [];

  const repeatCounter = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[i+1]) {
            contador++;
        } else if (contador > 1) {
            countArray.push(`${array[i]} se repite ${contador} veces.`)
            contador = 1;
        } else {
            countArray.push(`${array[i]} se repite ${contador} vez.`)
            contador = 1;
        }
    }
    return countArray;
  } 

  console.log(repeatCounter(counterWords));