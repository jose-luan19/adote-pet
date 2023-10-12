import axios from "axios";

export const ApiService = axios.create({
    baseURL: 'http://API:8000/api',
    headers: {
        'Content-Type': 'application/json'
    }
})