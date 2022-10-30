import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <div className="nav">
            <ul>
                <li>
                    <NavLink to="">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/places">Places</NavLink>
                </li>
                <li>
                    <NavLink to="/addPlace">Add Place</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav;