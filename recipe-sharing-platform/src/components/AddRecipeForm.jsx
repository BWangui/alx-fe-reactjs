// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  // Use an object to track errors for each field
  const [errors, setErrors] = useState({});

  // Handle input changes for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for the field being updated
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  // Validate ingredients to ensure at least two items are provided
  const validateIngredients = (ingredients) => {
    const items = ingredients.split(/[\n,]+/).map(item => item.trim()).filter(item => item !== '');
    return items.length >= 2;
  };

  // Validate all fields and update errors object accordingly
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required.';
    }
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else if (!validateIngredients(formData.ingredients)) {
      newErrors.ingredients = 'Please enter at least two ingredients.';
    }
    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required.';
    }

    setErrors(newErrors);
    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission with validation logic
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Replace console.log with your API call or state update logic
    console.log('Submitting Recipe:', formData);

    // Reset form after submission
    setFormData({
      title: '',
      ingredients: '',
      steps: '',
    });
    setErrors({});
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-8">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Add New Recipe</h2>
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
            className={`mt-2 block w-full rounded-lg border p-3 focus:border-indigo-500 focus:ring-indigo-500 ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter the recipe title"
          />
          {errors.title && <p className="text-red-500 mt-1 text-sm">{errors.title}</p>}
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
            className={`mt-2 block w-full rounded-lg border p-3 focus:border-indigo-500 focus:ring-indigo-500 ${
              errors.ingredients ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="List ingredients, separated by commas or new lines"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 mt-1 text-sm">{errors.ingredients}</p>}
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
            className={`mt-2 block w-full rounded-lg border p-3 focus:border-indigo-500 focus:ring-indigo-500 ${
              errors.steps ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Describe the preparation steps"
          ></textarea>
          {errors.steps && <p className="text-red-500 mt-1 text-sm">{errors.steps}</p>}
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
