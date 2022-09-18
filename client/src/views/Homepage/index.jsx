import { useMemo, useState } from "react";
import ProfileCard from "../../Components/ProfileCard";
import { Box, Button, Stack, Typography } from "@mui/material";
import PanToolIcon from "@mui/icons-material/PanTool";
import axiosInstance from "../../services/fetch/axiosInstance";
import JSConfetti from "js-confetti";
import ErrorMessage from "../../Components/error";
import { cssMUI } from "../../services/utils/generiqueCssMUI";

const Homepage = () => {
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const jsConfetti = new JSConfetti();

    const randomUser = async () => {
        const [data, error] = await axiosInstance("/collaborateurs/random");
        if (error) return setErrorMessage(error);
        setUser(data);
    };
    useMemo(() => {
        randomUser();
    }, []);

    useMemo(() => {
        if (!user) return;
        jsConfetti.addConfetti();
    }, [user]);

    return (
        <>
            {errorMessage && <ErrorMessage message={errorMessage} />}
            {user && (
                <Stack justifyContent={"center"} alignItems={"center"} gap={8}>
                    <Typography sx={[cssMUI.pageTitle]}>Bonjour</Typography>
                    <Stack spacing={6}>
                        <ProfileCard user={user} />
                        <Button variant="contained" startIcon={<PanToolIcon color="yellow" />} onClick={randomUser}>
                            Dire bonjour à quelqu'un d'autre
                        </Button>
                    </Stack>
                </Stack>
            )}
        </>
    );
};

export default Homepage;
