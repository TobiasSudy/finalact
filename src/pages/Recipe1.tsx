
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
    instructions: '1. Prepare a pan with oil each for the risotto (here also the butter) and the salmon. Also prepare a small pan for the vegetable broth.\n' +
        '2. Warm up the vegetable broth. Put in the cut onions in the risotto pan and sweat them a little.'+
        'Now put the risotto rice to that and roast it 2-3 minutes. ' +
        'Then put the white wine and a portion of the vegetable broth in it.\n' +
        '3. Rost the salmons and when they are put in the rama cremefine and the basil pesto. Season the sauce as you want.' +
        'For example, I seasoned the sauce with salt, pepper, a little of chilli and a specific soup seasoning.\n' +
        ' 4. Keep adding broth to the rice until it has absorbed all the broth. After 15-20 minutes the rice should be ready to be eaten.\n' +
        '5. Now just add the cut leaves and the remaining butter. Season the rice with salt and pepper and if you want you can put in parmesan.\n' +
        '6. Prepare the dish and enjoy.',
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
            <h1>{recipeData.title}</h1>
            <img src={recipeData.image} alt={recipeData.title} className="recipe-image" />
            <p>Time: {recipeData.time} minutes</p>

            <h2>Ingredients:</h2>
            <ul>
                {recipeData.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <h2>Instructions:</h2>
            <div>
                {recipeData.instructions.split('\n').map((step, index) => (
                    <p key={index}>{step}</p>
                ))}
            </div>

            <h2>Comments</h2>
            <div className="comment-section">
                <textarea
                    placeholder="Leave a comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={handleAddComment}>Add Comment</button>
            </div>

            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    );
}

export default Recipe1;
