import {useState} from "react";
import chicken from '../assets/chicken.webp'
import sandwich from '../assets/sandwich.jpg'
import '../css/RecipePage.css'

const recipeData = {
    id: '2',
    title: 'Chicken Sandwich',
    time: 20,
    ingredients: ['Sandwich', 'Chicken pieces', 'Cheese', 'Onions', 'Vegetables for topping', 'grill oil or butter'],
    instructions: 'Cut the chicken pieces into small pieces. Put the cut onions in the pan and sweat them until they have a good color.\n' +
        'Add the chicken to the onions and roast it. Season it like you want. I used salt, pepper, paprika powder, mexican grill seasoning.\n' +
        'Add the cheese to the chicken. Meanwhile, sweat the sandwich so it gets a good color and crispy on the outside\n' +
        'When the chicken with the cheese is ready, prepare the sandwich. First, put a sauce on the bread, then the chicken, on the chicken ' +
        'more cheese you want, then the vegetables of your choice and lastly add another sauce.\n' +
        'Enjoy',
    image1: chicken,
    image2: sandwich,
}

function Recipe2() {
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState<string>('');

    const handleAddComment = () => {
        if (newComment) {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };

    return (

        <div className="recipe-container">
            <div className="recipe-header">
                <h1 className="recipe-title">{recipeData.title}</h1>
                <p className="recipe-time">⏱️ {recipeData.time} minutes</p>
            </div>

            <div className="recipe-images">
                <img src={recipeData.image1} alt={recipeData.title} className="recipe-main-image" />
                <img src={recipeData.image2} alt={recipeData.title} className="recipe-main-image" />
            </div>

            <div className="recipe-content">
                <div className="ingredients-section">
                    <h2 className="section-title">Ingredients</h2>
                    <ul className="ingredients-list">
                        {recipeData.ingredients.map((ingredient, index) => (
                            <li key={index} className="ingredient-item">
                                <span className="ingredient-bullet">•</span> {ingredient}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="instructions-section">
                    <h2 className="section-title">Instructions</h2>
                    <div className="steps-container">
                        {recipeData.instructions.split('\n').map((step, index) => (
                            <div key={index} className="step-card">
                                <div className="step-number">{index + 1}</div>
                                <p className="step-text">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="comments-section">
                    <h2 className="section-title">Comments</h2>
                    <div className="comment-input">
                <textarea
                    placeholder="Share your thoughts about this recipe..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="comment-textarea"
                />
                        <button onClick={handleAddComment} className="comment-button">
                            Post Comment
                        </button>
                    </div>
                    <div className="comments-list">
                        {comments.map((comment, index) => (
                            <div key={index} className="comment-card">
                                <div className="comment-avatar">👤</div>
                                <div className="comment-content">{comment}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recipe2;