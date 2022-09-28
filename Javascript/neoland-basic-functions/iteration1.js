/*function sum (numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        console.log(numberOne);
    } else if (numberOne < numberTwo){
       console.log(numberTwo);
    } else { console.log("Son iguales")}
}

sum(50,2);

sum (0.2, -0.1200);
sum(3, 3);*/

const sum = (numberOne, numberTwo) => {
    if (numberOne > numberTwo) {
        return numberOne
    } else if (numberOne < numberTwo){
        return numberTwo
    } else {
        return "Son iguales";
    }
}
console.log(sum(20, 40));