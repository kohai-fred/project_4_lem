/**
 * Convert string value to Boolean for the api
 * @param {{}} data
 * @returns {{}}
 */
export const checkIsAdmin = (data) => {
    if (!data.isAdmin) return data;
    data.isAdmin = data.isAdmin === "false" ? false : true;
    return data;
};
