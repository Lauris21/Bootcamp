import { useState, useEffect } from "react";
import PlacesGallery from "./../components/PlacesGallery"

const Places = () => {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetch("http://localhost:8080/placesAdd");
            const res = await data.json();
            setPlaces(res)
        };
        getData()
    }, [])

    

    return (
        <div className="places">
            <h2>🏜 Places Gallery 🏜</h2>
            <p>Don`t forget to add yours 🤙🏽</p>
            <PlacesGallery places={places}/>
        </div>
    )
}

export default Places;