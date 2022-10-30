import { Link } from "react-router-dom";

const PLacesGallery = ( { places }) => {
    return (
        <div className="placesGallery">
            {places.length ? (
                places.map((place) => (
                    <figure key={place.id}>
                        <Link to={`/places/${place.id}`}>
                            <h3>{place.name}</h3>
                            <img src={place.image} alt={place.name} />
                        </Link>
                    </figure>
                )))
                 : (
                    <p>No Places ❌</p>
                 )}
        </div>
    )
}

export default PLacesGallery;