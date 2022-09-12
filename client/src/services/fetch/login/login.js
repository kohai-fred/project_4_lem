import axios from "axios";
/**
 *
 * @param {String} email
 * @param {String} password
 */
export default async function login(email, password) {
    const URL = import.meta.env.VITE_API_BACKEND;

    const response = await axios.post(`${URL}/api/login`, {
        email: email,
        password: password,
    });
}
