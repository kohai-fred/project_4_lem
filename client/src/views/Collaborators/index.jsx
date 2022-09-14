import { Divider, Stack, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useCategories } from "../../../hooks/useCategories";
import { useCollaborateurs } from "../../../hooks/useCollaborateurs";
import CollaboratorsList from "../../Components/Collaborators/CollaboratorsList";
import cleanUpSpecialChars from "../../services/utils/cleanUpSpecialChar";
import { getUsersByNameAndLocation } from "../../services/utils/search/getUsersByNameAndLocation";
import { reduceByCollaboratorsCategory } from "../../services/utils/search/reduceByCollaboratorsCategory";
import unauthorizedChar from "../../services/utils/unauthorizedChar";
import GenericFormControlSelect from "../../Components/Collaborators/GenericFormControlSelect";

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
        const data = reduceByCollaboratorsCategory(collaborators);
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
        const data = reduceByCollaboratorsCategory(results);

        checkToHaveData(data);
    }, [inputSearch, filter, category]);

    return (
        <Stack>
            <Typography textAlign={"center"} fontSize={24}>
                Liste des collaborateurs
            </Typography>

            <Divider color="aliceBlue" />

            <Stack spacing={6} mt={2}>
                <Stack
                    spacing={{ xs: 3, sm: "none" }}
                    sx={{ flexDirection: { xs: "column", sm: "row" }, gap: { sm: "15px" } }}
                >
                    <TextField
                        id="search"
                        label="search"
                        variant="filled"
                        sx={{
                            flex: { sm: 1 },
                            borderRadius: "5px",
                            background:
                                "linear-gradient(180deg, rgba(255,255,255,0.24833683473389356) 0%, rgba(255,255,255,1) 50%)",
                        }}
                        value={inputSearch}
                        onChange={(e) => setInputSearch(e.target.value)}
                        error={errorMessage ? true : false}
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
