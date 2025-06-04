// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import '../css/Navbar.css';
import logo from '../assets/Kochlogo.png';
import human from '../assets/human.jpg';
import allRecipes from '../assets/allrecipes.png';
import { recipes } from '../data/recipes';
import addRecipeIcon from '../assets/addrecipe.png'

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

                    {recipes.map(recipe => (
                        <Link
                            to={`/recipe/${recipe.id}`}
                            className="nav-icon"
                            key={recipe.id}
                        >
                            <img src={recipe.icon} alt={recipe.title} className="nav-icon-img" />
                            <span className="nav-icon-tooltip">{recipe.title}</span>
                        </Link>
                    ))}


                    <Link to="/add-recipe" className="nav-icon">
                        <img src={addRecipeIcon} alt="Add Recipe" className="nav-icon-img" />
                        <span className="nav-icon-tooltip">Add Recipe</span>
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