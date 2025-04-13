import axios from "axios";

export const axiosInstance = axios.create({
<<<<<<< HEAD
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:5002/api" : "/api",
=======
    baseURL: "https://backend-chat-ado2.onrender.com",
>>>>>>> parent of 526bc53 (Revert "Links")
    withCredentials: true,
});