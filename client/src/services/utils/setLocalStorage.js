export const setLocalStorage = (token, id, isAdmin) => {
    const name = "projet_intranet";
    const storage = window.localStorage.getItem(name);
    if (storage) return;
    window.localStorage.setItem(name, JSON.stringify({ token: token, id: id, isAdmin: isAdmin }));
};
