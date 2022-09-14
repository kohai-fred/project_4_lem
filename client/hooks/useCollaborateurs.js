import { useState, useEffect } from "react";
import getWithAxios from "../src/services/fetch/getWithAxios";

export const useCollaborateurs = () => {
    const [collaborators, setCollaborators] = useState(null);
    const [filteredCollaborators, setFilteredCollaborators] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        async function getCollab() {
            const [data, error] = await getWithAxios("/collaborateurs");
            if (error) return setErrorMessage(error);
            setCollaborators(data);
            setFilteredCollaborators(data);
        }
        getCollab();
    }, []);

    return [collaborators, filteredCollaborators, errorMessage, setFilteredCollaborators, setErrorMessage];
};
