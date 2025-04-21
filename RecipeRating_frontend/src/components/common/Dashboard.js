import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button'; // Assuming this exists

function Dashboard() {
  const { isAuthenticated, user, logout, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
        <p className="text-gray-600">Welcome, {user?.username}!</p>
        <Button variant="danger" className="mt-4" onClick={logout}>Logout</Button>
      </div>
    </div>
  );
}

export default Dashboard;