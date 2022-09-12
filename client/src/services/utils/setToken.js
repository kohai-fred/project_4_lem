export const setToken = (token) => {
    const name = "projet_intranet";
    const storage = window.localStorage.getItem(name);
    if (storage) return;
    window.localStorage.setItem(name, JSON.stringify({ token: token }));
};
