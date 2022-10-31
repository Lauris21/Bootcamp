import { useNavigate } from "react-router-dom";


const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="introImg">
                <div className="intro">
                    <h2>Tim Burton Api-Blog</h2>
                    <p>Bienvenid@ a la Api-Blog de Tin Burton.</p>
                    <p>Aqúi puedes consultar y añadir sus mejores peliculas ✍🏽.</p>
                </div>
                <figure>
                    <img src="" alt="Tin Burton image" />
                </figure>
            </div>
            <button type="button"
            onClick={() => navigate("/finder")}
            >Go Tim Burton Api</button>
        </div>
    )
}

export default Home;