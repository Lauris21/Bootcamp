const pointsList = [32, 54, 21, 64, 75, 43];
const copyList = [...pointsList];
console.log(copyList);

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copyToy = {...toy};
console.log(copyToy);

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];
const allPointsList = [...pointsList1, ...pointsLis2];
console.log(allPointsList);

const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const allToy = {...toy1, ...toyUpdate};
console.log(allToy);

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsEdit = [...colors];
colorsEdit.splice(2,1);
console.log(colorsEdit);