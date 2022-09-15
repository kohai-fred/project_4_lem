import { useState } from "react";
import login from "../../services/fetch/login/login";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/user";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormBase from "../../Components/Form/FormBase";
import InputUseForm from "../../Components/Form/InputUseForm";

const Login = () => {
    const [messageError, setMessageError] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (input) => {
        const [data, error] = await login(input.email, input.password);
        if (error) return setMessageError(error);
        dispatch(setUser(data));
        navigate("/homepage");
    };

    return (
        <Stack>
            <Typography variant="h1" textAlign={"center"} fontSize={"clamp(24px, 8vw ,6rem)"}>
                Connexion
            </Typography>
            {messageError && (
                <Typography variant="h5" textAlign={"center"} color="#ba000d">
                    {messageError}
                </Typography>
            )}

            <Box mt={"6vh"}>
                <FormBase handleSubmit={handleSubmit(onSubmit)} txtButton={"Se connecter"}>
                    <InputUseForm
                        label={"Email"}
                        register={register("email", { required: "L'email est obligatoire" })}
                        errors={errors}
                        name={"email"}
                    />
                    <InputUseForm
                        label={"Mot de passe"}
                        register={register("password", { required: "Le mot de passe est obligatoire" })}
                        errors={errors}
                        name={"password"}
                        type="password"
                    />
                </FormBase>
            </Box>
        </Stack>
    );
};

export default Login;
