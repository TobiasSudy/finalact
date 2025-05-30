import {useState} from "react";
import '../css/Recipes.css'
import recipes from "../data/recipes.ts";
import RecipeCard from "./RecipeCard.tsx";
import SearchBar, {SearchFilterContainer} from "./SearchBar.tsx";
import FilterPanel from "./FilterPanel.tsx";


function Recipes() {

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    const allTags = ["fish", "under30", "meat", "lunch", "dinner" , "snack"];

    const toggleFilter = (tag: string) => {
        setSelectedFilters((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const filteredRecipes = recipes.filter((recipe) => {
        const matchesSearch =
            recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            recipe.ingredients.some((i) =>
                i.toLowerCase().includes(searchQuery.toLowerCase())
            );
        const matchesFilter =
            selectedFilters.length === 0 ||
            selectedFilters.every((tag) => recipe.tags.includes(tag));
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="recipes-container">
            <h1 className="recipes-title">All Recipes</h1>

            <SearchFilterContainer>
                <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
                <FilterPanel
                    filters={allTags}
                    selectedFilters={selectedFilters}
                    onToggleFilter={toggleFilter}
                />
            </SearchFilterContainer>

            <div className="recipe-list">
                {filteredRecipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}

export default Recipes;