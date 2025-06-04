// src/pages/RecipePage.tsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { recipes } from '../data/recipes';
import '../css/RecipePage.css';

function RecipePage() {
    const { id } = useParams<{ id: string }>();
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState<string>('');

    const recipe = recipes.find(r => r.id === id);

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

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
                    <h1 className="recipe-title">{recipe.title}</h1>
                    <p className="recipe-time">⏱️ {recipe.time} minutes</p>
                </div>

                <div className="recipe-images">
                    <img src={recipe.image} alt={recipe.title} className="recipe-main-image" />
                </div>

                <div className="recipe-content">
                    <div className="ingredients-section">
                        <h2 className="section-title">Ingredients</h2>
                        <ul className="ingredients-list">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="ingredient-item">
                                    <span className="ingredient-bullet">•</span> {ingredient.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="instructions-section">
                        <h2 className="section-title">Instructions</h2>
                        <div className="steps-container">
                            {recipe.steps.map((step, index) => (
                                step.trim() && ( // Only render non-empty steps
                                    <div key={index} className="step-card">
                                        <div className="step-number">{index + 1}</div>
                                        <p className="step-text">{step}</p>
                                    </div>
                                )
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

export default RecipePage;