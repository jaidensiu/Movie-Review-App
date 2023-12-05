import axios from 'axios';

const api = axios.create({
    baseURL:'https://cd85-2001-569-75a8-c00-554d-8658-a5f9-a19e.ngrok-free.app', // change this everytime connected ngrok to server
    headers: {"ngrok-skip-browser-warning": "true"}
});

export default api;