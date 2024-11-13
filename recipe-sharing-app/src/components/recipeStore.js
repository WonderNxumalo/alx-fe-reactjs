import create from 'zustand';
/*import getState from React*/
import React from 'react';

 export const useRecipeStore = create(set => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({ recipes }),
    updateRecipe: (updatedRecipe) => set(state => ({ recipes: state.recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe)})),
    deleteRecipe: (recipeId) => set(state => ({ recipes: state.recipes.filter(recipe => recipe.id !== recipeId)})),
    searchTerm: '',
    setSearchTerm: (term) => set({ setSearchTerm: term}),
    filteredRecipes: [],
    filterRecipes: () => set(state => ({ filteredRecipes: state.recipes.filter(recipe => recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))})),
    getFilteredRecipes: () => {
        const { recipes, searchTerm } = getState();
        return recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));
    },
    favorites: [],
    addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId]})),
    removeFavorite: (recipeId) => set(state => ({ favorites: state.favorites.filter(id => id !== recipeId)})),
    recommendations: [],
    generateRecommendations: () => set(state => {
        const recommended = state.recipe.filter(recipe => state.favorites.includes(recipe.id) && Math.random() > 0.5);
        return { recommendations: recommended };
    }),
}));
