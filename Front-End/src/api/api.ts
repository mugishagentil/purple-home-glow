import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wxw-project.onrender.com/api/',
});



export default api;
