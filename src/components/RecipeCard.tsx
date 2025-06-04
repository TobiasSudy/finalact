import { useState } from "react";
import { Recipe } from "../data/recipes";
import { Rating } from "./Rating";

function RecipeCard({ recipe }: { recipe: Recipe }) {
    const [comments, setComments] = useState<string[]>([]);
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState<number | null>(null);

    return (
        <div className="recipe-card">
            <h2>{recipe.title}</h2>
            <img className="recipe-card-image" src={recipe.image} alt={recipe.title} />
            <p>Time: {recipe.time} min</p>
            <p>Ingredients: {recipe.ingredients.map(i => i.name).join(", ")}</p>

            <Rating
                value={rating}
                onChange={(newRating) => {
                    setRating(newRating);
                    console.log("Rated:", newRating);
                }}
            />

            <div className="comment-section">
                <textarea
                    placeholder="Leave a comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button
                    onClick={() => {
                        if (comment.trim() !== "") {
                            setComments([...comments, comment]);
                            setComment("");
                        }
                    }}
                >
                    Add Comment
                </button>
            </div>

            <ul>
                {comments.map((c, i) => (
                    <li key={i}>{c}</li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeCard;