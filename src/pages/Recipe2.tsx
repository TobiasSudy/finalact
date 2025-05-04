import {useState} from "react";
import chicken from '../assets/chicken.webp'
import sandwich from '../assets/sandwich.jpg'

const recipeData = {
    id: '2',
    title: 'Chicken Sandwich',
    time: 20,
    ingredients: ['Sandwich', 'Chicken pieces', 'Cheese', 'Onions', 'Vegetables for topping', 'grill oil or butter'],
    instructions: '1. Cut the chicken pieces into small pieces. Put the cut onions in the pan and sweat them until they have a good color.\n' +
        '2. Add the chicken to the onions and roast it. Season it like you want. I used salt, pepper, paprika powder, mexican grill seasoning.\n' +
        '3. Add the cheese to the chicken. Meanwhile, sweat the sandwich so it gets a good color and crispy on the outside\n' +
        '4. When the chicken with the cheese is ready, prepare the sandwich. First, put a sauce on the bread, then the chicken, on the chicken ' +
        'more cheese you want, then the vegetables of your choice and lastly add another sauce.\n' +
        '5. Enjoy',
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

        <div className="recipe-page">
            <h1>{recipeData.title}</h1>
            <img src={recipeData.image1} alt={recipeData.title} className="recipe-image" />
            <img src={recipeData.image2} alt={recipeData.title} className="recipe-image" />
            <p>Time: {recipeData.time} minutes</p>

            <h2>Ingredients:</h2>
            <ul>
                {recipeData.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <h2>Instructions:</h2>
            <div className="instructions">
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

export default Recipe2;