import React, { useState } from 'react';

function SubmitRecipe({ onSubmit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [instructions, setInstructions] = useState(['']);
  const [cuisine, setCuisine] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleIngredientChange = (index, event) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = event.target.value;
    setIngredients(newIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const removeIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleInstructionChange = (index, event) => {
    const newInstructions = [...instructions];
    newInstructions[index] = event.target.value;
    setInstructions(newInstructions);
  };

  const addInstruction = () => {
    setInstructions([...instructions, '']);
  };

  const removeInstruction = (index) => {
    const newInstructions = [...instructions];
    newInstructions.splice(index, 1);
    setInstructions(newInstructions);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    const recipeData = { name, description, ingredients, instructions, cuisine, imageUrl };

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Recipe submitted:', recipeData);
      if (onSubmit) {
        onSubmit(recipeData);
        // Optionally reset the form
        setName('');
        setDescription('');
        setIngredients(['']);
        setInstructions(['']);
        setCuisine('');
        setImageUrl('');
      }
    } catch (err) {
      setError('Failed to submit recipe.');
      console.error('Submit error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Submit New Recipe</h2>
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline">{error}</span>
      </div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Recipe Name</label>
          <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea id="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={description} onChange={(e) => setDescription(e.target.value)} rows="3" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Ingredients</label>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex items-center mb-2">
              <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={ingredient} onChange={(e) => handleIngredientChange(index, e)} required />
              {ingredients.length > 1 && (
                <button type="button" onClick={() => removeIngredient(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded ml-2 focus:outline-none focus:shadow-outline text-xs">Remove</button>
              )}
            </div>
          ))}
          <button type="button" onClick={addIngredient} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">Add Ingredient</button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Instructions</label>
          {instructions.map((instruction, index) => (
            <div key={index} className="flex items-center mb-2">
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={instruction} onChange={(e) => handleInstructionChange(index, e)} rows="2" required />
              {instructions.length > 1 && (
                <button type="button" onClick={() => removeInstruction(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded ml-2 focus:outline-none focus:shadow-outline text-xs">Remove</button>
              )}
            </div>
          ))}
          <button type="button" onClick={addInstruction} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">Add Instruction</button>
        </div>
        <div className="mb-4">
          <label htmlFor="cuisine" className="block text-gray-700 text-sm font-bold mb-2">Cuisine</label>
          <input type="text" id="cuisine" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={cuisine} onChange={(e) => setCuisine(e.target.value)} />
        </div>
        <div className="mb-6">
          <label htmlFor="imageUrl" className="block text-gray-700 text-sm font-bold mb-2">Image URL (Optional)</label>
          <input type="url" id="imageUrl" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </div>
        <div className="flex items-center justify-end">
          <button type="submit" className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Recipe'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SubmitRecipe;