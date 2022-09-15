export const getLocalStorage = () => {
    try {
        const data = JSON.parse(localStorage.getItem("projet_intranet"));
        return data;
    } catch (error) {
        return null;
    }
};
