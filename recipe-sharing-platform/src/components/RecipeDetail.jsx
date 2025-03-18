import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../data.json"; 

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipesData.find((recipe) => recipe.id.toString() === id);
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500">Recipe not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h2 className="text-xl font-semibold text-gray-700">Ingredients</h2>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold text-gray-700">Instructions</h2>
      <p className="text-gray-600">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
