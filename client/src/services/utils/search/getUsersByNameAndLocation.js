import cleanUpSpecialChars from "../cleanUpSpecialChar";

const strMatch = (str1, str2, acc, curr, cleanStr) => {
    if (cleanUpSpecialChars(str1).includes(cleanStr) || cleanUpSpecialChars(str2).includes(cleanStr)) {
        acc.push(curr);
    }
};
export const getUsersByNameAndLocation = (collaborators, filter, cleanStr) => {
    return collaborators.reduce((acc, curr) => {
        switch (filter) {
            case "Nom":
                strMatch(curr.firstname, curr.lastname, acc, curr, cleanStr);
                break;
            case "Localisation":
                strMatch(curr.city, curr.country, acc, curr, cleanStr);
                break;
        }
        return acc;
    }, []);
};
