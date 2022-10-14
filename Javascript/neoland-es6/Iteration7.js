//REDUCE

//7.1
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const totalScore = exams.reduce((acc, exam) =>
    acc + exam.score, 0);
console.log(totalScore);


//7.2
const scoreAprobed = exams.filter((exam) => exam.score >= 5)
.reduce((acc, element) => acc + element.score, 0);
console.log(scoreAprobed)

//7.3
const mediaAprobed = exams.reduce((acc, exam) => acc + exam.score, 0) / exams.length;
console.log(mediaAprobed) 
    