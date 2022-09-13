import { useMemo, useState } from "react";
import ProfileCard from "../../Components/ProfileCard";
import getRandomUser from "../../services/fetch/randomUser";
import { Button, Stack, Typography } from "@mui/material";
import PanToolIcon from "@mui/icons-material/PanTool";

const Homepage = () => {
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const randomUser = async () => {
        const [data, error] = await getRandomUser();
        if (error) return setErrorMessage(error);
        setUser(data);
    };
    useMemo(() => {
        randomUser();
    }, []);

    return (
        <div>
            {errorMessage && (
                <Typography variant="h5" textAlign={"center"}>
                    {errorMessage}
                </Typography>
            )}
            {user && (
                <Stack m="auto" id="TOTO">
                    <ProfileCard user={user} />
                    <Button variant="contained" startIcon={<PanToolIcon />} onClick={randomUser}>
                        Dire bonjour à quelqu'un d'autre
                    </Button>
                </Stack>
            )}
        </div>
    );
};

export default Homepage;
