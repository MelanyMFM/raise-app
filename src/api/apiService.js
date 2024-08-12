import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/api/v1'

const apiService = {
  login: (credentials) => axios.post(`${API_BASE_URL}/login`, credentials),
  registerUser: (userData) => axios.post(`${API_BASE_URL}/register`, userData),
  // Add other API methods here
};

export default apiService;