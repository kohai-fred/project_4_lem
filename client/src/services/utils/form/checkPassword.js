/**
 * @param {{}} data
 * @param {Function} setError function of "react-hook-form"
 * @returns {{} || false}
 */
export const checkPassword = (data, setError) => {
    if (!data.password) {
        delete data.password;
        delete data.confirmPassword;
        return data;
    }
    if (data.password.length < 8) {
        setError("password", { message: "le mot de passe est trop court." });
        return false;
    }
    if (data.password !== data.confirmPassword) {
        setError("password", { message: "les mots de passe ne sont pas identique." });
        setError("confirmPassword", { message: "les mots de passe ne sont pas identique." });
        return false;
    }
    delete data.confirmPassword;
    return data;
};
