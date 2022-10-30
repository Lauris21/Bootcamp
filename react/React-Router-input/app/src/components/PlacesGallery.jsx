import { Link } from "react-router-dom";

const PlacesGallery = ( { places }) => {
    return (
        <div className="placesGallery">
            <h3>Gallery</h3>
            <div className="gallery">
                {places.length ? (
                    places.map((place) => (
                        <figure key={place.id}>
                            <Link to={`/places/${place.id}`}>
                                <img src={place.image} alt={place.name}/>
                                <h3>{place.name}</h3>
                            </Link>
                        </figure>
                    ))
                ) : (
                    <p>No places</p>
                )}
            </div>
        </div>
    )
}

export default PlacesGallery;