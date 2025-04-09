import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://backend-chat-ado2.onrender.com",
    withCredentials: true,
});