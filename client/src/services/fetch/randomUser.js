import { axios_instance } from "./axiosInstance";

export default async function getRandomUser() {
    try {
        const { data } = await axios_instance.get("/collaborateurs/random");
        return [data, null];
    } catch (error) {
        console.log("ERROR", error.response.data.error);
        return [null, error.response.data.error];
    }
}
