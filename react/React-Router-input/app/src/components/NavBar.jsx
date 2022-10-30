import {NavLink} from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/places">Places</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;