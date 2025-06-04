import { useState } from "react";
import '../css/Recipes.css';
import { recipes } from "../data/recipes.ts";
import RecipeCard from "../components/RecipeCard.tsx";
import SearchBar, { SearchFilterContainer } from "../components/SearchBar.tsx";
import FilterPanel from "../components/FilterPanel.tsx";

function Recipes() {
    const [searchQuery, setSearchQuery] = useState<string| undefined>("");
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    // Extract all unique tags from recipes
    const allTags = Array.from(
        new Set(recipes.flatMap(recipe => recipe.tags || []))
    ).sort();

    const toggleFilter = (tag: string) => {
        setSelectedFilters((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const filteredRecipes = recipes.filter((recipe) => {
        // Search matching logic
        const matchesSearch =
            recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            recipe.ingredients.some(ingredient =>
                ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

        // Filter matching logic
        const matchesFilter =
            selectedFilters.length === 0 ||
            (recipe.tags && selectedFilters.every(tag =>
                recipe.tags?.includes(tag)));

        return matchesSearch && matchesFilter;
    });

    return (
        <div className="recipes-container">
            <h1 className="recipes-title">All Recipes</h1>

            <SearchFilterContainer>
                <SearchBar
                    searchQuery={searchQuery}
                    onSearch={setSearchQuery}
                />
                <FilterPanel
                    filters={allTags}
                    selectedFilters={selectedFilters}
                    onToggleFilter={toggleFilter}
                />
            </SearchFilterContainer>

            <div className="recipe-list">
                {filteredRecipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                    />
                ))}
            </div>
        </div>
    );
}

export default Recipes;