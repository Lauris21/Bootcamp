const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020} ;
let {title, gender, year} = game;
console.log(title);
console.log(gender);
console.log(year);

const fruits = ['Banana', 'Strawberry', 'Orange'];
const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
let name = animalFunction().name;
let race = animalFunction().race;
console.log(name);
console.log(race);

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] };
const nameCar = car.name;
const itv = car.itv;
const oneItv = itv[0];
const twoItv = itv[1];
const threeItv = itv[2];
console.log(oneItv);
console.log(twoItv);
console.log(threeItv);
console.log(nameCar);
console.log(itv);
