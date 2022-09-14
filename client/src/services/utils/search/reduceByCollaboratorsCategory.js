export const reduceByCollaboratorsCategory = (collaborators, category) => {
    const data = collaborators.reduce((acc, curr) => {
        if (curr.service === category) acc.push(curr);
        return acc;
    }, []);
    return data;
};
