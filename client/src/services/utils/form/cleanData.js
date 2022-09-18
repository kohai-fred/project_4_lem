import { checkIsAdmin } from "./checkAdmin";
import { checkPassword } from "./checkPassword";

/**
 * @param {{}} data
 * @param {Function} setError function of "react-hook-form"
 * @returns {{} || false}
 */
export const cleanData = (data, setError) => {
    let cleanData = structuredClone(data);
    cleanData = checkPassword(cleanData, setError);
    cleanData = checkIsAdmin(cleanData);
    return cleanData;
};
