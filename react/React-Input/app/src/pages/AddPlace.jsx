import { useState } from "react";
import axios from "axios"
import { v4 as uuidv4 } from "uuid"
import { Link } from "react-router-dom";

const AddPlace = () => {

    const [name, setName] = useState("");
    const [ubication, setUbication] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const createPlace = (ev) => {
     const place = {
            name: name,
            ubication: ubication,
            image: image,
            description: description,
            id:uuidv4(),
        }
        postPlace(place);
        

    }

    const postPlace = async (item) => {
        axios({
            method: "post",
            url: "http://localhost:8080/placesAdd",
            data: item,
        })
    }

    return (
        <div className="addPlace">
            <h4>Hi 🤙🏽, in this form you can add the data to create a post with your favorite place 🌴.</h4>
            <form onSubmit={(ev) => createPlace(ev)}>
                <fieldset>
                    <legend>Add the data</legend>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text"
                             name="name"
                             id="name"
                             required 
                             onChange={(ev) => setName(ev.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="name">Ubication:</label>
                            <input type="text"
                             name="ubication" 
                             id="ubication"
                             required
                             onChange={(ev) => setUbication(ev.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="image">Image:</label>
                            <input type="text"
                             name="image" 
                             id="image"
                             required
                             onChange={(ev) => setImage(ev.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="image">Description:</label>
                            <input type="text"
                             name="description" 
                             id="description" 
                             onChange={(ev) => setDescription(ev.target.value)}/>
                        </div>
                </fieldset>
                <input type="submit" value="Post" />
            </form>
            <div className="preview">
                <h3>Preview</h3>
                <figure>
                    <h4>{name}, {ubication}</h4>
                    <img src={image} slt={name} />
                    <p>{description}</p>
                </figure>
            </div>
        </div>
    )
}

export default AddPlace;