import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [flashMessage, setFlashMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    try {
      const response = await fetch('http://127.0.0.1:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        login({ username: data.username, role: data.role, token: data.access_token });
        setFlashMessage('Logged in successfully!');
        navigate('/', { state: { flashMessage: 'Logged in successfully!' } });
      } else {
        setError(data.error || 'Login failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add authentication logic
    console.log('Form submitted:', formData);
  };

  // Clear flash message after 3 seconds
  useEffect(() => {
    if (flashMessage) {
      const timer = setTimeout(() => {
        setFlashMessage('');
      }, 3000); // 3000 milliseconds = 3 seconds

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [flashMessage]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </h2>
        </div>
        
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {flashMessage && <div className="text-green-500 text-sm">{flashMessage}</div>}

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 bg-gray-50 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-colors duration-200 sm:text-sm"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 bg-gray-50 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-colors duration-200 sm:text-sm"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 bg-gray-50 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-colors duration-200 sm:text-sm"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 bg-gray-50 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-colors duration-200 sm:text-sm"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
            )}
          </div>

          {isLogin && (
            <div className="flex items-center justify-end">
              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </Link>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isLogin ? 'Sign in' : 'Sign up'}
            </button>
          </div>
        </form>

        <button
          type="button"
          className="w-full font-medium text-blue-600 hover:text-blue-500 text-sm mt-4"
          onClick={() => navigate('/register')}
        >
          {isLogin 
            ? "Don't have an account? Sign up" 
            : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
};

export default Login;
  