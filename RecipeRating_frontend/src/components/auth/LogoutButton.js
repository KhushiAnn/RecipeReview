import React from 'react';

function LogoutButton({ onLogout }) {
  const handleClick = () => {
    // Perform logout logic (e.g., clear token, update state)
    if (onLogout) {
      onLogout();
    }
    console.log('Logged out');
    // Redirect to login page
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={handleClick}
    >
      Logout
    </button>
  );
}

export default LogoutButton;