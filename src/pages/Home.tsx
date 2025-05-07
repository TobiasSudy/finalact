import '../css/Home.css';
import { Link } from "react-router-dom";
import steak from '../assets/Steak.webp';
import logo from '../assets/Kochlogo.png';

function Home() {
    return (
        <div className="home-container">
            <div className="hero-section">
                <div className="hero-image left-image">
                    <img src={steak} alt="Delicious Steak" className="food-image" />
                    <div className="image-overlay"></div>
                </div>

                <div className="hero-content">
                    <img src={logo} alt="Recipe Logo" className="logo-image" />

                    <div className="hero-text">
                        <h1>
                            <span className="welcome-text">Welcome to</span>
                            <span className="title-highlight">My Recipe World</span>
                        </h1>
                        <p className="hero-description">
                            Discover my personal recipe creations – homemade, creative and full of flavor!
                            It all started cooking with my mom, and now I'm sharing my own dishes with the world.
                        </p>

                        <div className="recipe-buttons">
                            <Link to="/recipe1" className="recipe-button">
                                <span>View Recipe 1</span>
                                <div className="button-hover-effect"></div>
                            </Link>
                            <Link to="/recipe2" className="recipe-button">
                                <span>View Recipe 2</span>
                                <div className="button-hover-effect"></div>
                            </Link>
                            <Link to="/recipe3" className="recipe-button">
                                <span>View Recipe 3</span>
                                <div className="button-hover-effect"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;