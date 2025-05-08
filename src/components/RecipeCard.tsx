import {useState} from "react";
import {Recipe} from "../data/recipes.ts";
import Rating from "./Rating.tsx";


function RecipeCard({ recipe }: { recipe: Recipe }) {

    const [comments, setComments] = useState<string[]>([]);
    const [comment, setComment] = useState("");

    return (
        <div className="recipe-card">
            <h2>{recipe.title}</h2>
            <img className={"recipe-card-image"} src={recipe.image} alt={recipe.title} />
            <p>Time: {recipe.time} min</p>
            <p>Ingredients: {recipe.ingredients.join(", ")}</p>
            <Rating onRate={(r) => console.log("Rated:", r)} />

            <div className="comment-section">
                <textarea
                    placeholder="Leave a comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>
            <button onClick={() => {
                if (comment.trim() !== "") {
                    setComments([...comments, comment]);
                    setComment("");
                }
            }}>Add Comment</button>

            <ul>
                {comments.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
        </div>
    );
}

export default RecipeCard;