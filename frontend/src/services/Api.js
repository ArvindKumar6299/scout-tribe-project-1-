
// services/api.js
// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:5000',
// });

export const loginSalesManager = (email, password) =>
  api.post('/api/salesManager/login', { email, password });
