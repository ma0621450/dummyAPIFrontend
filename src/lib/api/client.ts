import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;
      const data = error.response.data;

      switch (status) {
        case 404:
          console.error('Resource not found:', data.message || 'Not found');
          break;
        case 422:
          console.error('Validation error:', data.errors || data.message);
          break;
        case 500:
          console.error('Server error:', data.message || 'Internal server error');
          break;
        default:
          console.error('API error:', error.message);
      }
    } else if (error.request) {
      console.error('Network error: No response received');
    } else {
      console.error('Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
