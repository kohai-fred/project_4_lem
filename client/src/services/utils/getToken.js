export const getToken = () => {
    const { token } = JSON.parse(localStorage.getItem("projet_intranet"));
    return token;
};
