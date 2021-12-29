import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3004',
    timeout: 500
})

export default api;