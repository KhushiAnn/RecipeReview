import React, { useState } from 'react';

function AdaptationSuggestion({ recipeId, onSubmit }) {
  const [adaptationText, setAdaptationText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    if (!adaptationText.trim()) {
      setError('Please enter your adaptation suggestion.');
      setLoading(false);
      return;
    }

    const adaptationData = { recipeId, adaptationText };

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Adaptation suggested:', adaptationData);
      if (onSubmit) {
        onSubmit(adaptationData);
        setAdaptationText(''); // Clear the form
      }
    } catch (err) {
      setError('Failed to suggest adaptation.');
      console.error('Adaptation error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Suggest an Adaptation</h2>
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline">{error}</span>
      </div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="adaptationText" className="block text-gray-700 text-sm font-bold mb-2">Your Suggestion</label>
          <textarea
            id="adaptationText"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={adaptationText}
            onChange={(e) => setAdaptationText(e.target.value)}
            rows="4"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className={`bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Suggest'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdaptationSuggestion;