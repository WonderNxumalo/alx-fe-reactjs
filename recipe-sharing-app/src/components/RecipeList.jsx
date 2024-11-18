import React from "react";
import { useRecipeStore } from "./recipeStore";
import SearchBar from "./SearchBar"
import { Link } from "react-router-dom";

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const { filteredRecipes } = useRecipeStore();

    return (
        <div>
            <h2>Recipes</h2>
            <SearchBar />
            {filteredRecipes.map(recipe => (
                <div key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
            </div>
            ))}

            {recipes.map(recipe => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;