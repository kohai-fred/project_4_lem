import axios from "axios";
import { setLocalStorage } from "../../utils/setLocalStorage";
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
        setLocalStorage(data.token, data.user.id, data.user.isAdmin);
        return [{ ...data.user, token: data.token }, null];
    } catch (error) {
        const message = error.response.data.error;
        return [null, message];
    }
}
