/**
 * Check if valide number and and auto insert "-"
 * @param {Function} getValues function of "react-hook-form"
 * @param {Function} setValue function of "react-hook-form"
 * @param {Function} setError function of "react-hook-form"
 * @returns
 */
export const handleChangePhone = (getValues, setValue, setError, e) => {
    const phone = getValues("phone");
    console.log("🚀 ~ file: handleChangePhone.js ~ line 25 ~ handleChangePhone ~ e", e);
    if (e.code === "Backspace" || e.key === "Backspace" || e.keyCode === 8) return;
    if (isNaN(+phone[phone.length - 1])) {
        setError("phone", { message: "Ceci n'est pas un numéro valide." });
        return false;
    }

    if (phone.length >= 14) {
        // console.log("🚀 ~ file: index.jsx ~ line 80 ~ handleChangePhone ~ phone.subString(0, 15)", typeof phone);
        // setValue("pone", phone.subString(0, 15));
        return;
    }
    console.log("🚀 ~ file: index.jsx ~ line 73 ~ handleChangePhone ~ phone.length", phone[phone.length - 1]);
    const newPhone = phone.length % 3 === 2 ? phone + "-" : phone;
    setValue("phone", newPhone);
};
