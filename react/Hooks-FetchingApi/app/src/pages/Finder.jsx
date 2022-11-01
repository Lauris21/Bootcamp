import { useEffect, useState } from "react";
import { useDebounce } from 'use-debounce'
import { Link } from "react-router-dom"

import { getData } from "./../services/api.js"


const Finder = () => {

    const [filter, setFilter] = useState("Morty Smith");
    const [collectionCharacter, setCollectionCharacter] = useState([])

    const [debounceFilter] = useDebounce(filter, 500);

    useEffect(() => {
        getData(filter).then((res) => setCollectionCharacter(res))
    }, [filter]);
    
    return (
        <div className="finder">
            <h1>Finder</h1>
            <input type="text" value={filter} onChange={(ev) => setFilter(ev.target.value)} />
            <div>
            {collectionCharacter.map((item) => (
                <figure key={item.id}>
                    <Link to={`/finder/${item.id}`} >
                        <h3>{item.name}</h3>
                        <img src={item.image} alt={item.name} />
                    </Link>
                </figure>
               
            ))}
            </div>
        </div>
    )
}

export default Finder;