import axios from 'axios';

export const Axios = axios.create({
    baseURL: '',
    timeout: 10000
});