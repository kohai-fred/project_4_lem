import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ProfileCard from "../../Components/ProfileCard";

const CollaboratorsList = ({ filteredCollaborators, errorMessage }) => {
    return (
        <Box>
            <Stack spacing={6} marginX="auto" display={{ sm: "none" }}>
                {filteredCollaborators &&
                    filteredCollaborators.map((collaborator) => {
                        return <ProfileCard user={collaborator} key={collaborator.id} />;
                    })}
                {errorMessage && <Typography color={"darkred"}>{errorMessage}</Typography>}
            </Stack>
            <Grid container spacing={8} display={{ xs: "none", sm: "flex" }}>
                {filteredCollaborators &&
                    filteredCollaborators.map((collaborator) => {
                        return (
                            <Grid item sm={6} lg={4} xl={3} key={collaborator.id}>
                                <ProfileCard user={collaborator} />
                            </Grid>
                        );
                    })}
                {errorMessage && <Typography color={"darkred"}>{errorMessage}</Typography>}
            </Grid>
        </Box>
    );
};

export default CollaboratorsList;
