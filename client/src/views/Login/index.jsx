import { useState } from "react";
import login from "../../services/fetch/login/login";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/user";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const [data, error] = await login(email, password);

        dispatch(setUser(data));
    };

    return (
        <Stack>
            <Typography variant="h1" textAlign={"center"}>
                Connexion
            </Typography>
            <Box component={"form"} onSubmit={handleSubmit}>
                <Stack>
                    <TextField
                        id="email"
                        label="Email"
                        placeholder="Votre email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        id="password"
                        label="Mot de passe"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit">Se connecter</Button>
                </Stack>
            </Box>
        </Stack>
    );
};

export default Login;
