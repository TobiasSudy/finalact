import {Link} from "react-router-dom";
import '../css/Navbar.css';
import logo from '../assets/Kochlogo.png'
import human from '../assets/human.jpg'
import recipe1 from '../assets/lachs.png'
import recipe2 from '../assets/sandwich.png'
import allRecipes from '../assets/allrecipes.png'

function Navbar() {
    return (
        <nav className="navbar">

            <Link to="/" style={{ marginRight: '1rem' }}><img src={logo} alt="Logo" className="navbar-logo" /></Link>
            <Link to="/about" style={{ marginRight: '1rem' }}><img src={human} alt={"human"} className={"navbar-logo"}/></Link>
            <Link to="/recipe1" style={{ marginRight: '1rem' }}><img src={recipe1} alt={"recipe1"} className={"navbar-logo"}/></Link>
            <Link to="/recipe2" style={{ marginRight: '1rem' }}><img src={recipe2} alt={"recipe2"} className={"navbar-logo"}/></Link>
            <Link to="/recipes"><img src={allRecipes} alt={"all"} className={"navbar-logo"}/></Link>
        </nav>
    );
}

export default Navbar;