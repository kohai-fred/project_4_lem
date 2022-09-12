import axios from "axios";
import { getToken } from "../utils/getToken";

export const axios_instance = axios.create({
    baseURL: import.meta.env.VITE_API_BACKEND,
    timeout: 2000,
    headers: { Authorization: `Bearer ${getToken()}` },
});
