import axios from 'axios';

const api = axios.create({
    baseURL:'https://b25c-2001-569-75a8-c00-c47e-4711-766-9990.ngrok-free.app', // change this everytime connected ngrok to server
    headers: {"ngrok-skip-browser-warning": "true"}
});

export default api;