import axiosInstance from "./axiosInstance";

export const getUser = async (id) => {
    const [data, error] = await axiosInstance(`/collaborateurs/${id}`);
    return [data, error];
};

export const editUser = async (data, id) => {
    const [response, error] = await axiosInstance(`/collaborateurs/${id}`, {
        method: "put",
        data: { ...data },
    });
    return [response, error];
};

export const addUser = async (data) => {
    const [response, error] = await axiosInstance(`/collaborateurs`, {
        method: "post",
        data: { ...data },
    });
    return [response, error];
};

export const deleteUser = async (id) => {
    const [response, error] = await axiosInstance(`/collaborateurs/${id}`, {
        method: "delete",
    });
    return [response, error];
};

export default async function login(data) {
    const [response, error] = await axiosInstance("/login", {
        method: "post",
        data: { ...data },
    });
    return [response, error];
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
