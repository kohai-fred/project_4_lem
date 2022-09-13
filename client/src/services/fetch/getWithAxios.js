import { axios_instance } from "./axiosInstance";

/**
 * @param {String} route "/routeName"
 * @returns {[data, error]}
 */
export default async function getWithAxios(route) {
    try {
        const { data } = await axios_instance.get(`${route}`);
        return [data, null];
    } catch (error) {
        console.log("ERROR", error.response.data.error);
        return [null, error.response.data.error];
    }
}
