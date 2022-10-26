import { NavLink } from "react-router-dom";

export const NavBarLink = () => {
    return (
        <nav>
            <NavLink to="">Home</NavLink>
            <NavLink to="characters">Characters</NavLink>
            <NavLink to="about">About</NavLink>
        </nav>
    )
}

export default NavBarLink;