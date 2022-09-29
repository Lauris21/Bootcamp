const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let categoriesMovies = [];

for (const movie of movies) {
            categoriesMovies.push(movie.categories);
        }
let flatCategories = categoriesMovies.flat();

let newCategoriesMovies = [];
for (let i = 0; i < flatCategories.length; i++) {
    if (!newCategoriesMovies.includes(flatCategories[i])) {
        newCategoriesMovies.push(flatCategories[i])
    }
    
}

console.log(newCategoriesMovies);