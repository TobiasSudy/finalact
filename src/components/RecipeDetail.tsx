import { useState } from 'react';
import styles from './RecipeDetail.module.css';
import { Recipe } from '../types/Recipe';
import { Rating } from './Rating';

interface Comment {
    id: string;
    text: string;
    author: string;
    createdAt: Date;
    avatar: string;
}

interface RecipeDetailProps {
    recipe: Recipe;
}

export function RecipeDetail({ recipe }: RecipeDetailProps) {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState<Comment[]>([]);
    const [rating, setRating] = useState<number | null>(null);

    const handleAddComment = () => {
        if (comment.trim() === '') return;

        const newComment: Comment = {
            id: Date.now().toString(),
            text: comment,
            author: 'Anonymous',
            createdAt: new Date(),
            avatar: `https://i.pravatar.cc/150?u=${Date.now()}`
        };

        setComments(prev => [newComment, ...prev]);
        setComment('');
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleAddComment();
        }
    };

    return (
        <div className={styles.container}>
            {/* Rezept-Header */}
            <header className={styles.header}>
                <h1 className={styles.title}>{recipe.title}</h1>
                <div className={styles.meta}>
          <span className={styles.metaItem}>
            ⏱️ {recipe.time} min
          </span>
                    {recipe.servings && (
                        <span className={styles.metaItem}>
              🍽️ {recipe.servings} servings
            </span>
                    )}
                    {rating !== null && (
                        <Rating
                            value={rating}
                            onChange={setRating}
                            className="ml-auto"
                        />
                    )}
                </div>
            </header>

            {/* Rezept-Inhalt */}
            <div className={styles.content}>
                {/* Zutaten */}
                <div className={styles.ingredients}>
                    <h2 className={styles.ingredientsTitle}>Ingredients</h2>
                    <ul className={styles.ingredientsList}>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index} className={styles.ingredient}>
                                <span className={styles.ingredientBullet}></span>
                                <span>
                  {ingredient.amount && `${ingredient.amount} `}
                                    {ingredient.unit && `${ingredient.unit} `}
                                    {ingredient.name}
                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Zubereitung */}
                <div className={styles.instructions}>
                    <h2 className={styles.instructionsTitle}>Instructions</h2>
                    {recipe.steps.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <span className={styles.stepNumber}>{index + 1}</span>
                            <p>{step}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Kommentarbereich */}
            <section className={styles.commentsSection}>
                <h2 className={styles.commentsTitle}>
                    Comments ({comments.length})
                </h2>

                {/* Kommentar-Formular */}
                <div className={styles.commentForm}>
                    <img
                        src="https://i.pravatar.cc/150?u=current-user"
                        alt="Your avatar"
                        className={styles.avatar}
                    />
                    <div className={styles.commentInputContainer}>
            <textarea
                placeholder="Share your thoughts about this recipe..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onKeyDown={handleKeyDown}
                className={styles.commentTextarea}
                rows={3}
            />
                        <button
                            onClick={handleAddComment}
                            disabled={!comment.trim()}
                            className={styles.submitButton}
                        >
                            Post Comment
                        </button>
                    </div>
                </div>

                {/* Kommentar-Liste */}
                <div className={styles.commentsList}>
                    {comments.length === 0 ? (
                        <p className={styles.noComments}>No comments yet. Be the first to comment!</p>
                    ) : (
                        comments.map((comment) => (
                            <div key={comment.id} className={styles.comment}>
                                <img
                                    src={comment.avatar}
                                    alt={comment.author}
                                    className={styles.avatar}
                                />
                                <div className={styles.commentContent}>
                                    <div className={styles.commentHeader}>
                                        <span className={styles.commentAuthor}>{comment.author}</span>
                                        <span className={styles.commentDate}>
                      {comment.createdAt.toLocaleDateString()}
                    </span>
                                    </div>
                                    <p>{comment.text}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
}