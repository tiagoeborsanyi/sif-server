import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost.com:5000/'
});

export default instance;