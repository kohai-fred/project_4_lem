import { Box, Divider, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { useMemo, useState, useEffect } from "react";
import ProfileCard from "../../Components/ProfileCard";
import getWithAxios from "../../services/fetch/getWithAxios";
import GenericFormControl from "./GenericFormControl";

const Collaborators = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [collaborators, setCollaborators] = useState(null);
    const [filteredCollaborators, setFilteredCollaborators] = useState(collaborators);
    const [inputSearch, setInputSearch] = useState("");
    const [filter, setFilter] = useState("");
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState(null);
    const filters = ["", "Nom", "Localisation"];

    useMemo(() => {
        async function getCollab() {
            const [data, error] = await getWithAxios("/collaborateurs");
            if (error) return setErrorMessage(error);
            setCollaborators(data);
            setFilteredCollaborators(data);
        }
        getCollab();
    }, []);

    //* Get all categories.
    useMemo(() => {
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

    //* Search by category
    useEffect(() => {
        if (!category) return;
        const data = collaborators.reduce((acc, curr) => {
            if (curr.service !== category) return acc;
            acc.push(curr);
            return acc;
        }, []);
        setFilteredCollaborators(data);
    }, [category]);

    //* Resets the list of collaborators
    useEffect(() => {
        if (!inputSearch && !category && !filter) setFilteredCollaborators(collaborators);
    }, [inputSearch, category, filter]);

    return (
        <Stack>
            <Typography textAlign={"center"} fontSize={24}>
                Liste des collaborateurs
            </Typography>

            <Divider color="aliceBlue" />
            {errorMessage && <Typography>{errorMessage}</Typography>}
            {filteredCollaborators && (
                <Stack spacing={6} mt={2}>
                    <Stack spacing={3}>
                        <TextField
                            id="search"
                            label="search"
                            variant="outlined"
                            sx={{
                                borderRadius: "5px",
                                background:
                                    "linear-gradient(180deg, rgba(255,255,255,0.24833683473389356) 0%, rgba(255,255,255,1) 50%)",
                            }}
                            onChange={(e) => setInputSearch(e.target.value)}
                        />

                        <GenericFormControl
                            label={"Rechercher par :"}
                            data={filters}
                            value={filter}
                            setFunc={setFilter}
                        />
                        <GenericFormControl
                            label={"Catégorie"}
                            data={categories}
                            value={category}
                            setFunc={setCategory}
                        />
                    </Stack>
                    <Box>
                        <Stack spacing={6} marginX="auto" width={"fit-content"}>
                            {filteredCollaborators.map((collaborator) => {
                                return <ProfileCard user={collaborator} key={collaborator.id} />;
                            })}
                        </Stack>
                    </Box>
                </Stack>
            )}
        </Stack>
    );
};

export default Collaborators;
