import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 10000
});

export default Axios;