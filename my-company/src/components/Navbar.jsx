import { Link } from "react-router-dom";

function NavBar (){
    return (
        <nav>
            <ul className="navbar" style={{display: 'flex',  justifyContent: 'space-evenly'}}>
            <li><Link to="/">Home</Link></li>
            <li style={{marginLeft: 'auto'}}><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        </nav>
        
    );
}

export default NavBar;