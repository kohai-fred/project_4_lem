import axios from "axios";
import { setToken } from "../../utils/setToken";
/**
 *
 * @param {String} email
 * @param {String} password
 */
export default async function login(email, password) {
    const URL = import.meta.env.VITE_API_BACKEND;

    try {
        const { data } = await axios.post(`${URL}/login`, {
            email: email.trim(),
            password: password.trim(),
        });
        setToken(data.token);
        return [{ ...data.user, token: data.token }, null];
    } catch (error) {
        const message = error.response.data.error;
        return [null, message];
    }
}
