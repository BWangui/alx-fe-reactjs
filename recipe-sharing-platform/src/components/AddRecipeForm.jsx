// src/components/AddRecipeForm.js
import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });
  const [error, setError] = useState('');

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
    // Replace console.log with API call or state update logic as needed
    console.log('Submitting Recipe:', formData);

    // Reset form after submission
    setFormData({
      title: '',
      ingredients: '',
      steps: '',
    });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Recipe Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        {/* Ingredients */}
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Ingredients
          </label>
          <textarea
            name="ingredients"
            id="ingredients"
            rows="4"
            value={formData.ingredients}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter ingredients separated by commas or new lines"
          ></textarea>
        </div>
        {/* Preparation Steps */}
        <div>
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
            Preparation Steps
          </label>
          <textarea
            name="steps"
            id="steps"
            rows="4"
            value={formData.steps}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          ></textarea>
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
