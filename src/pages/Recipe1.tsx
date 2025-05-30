
import { useState } from 'react';
import '../css/RecipePage.css';
import recipe1 from '../assets/recipe1.jpg'

// Beispiel-Daten für Rezept 1
const recipeData = {
    id: '1',
    title: 'Salmon with wild garlic risotto',
    time: 35, // in Minuten
    ingredients: ['Salmons', 'Wild garlic leafs', 'Basil pesto', 'Rama cremefine',
        'Risotto', 'Onion' ,'Salt', 'Vegetable broth', 'Butter', 'white wine',  'Spices of your choice'],
    instructions: 'Prepare a pan with oil each for the risotto (here also the butter) and the salmon. Also prepare a small pan for the vegetable broth.\n' +
        'Warm up the vegetable broth. Put in the cut onions in the risotto pan and sweat them a little.'+
        'Now put the risotto rice to that and roast it 2-3 minutes. ' +
        'Then put the white wine and a portion of the vegetable broth in it.\n' +
        'Rost the salmons and when they are put in the rama cremefine and the basil pesto. Season the sauce as you want.' +
        'For example, I seasoned the sauce with salt, pepper, a little of chilli and a specific soup seasoning.\n' +
        'Keep adding broth to the rice until it has absorbed all the broth. After 15-20 minutes the rice should be ready to be eaten.\n' +
        'Now just add the cut leaves and the remaining butter. Season the rice with salt and pepper and if you want you can put in parmesan.\n' +
        'Prepare the dish and enjoy.',
    image: recipe1,
};

function Recipe1() {
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState<string>('');

    const handleAddComment = () => {
        if (newComment) {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };

    return (

        <div className="recipe-page">
            <div className="recipe-container">
                <div className="recipe-header">
                    <h1 className="recipe-title">{recipeData.title}</h1>
                    <p className="recipe-time">⏱️ {recipeData.time} minutes</p>
                </div>

                <div className="recipe-images">
                    <img src={recipeData.image} alt={recipeData.title} className="recipe-main-image" />
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
        </div>
    );
}

export default Recipe1;
