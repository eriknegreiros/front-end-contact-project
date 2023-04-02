import axios from "axios";

export const Api = axios.create({
    baseURL: "https://api-contact.onrender.com", 
    timeout: 12000,
})