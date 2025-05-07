import recipe3 from '../assets/rezept3.jpg'
import {useState} from "react";

const recipeData = {
    id: 3,
    title: "Pasta with ham and tomato sauce",
    time: '20-25',
    ingredients: ['Pasta', 'Ham', 'Tomato Sugo (Sauce)', 'Salsa Sauce', 'Cayenne Pepper', 'Onions', 'Paprika powder', 'spring onions'],
    instructions: 'Bring a large pot of salted water to boil for the pasta. Cook the pasta according to package instructions until al dente.\n' +
        'While the pasta cooks, dice the onions and slice the ham into thin strips. Thinly slice the spring onions for garnish.\n' +
        'Heat some oil in a large pan over medium heat. Add the diced onions and sauté until translucent (about 3-4 minutes).\n' +
        'Add the ham to the pan and cook for 2-3 minutes until slightly browned. Season with paprika powder and a pinch of cayenne pepper for heat.\n' +
        'Pour in the tomato sugo and salsa sauce. Stir well and let the sauce simmer for 5-7 minutes to allow flavors to combine.\n' +
        'Drain the cooked pasta, reserving about 1/2 cup of pasta water. Add the pasta to the sauce in the pan, tossing to coat evenly.\n' +
        'If the sauce seems too thick, add a splash of the reserved pasta water to reach your desired consistency.\n' +
        'Garnish with sliced spring onions and serve immediately. For extra flavor, you can add grated Parmesan cheese on top.\n' +
        'Enjoy your delicious pasta dish!',
    image: recipe3,
}

function Recipe3() {

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

export default Recipe3;