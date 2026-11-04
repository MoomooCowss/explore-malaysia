import {Link} from "react-router-dom";

function Navbar(){
    return(
        <header>
            <h1>Explore Malaysia</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/packages">Packages</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>


        </header>
    );
}
export default Navbar;