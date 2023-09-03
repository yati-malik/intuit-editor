import axios from 'axios';

export const Axios = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 10000
});