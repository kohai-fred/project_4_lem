import axios from "axios";
import { getLocalStorage } from "../utils/getLocalStorage";

/**
 * @param {String} route "/routeName"
 * @param {Object} conf
 * @returns {[data, error]}
 */
export default async function axiosInstance(route, conf = { method: "get" }) {
    const localSto = getLocalStorage();
    const URL = import.meta.env.VITE_API_BACKEND;
    try {
        const { data } = await axios(`${URL + route}`, {
            ...conf,
            headers: { Authorization: localSto ? `Bearer ${localSto.token}` : "" },
        });
        return [data, null];
    } catch (error) {
        console.log("ERROR", error);
        return [null, error.response.data?.error];
    }
}
