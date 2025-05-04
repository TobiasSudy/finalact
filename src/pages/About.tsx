import '../css/About.css';
import ich from '../assets/Ich.jpg';

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="about-text">
                    <h1>About Me</h1>
                    <p><strong>Name:</strong> Tobias Sudy</p>
                    <p><strong>Age:</strong> 18</p>
                    <p><strong>School:</strong> HTL Kaindorf</p>
                    <p>
                        Hi! I'm Tobias, and I absolutely love cooking. It all started when I was a kid,
                        helping my mom in the kitchen. Over time, I began creating my own recipes and experimenting with new flavors.
                    </p>
                    <p>
                        On this website, I’m excited to share my favorite homemade recipes – creative, flavorful, and made with love.
                        I hope you'll find inspiration here to try something new in your own kitchen!
                    </p>
                </div>
                <div className="about-image">
                    <img src={ich} alt="Tobias Sudy" />
                </div>
            </div>
        </div>
    );
}

export default About;
