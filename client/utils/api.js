import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:5000/api',
  timeout: 10000,
});