import { useState, useEffect } from "react";
import axiosInstance from "../src/services/fetch/axiosInstance";

export const useCollaborateurs = () => {
    const [collaborators, setCollaborators] = useState(null);
    const [filteredCollaborators, setFilteredCollaborators] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        async function getCollab() {
            const [data, error] = await axiosInstance("/collaborateurs");
            console.log("🚀 ~ file: useCollaborateurs.js ~ line 12 ~ getCollab ~ data", data);
            if (error) return setErrorMessage(error);
            setCollaborators(data);
            setFilteredCollaborators(data);
        }
        getCollab();
    }, []);

    return [collaborators, filteredCollaborators, errorMessage, setFilteredCollaborators, setErrorMessage];
};
