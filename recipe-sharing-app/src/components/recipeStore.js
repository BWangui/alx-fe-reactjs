import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],

  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

  deleteRecipe: (id) => set((state) => ({recipes: state.recipes.filter((recipe) => recipe.id !== id),})),

  updateRecipe: (id, updateRecipe) => set((state) => ({recipes: state.recipe.map((recipe) => recipe.id === id ? {...recipe, ...updateRecipe} : recipe),})),

  setRecipes: (recipes) => set({ recipes })
}));
