
import { Link } from "react-router-dom"

const MoviesGall = ({ movies }) => {

    return (
        <div>
        {movies.map((movie) => (
            <figure key={movie.id} className="figureGallery">
                <Link to={`/moviesGallery/${movie.id}`} >
                    <div>
                        <h3>{movie.title}</h3>
                        <h4>{movie.año}</h4>
                    </div>
                    <img src={movie.poster} alt={movie.title} />
                    <p>{movie.description}</p>
                </Link>
            </figure>
        ))}
    </div>
    )
}

export default MoviesGall;