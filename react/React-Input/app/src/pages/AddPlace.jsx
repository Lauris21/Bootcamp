import { useState } from "react";

const AddPlace = () => {

    const [newPlace, setnewPlace] = useState({})

    const [name, setName] = useState("");
    const [ubication, setUbication] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const createPlace = (ev) => {
     let place = {
            name: name,
            ubication: ubication,
            image: image,
            description: description,
            id: uuid(),
        }
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
                             onChange={(ev) => setName(ev.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="name">Ubication:</label>
                            <input type="text"
                             name="ubication" 
                             id="ubication" 
                             onChange={(ev) => setUbication(ev.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="image">Image:</label>
                            <input type="text"
                             name="image" 
                             id="image" 
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