import '../css/Home.css';
import {Link} from "react-router-dom";
import steak from '../assets/Steak.webp'
import logo from '../assets/Kochlogo.png'

function Home() {
    return (
        <div className="hero">
            <div className="hero-image">
                <img
                    src={steak}
                    alt="Cooking"
                />
            </div>
            <div className="hero-text">
                <h1>Welcome to My Recipe World!</h1>
                <p>
                    Discover my personal recipe creations – homemade, creative and full of flavor!
                    It all started cooking with my mom, and now I'm sharing my own dishes with the world.
                </p>
                <Link to="/recipe1" className="hero-button">
                    View Recipe 1
                </Link><br/><br/><br/>
                <Link to="/recipe2" className="hero-button">
                    View Recipe 2
                </Link>
            </div>
            <div className="hero-image">
                <img
                    src={logo}
                    alt="Cooking"
                />
            </div>
        </div>
    );
}

export default Home;
