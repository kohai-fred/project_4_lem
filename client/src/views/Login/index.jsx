import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import login from "../../services/fetch/login/login";

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
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
