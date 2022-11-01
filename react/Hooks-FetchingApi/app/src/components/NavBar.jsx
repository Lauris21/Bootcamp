import { NavLink } from "react-router-dom"
const NavBar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/finder">Finder</NavLink>
                </li>
                <li>
                    <NavLink to="/comments">Comments</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;