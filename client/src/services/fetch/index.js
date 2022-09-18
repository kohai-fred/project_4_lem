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
