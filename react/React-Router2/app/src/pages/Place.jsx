import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Place = () => {

    const [place, setPlace] = useState({});

    const params = useParams();
    const { id } = params;

    useEffect(() => {
        const getCharacter = async () => {
            const data = await fetch("http://localhost:8080/places");
            const res = await data.json();
            setPlace(res);
        };
        getCharacter();
    }, []);
    
    return (
        <div className="place">
            <h2>The place 🌴</h2>
                <figure>
                    <h3>{place.name}</h3>
                    <h4>{place.location}</h4>
                    <p>{place.description}</p>
                    <img src={place.poster} alt={place.name} />
                </figure>
        </div>
    )
}

export default Place;