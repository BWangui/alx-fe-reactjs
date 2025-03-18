import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../data.json"; // Ensure this file is correctly placed

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by ID
    const selectedRecipe = recipesData.find((recipe) => recipe.id.toString() === id);
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500 mt-10">Recipe not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8 bg-white shadow-xl rounded-lg">
      {/* Recipe Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">{recipe.name}</h1>

      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
      />

      {/* Ingredients Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-lg">{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Cooking Instructions */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Instructions</h2>
        <p className="text-gray-700 leading-relaxed text-lg">{recipe.instructions}</p>
      </div>

      {/* Back Button */}
      <div className="mt-6 text-center">
        <a href="/" className="inline-block px-6 py-2 text-lg font-medium text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
          ← Back to Recipes
        </a>
      </div>
    </div>
  );
};

export default RecipeDetail;
