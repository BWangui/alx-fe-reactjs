// src/components/AddRecipeForm.js
import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });
  const [errors, setErrors] = useState('');

  // Handle input changes for all fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate ingredients to ensure at least two items are provided
  const validateIngredients = (ingredients) => {
    // Split the ingredients string by comma or newline and filter out empty strings
    const items = ingredients.split(/[\n,]+/).map(item => item.trim()).filter(item => item !== '');
    return items.length >= 2;
  };

  // Handle form submission with validation logic
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all fields are filled out
    if (!formData.title || !formData.ingredients || !formData.steps) {
      setError('Please fill in all fields.');
      return;
    }

    // Validate ingredients list
    if (!validateIngredients(formData.ingredients)) {
      setError('Please enter at least two ingredients.');
      return;
    }

    setError('');
    // Replace console.log with your API call or state update logic
    console.log('Submitting Recipe:', formData);

    // Reset form after submission
    setFormData({
      title: '',
      ingredients: '',
      steps: '',
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-8">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Add New Recipe</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipe Title */}
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">
            Recipe Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter the recipe title"
          />
        </div>
        {/* Ingredients */}
        <div>
          <label htmlFor="ingredients" className="block text-lg font-medium text-gray-700">
            Ingredients
          </label>
          <textarea
            name="ingredients"
            id="ingredients"
            rows="4"
            value={formData.ingredients}
            onChange={handleChange}
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="List ingredients, separated by commas or new lines"
          ></textarea>
        </div>
        {/* Preparation Steps */}
        <div>
          <label htmlFor="steps" className="block text-lg font-medium text-gray-700">
            Preparation Steps
          </label>
          <textarea
            name="steps"
            id="steps"
            rows="4"
            value={formData.steps}
            onChange={handleChange}
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Describe the preparation steps"
          ></textarea>
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
