import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <div className="nav">
            <ul>
                <li>
                    <NavLink to="" className="aNav">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/places" className="aNav">Places</NavLink>
                </li>
                <li>
                    <NavLink to="/addPlace" className="aNav">Add Place</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav;