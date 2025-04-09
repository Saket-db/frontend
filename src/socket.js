import { io } from "socket.io-client";

const socket = io("https://backend-chat-ado2.onrender.com", { withCredentials: true });

export default socket;
