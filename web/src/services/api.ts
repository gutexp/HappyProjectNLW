import axios from 'axios';

const api = axios.create({
    baseURL: 'https://happy-deploy-jpa.herokuapp.com',
});

export default api;