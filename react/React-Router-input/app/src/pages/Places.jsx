import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import PlacesGallery from "../components/PlacesGallery";



export const Places = () => {

      const [name, setName] = useState("");
      const [ubication, setUbication] = useState("");
      const [image, setImage] = useState("");
      const [description, setDescription] = useState("");
      const [places, setPlaces] = useState([]);

      useEffect(() => {
        const getPlaces = async () => {
          const data = await fetch("http://localhost:8080/places");
          const res = await data.json();
          console.log(res)
          setPlaces(res)
        };
       getPlaces();
      }, [])

    const createPlace = (ev) => {
  
      const place = {
        name: name,
        ubication: ubication,
        image: image,
        description: description,
        id: uuidv4(),
      }
      postPlace(place);
      console.log(place)
    }

    const postPlace = async (item) => {
      axios({
        method: "post",
        url: "http://localhost:8080/places",
        data: item,
      })
    }

  return (
    <div className="places">
      <h3>List of fantasy places</h3>
      <p>Don`t forget to add yours 🤙🏽</p>
      <form onSubmit={(ev) => createPlace(ev)}>
        <fieldset>
          <legend>Create a fantasy place</legend>
            <div>
              <label htmlFor='name'>Name:</label>
              <input type="text" 
              name='name' 
              id="name" 
              onChange={(ev) => setName(ev.target.value)}/>
            </div>
            <div>
              <label htmlFor='ubication'>Ubication:</label>
              <input type="text" 
              name='ubication' 
              id='ubication' 
              onChange={(ev) => setUbication(ev.target.value)}/>
            </div>
            <div>
              <label htmlFor='image'>Image:</label>
              <input type="text" 
              name="image" 
              id="image" 
              onChange={(ev) => setImage(ev.target.value)}/>
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <input type="text"
              name="description" 
              id="description" 
              onChange={(ev) => setDescription(ev.target.value)}/>
            </div>
            </fieldset>
        <input type="submit" value="Add" />
      </form>
      <PlacesGallery places={places}/>
    </div>
  )
}

export default Places;
