import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

const Place = () => {

    const param = useParams();
    const { id } = param;

    const [place, setPlace] = useState({})

    useEffect(() => {
        const getCharacter = async () => {
            const data = await fetch (`http://localhost:8080/placesAdd/${id}`);
            const res = await data.json();
            setPlace(res);
            
        }
        getCharacter()
    }, [])

    return (
        <div className="place">
            {place ? (
                <figure>
                    <h3>{place.name}, {place.ubication}</h3>
                    <img src={place.image} alt={place.name} />
                    <p>{place.description}</p>
                </figure>
            ) : (
                <p>No Place ❌</p>
            )}
        </div>
    )
}
export default Place;