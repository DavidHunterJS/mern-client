// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://mern-q7g3.onrender.com:8080',
});

export default axiosInstance;
