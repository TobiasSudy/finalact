import { useState } from 'react';
import { Recipe } from '../data/recipes';
import * as React from "react";
import '../css/RecipeForm.css'

interface RecipeFormProps {
    initialData?: Recipe;
    onSubmit: (recipe: Recipe) => void;
}

export default function RecipeForm({ initialData, onSubmit }: RecipeFormProps) {
    const [recipe, setRecipe] = useState<Recipe>(initialData || {
        id: '',
        title: '',
        ingredients: [],
        steps: [],
        time: 0,
        difficulty: 'medium',
        tags: [],
        image: '',
        icon: ''
    });

    const [newIngredient, setNewIngredient] = useState({ name: '' });
    const [newStep, setNewStep] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(recipe);
    };

    const addIngredient = () => {
        if (newIngredient.name) {
            setRecipe({
                ...recipe,
                ingredients: [...recipe.ingredients, newIngredient]
            });
            setNewIngredient({ name: '' });
        }
    };

    const addStep = () => {
        if (newStep) {
            setRecipe({
                ...recipe,
                steps: [...recipe.steps, newStep]
            });
            setNewStep('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="recipe-form">
            <div className="form-group">
                <label>Title</label>
                <input
                    type="text"
                    value={recipe.title}
                    onChange={(e) => setRecipe({...recipe, title: e.target.value})}
                    required
                />
            </div>

            <div className="form-group">
                <label>Time (minutes)</label>
                <input
                    type="number"
                    value={recipe.time}
                    onChange={(e) => setRecipe({...recipe, time: Number(e.target.value)})}
                    required
                />
            </div>

            <div className="form-group">
                <label>Difficulty</label>
                <select
                    value={recipe.difficulty}
                    onChange={(e) => setRecipe({...recipe, difficulty: e.target.value as 'easy' | 'medium' | 'hard'})}
                >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>

            <div className="ingredients-section">
                <h3>Ingredients</h3>
                <div className="ingredient-input">
                    <input
                        type="text"
                        placeholder="Name"
                        value={newIngredient.name}
                        onChange={(e) => setNewIngredient({name: e.target.value})}
                    />
                    <button type="button" onClick={addIngredient}>Add</button>
                </div>
                <ul className="ingredients-list">
                    {recipe.ingredients.map((ing, idx) => (
                        <li key={idx}>
                            {ing.name}
                            <button
                                type="button"
                                onClick={() => setRecipe({
                                    ...recipe,
                                    ingredients: recipe.ingredients.filter((_, i) => i !== idx)
                                })}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="steps-section">
                <h3>Steps</h3>
                <div className="step-input">
                    <textarea
                        placeholder="Step description"
                        value={newStep}
                        onChange={(e) => setNewStep(e.target.value)}
                    />
                    <button type="button" onClick={addStep}>Add Step</button>
                </div>
                <ol className="steps-list">
                    {recipe.steps.map((step, idx) => (
                        <li key={idx}>
                            {step}
                            <button
                                type="button"
                                onClick={() => setRecipe({
                                    ...recipe,
                                    steps: recipe.steps.filter((_, i) => i !== idx)
                                })}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ol>
            </div>

            <button type="submit">Save Recipe</button>
        </form>
    );
}