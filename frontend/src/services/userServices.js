import api from './api';

export const getAllUsers = async () => {
  try {
    const response = await api.get('/users/all-users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; 
  }
};

