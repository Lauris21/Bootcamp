import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Place = () => {

    const param = useParams();
    const { id } = param;

    const [place, setPlace] = useState({});

    useEffect(() => {
      const getCharacter = async () => {
        const data = await fetch (`http://localhost:8080/places/${id}`);
        const res = await data.json();
        setPlace(res)
      }
      getCharacter()
    }, [])

  return (
    <div className='place'>
    {place ? (
      <figure className="character">
        <h3>{place.name}, {place.ubication}</h3>
        <img src={place.image} alt={place.name} />
        <p>{place.description}</p>
      </figure>
    ) : (
      <h3>NO PLACE</h3>
    )} 
    </div>
  )
}

export default Place;
