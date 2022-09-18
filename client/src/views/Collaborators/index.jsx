import { Divider, Stack, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useCategories } from "../../../hooks/useCategories";
import { useCollaborateurs } from "../../../hooks/useCollaborateurs";
import CollaboratorsList from "../../Components/Collaborators/CollaboratorsList";
import cleanUpSpecialChars from "../../services/utils/cleanUpSpecialChar";
import { getUsersByNameAndLocation } from "../../services/utils/search/getUsersByNameAndLocation";
import { reduceByCollaboratorsCategory } from "../../services/utils/search/reduceByCollaboratorsCategory";
import unauthorizedChar from "../../services/utils/unauthorizedChar";
import GenericFormControlSelect from "../../Components/Form/GenericFormControlSelect";
import GenericInputs from "../../Components/Form/GenericInputs";

const Collaborators = () => {
    const filters = ["Nom", "Localisation"];
    const [collaborators, filteredCollaborators, errorMessage, setFilteredCollaborators, setErrorMessage] =
        useCollaborateurs();
    const categories = useCategories(collaborators);
    const [category, setCategory] = useState("");
    const [inputSearch, setInputSearch] = useState("");
    const [filter, setFilter] = useState(filters[0]);

    //* Resets the list of collaborators
    useEffect(() => {
        if (!inputSearch && !category) setFilteredCollaborators(collaborators);
    }, [inputSearch, category]);

    //* Search
    const checkToHaveData = (data) => {
        if (data.length === 0) setErrorMessage("Aucun résultat...");
        setFilteredCollaborators(data);
    };

    useEffect(() => {
        //* Search by category
        if (!category || inputSearch) return;
        const data = reduceByCollaboratorsCategory(collaborators, category);
        checkToHaveData(data);
    }, [category, inputSearch]);

    useEffect(() => {
        if (!inputSearch) return;
        const cleanStr = cleanUpSpecialChars(inputSearch);
        if (unauthorizedChar(cleanStr)) {
            setErrorMessage(`Charactère non autorisé.`);
            return;
        }
        if (errorMessage) setErrorMessage("");

        const results = getUsersByNameAndLocation(collaborators, filter, cleanStr);

        if (!category) return checkToHaveData(results);
        const data = reduceByCollaboratorsCategory(results, category);

        checkToHaveData(data);
    }, [inputSearch, filter, category]);

    return (
        <Stack>
            <Typography textAlign={"center"} fontSize={"clamp(24px, 8vw ,6rem)"} sx={{ lineHeight: "1.2em" }}>
                Liste des collaborateurs
            </Typography>

            <Divider
                color="aliceBlue"
                sx={{
                    marginBottom: { xs: "40px", sm: "60px" },
                    width: "clamp(65vw, 80vw, 1200px)",
                    marginInline: "auto",
                }}
            />

            <Stack spacing={10}>
                <Stack
                    spacing={{ xs: 3, sm: "none" }}
                    sx={{
                        flexDirection: { xs: "column", sm: "row" },
                        gap: { sm: "15px" },
                        width: "65vw",
                        marginInline: "auto",
                    }}
                >
                    <GenericInputs
                        label={"search"}
                        value={inputSearch}
                        setInput={setInputSearch}
                        error={errorMessage}
                    />
                    <GenericFormControlSelect
                        label={"Rechercher par :"}
                        data={filters}
                        value={filter}
                        setFunc={setFilter}
                    />
                    <GenericFormControlSelect
                        label={"Catégorie"}
                        data={categories}
                        value={category}
                        setFunc={setCategory}
                    />
                </Stack>
                <CollaboratorsList filteredCollaborators={filteredCollaborators} errorMessage={errorMessage} />
            </Stack>
        </Stack>
    );
};

export default Collaborators;
