import '../css/About.css';
import ich from '../assets/Ich.jpg';

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="about-text">
                    <h1><span className="highlight">About</span> Me</h1>
                    <div className="info-grid">
                        <div className="info-item">
                            <span className="info-label">Name</span>
                            <span className="info-value">Tobias Sudy</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Age</span>
                            <span className="info-value">18</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">School</span>
                            <span className="info-value">HTL Kaindorf</span>
                        </div>
                    </div>
                    <p className="intro">
                        Hi! I'm Tobias, and I absolutely love cooking. It all started when I was a kid,
                        helping my mom in the kitchen. Over time, I began creating my own recipes and experimenting with new flavors.
                    </p>
                    <p>
                        On this website, I'm excited to share my favorite homemade recipes – creative, flavorful, and made with love.
                        I hope you'll find inspiration here to try something new in your own kitchen!
                    </p>
                    <div className="signature">Tobias</div>
                </div>
                <div className="about-image">
                    <div className="image-wrapper">
                        <img src={ich} alt="Tobias Sudy" />
                        <div className="image-border"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;