import api from './api';

// Login API request
export const login = async (email, password) => {
  try {
    const response = await api.post('login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Logout API request
export const logout = async () => {
  try {
    await api.post('users/logout'); // Call logout API
    localStorage.removeItem('authToken'); // Remove token from storage
  } catch (error) {
    console.error('Logout failed:', error);
  }
};


// Any other auth-related functions can go here (e.g., register, forgot password)
