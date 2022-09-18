import { useMemo, useState } from "react";
import ProfileCard from "../../Components/ProfileCard";
import { Button, Stack, Typography } from "@mui/material";
import PanToolIcon from "@mui/icons-material/PanTool";
import axiosInstance from "../../services/fetch/axiosInstance";
import JSConfetti from "js-confetti";

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
        <div>
            {errorMessage && (
                <Typography variant="h5" textAlign={"center"}>
                    {errorMessage}
                </Typography>
            )}
            {user && (
                <Stack
                    spacing={6}
                    sx={{
                        position: "absolute",
                        top: "25%",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                >
                    <ProfileCard user={user} />
                    <Button variant="contained" startIcon={<PanToolIcon color="yellow" />} onClick={randomUser}>
                        Dire bonjour à quelqu'un d'autre
                    </Button>
                </Stack>
            )}
        </div>
    );
};

export default Homepage;
