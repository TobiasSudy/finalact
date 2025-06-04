import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeForm from '../components/RecipeForm';
import { Recipe } from '../data/recipes';
import { recipes as existingRecipes } from '../data/recipes';

export default function AddRecipe() {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState(existingRecipes);

    const handleSubmit = (newRecipe: Recipe) => {
        // Generate a new ID
        newRecipe.id = (recipes.length + 1).toString();
        // Update the recipes array (in a real app, you'd save to a backend)
        setRecipes([...recipes, newRecipe]);
        // Navigate back to recipes page
        navigate('/recipes');
    };

    return (
        <div className="page-container">
            <h1>Add New Recipe</h1>
            <RecipeForm onSubmit={handleSubmit} />
        </div>
    );
}