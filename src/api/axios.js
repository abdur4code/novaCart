import axios from "axios";

const api = axios.create({
    baseURL: 'https://dummyjson.com/',
    timeout: 7000,
});

export default api;