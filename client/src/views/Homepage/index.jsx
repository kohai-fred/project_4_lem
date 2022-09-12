import { Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import getRandomUser from "../../services/fetch/randomUser";

const Homepage = () => {
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    useMemo(async () => {
        const [data, error] = await getRandomUser();
        if (error) return setErrorMessage(error);
        setUser(data);
    }, []);
    return (
        <div>
            {errorMessage ? (
                <Typography variant="h5" textAlign={"center"}>
                    {errorMessage}
                </Typography>
            ) : (
                <div>Hello {user?.firstname}</div>
            )}
        </div>
    );
};

export default Homepage;
