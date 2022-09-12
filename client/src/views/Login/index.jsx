import { useState } from "react";
import login from "../../services/fetch/login/login";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/user";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [messageError, setMessageError] = useState();
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) return setMessageError("Tous les champs sont obligatoire.");
        const [data, error] = await login(email, password);
        if (error) return setMessageError(error);
        dispatch(setUser(data));
        navigate("/homepage");
    };

    return (
        <Stack>
            <Typography variant="h1" textAlign={"center"}>
                Connexion
            </Typography>
            {messageError && (
                <Typography variant="h5" textAlign={"center"} color="#ba000d">
                    {messageError}
                </Typography>
            )}
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
