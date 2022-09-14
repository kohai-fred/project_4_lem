export const reduceByCollaboratorsCategory = (collaborators) => {
    const data = collaborators.reduce((acc, curr) => {
        if (curr.service === category) acc.push(curr);
        return acc;
    }, []);
    return data;
};
