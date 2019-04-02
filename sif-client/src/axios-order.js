import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost.com/'
});

export default instance;