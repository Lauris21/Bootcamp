import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import PlacesGallery from "../components/PlacesGallery";



const Places = () => {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [poster, setPoster] = useState("");
    const [places, setPlaces] = useState([]);

    useEffect(() => {
      const getPlaces = async () => {
        const data = await fetch("http://localhost:8080/places");
        const res = await data.json();
        setPlaces(res);
      };
      getPlaces();
    }, []);
    
    const createPlace = (ev) => {
        ev.preventDefault();
        const place = {
            name: name,
            location: location,
            descripcion: description,
            poster: poster,
            id: uuidv4(),
        };
        postPlace(place);
    };

    const postPlace = async (item) => {
        axios({
            method: "post",
            url: "http://localhost:8080/places",
            data: item,
        });
    };


    return (
        <div>
            <h2>Places to visit</h2>
            <h3>Introduce tu lugar favorito</h3>
            <form>
                <fieldset>
                    <legend>Create a post</legend>
                    <label htmlFor="name">Name:</label>
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    onChange={(ev) => setName(ev.target.value)}
                    />
                    <label htmlFor="location">Location:</label> 
                    <input 
                    type="text" 
                    name="location" 
                    id="location" 
                    onChange={(ev) => setLocation(ev.target.value)}
                    />
                    <label htmlFor="description">Description:</label>
                    <input 
                    type="text" 
                    name="description" 
                    id="description" 
                    onChange={(ev) => setDescription(ev.target.value)}
                    />
                    <label htmlFor="poster">Image:</label>
                    <input 
                    type="text" 
                    name="poster" 
                    id="poster" 
                    onChange={(ev) => setPoster(ev.target.value)}
                    />
                </fieldset>
                <input type="submit" value="Create" />
            </form>
            <PlacesGallery places={places} />
        </div>
    )
}

export default Places;