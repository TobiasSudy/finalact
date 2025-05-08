import { Link } from "react-router-dom";
import '../css/Navbar.css';
import logo from '../assets/Kochlogo.png';
import human from '../assets/human.jpg';
import recipe1 from '../assets/lachs.png';
import recipe2 from '../assets/sandwich.png';
import logo3 from '../assets/logo3.png';
import allRecipes from '../assets/allrecipes.png';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="nav-icons">
                    <Link to="/" className="nav-icon">
                        <img src={logo} alt="Logo" className="nav-icon-img" />
                        <span className="nav-icon-tooltip">Home</span>
                    </Link>
                    <Link to="/about" className="nav-icon">
                        <img src={human} alt="About" className="nav-icon-img" />
                        <span className="nav-icon-tooltip">About</span>
                    </Link>
                    <Link to="/recipe1" className="nav-icon">
                        <img src={recipe1} alt="Recipe 1" className="nav-icon-img" />
                        <span className="nav-icon-tooltip">Lachs</span>
                    </Link>
                    <Link to="/recipe2" className="nav-icon">
                        <img src={recipe2} alt="Recipe 2" className="nav-icon-img" />
                        <span className="nav-icon-tooltip">Sandwich</span>
                    </Link>
                    <Link to="/recipe3" className="nav-icon">
                        <img src={logo3} alt="Recipe 3" className="nav-icon-img" />
                        <span className="nav-icon-tooltip">Recipe 3</span>
                    </Link>
                    <Link to="/recipes" className="nav-icon">
                        <img src={allRecipes} alt="All Recipes" className="nav-icon-img" />
                        <span className="nav-icon-tooltip">All Recipes</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;