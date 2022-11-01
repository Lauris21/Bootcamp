import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { getById } from "../services/characDetail";
import InfoDetails from "../components/InfoDetails";

const Details = () => {

    const params = useParams();
    const { id } = params;

    const [info, setInfo] = useState({})

    const navigation = useNavigate()

    useEffect(() => {
        getById(id).then((res) => setInfo(res))
    }, [id])


    return (
        <div className="details">
            <h1>Details</h1>
            <InfoDetails info={info}/>
            <div>
                <button type="button" onClick={(ev) => navigation("/finder")} >Back</button>
            </div>
        </div>
    )
}

export default Details;