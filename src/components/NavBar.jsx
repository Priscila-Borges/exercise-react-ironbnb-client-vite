import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <>
        <nav>
        <NavLink to="/">Home</NavLink> |
        <NavLink to="/apartments">Apartments List</NavLink> |
        <NavLink to="/apartments/:id">Apartment Details</NavLink> |
        <NavLink to="/apartments/create">Create  Apartment</NavLink>
      </nav>
        
        </>
    
        )
}

export default NavBar;