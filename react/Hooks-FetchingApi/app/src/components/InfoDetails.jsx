
const InfoDetails = ( {info} ) => {

    return (
        <div>
            {info ? (
                <figure>
                    <h2>{info.name}</h2>
                    <img src={info.image} alt={info.name} />
                    <div>
                        <p>Specie: {info.species}</p>
                        <p>Status: {info.status}</p>
                    </div>
                </figure>
            ) : (
                <p>Not Found</p>
            )}
        </div>
    )
}

export default InfoDetails;