const sum = (a = 10, b = 5) => {
   return a + b; 
}
console.log(sum());
console.log(sum(3));
console.log(sum(3, 9));
