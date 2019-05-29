import axios from 'axios';
const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

// Axios instance
const axiosInstance = axios.create({baseURL});

export default axiosInstance;