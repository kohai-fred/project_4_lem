import { useState, useEffect } from "react";

export const useCategories = (collaborators) => {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        if (!collaborators) return;
        const data = collaborators.reduce(
            (acc, current) => {
                if (!acc.includes(current.service)) acc.push(current.service);
                return acc;
            },
            [""]
        );
        setCategories(data);
    }, [collaborators]);

    return categories;
};
