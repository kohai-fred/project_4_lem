import { useState, useEffect } from "react";
// import login from "../../services/fetch/login/login";
import login from "../../services/fetch";

import { useDispatch } from "react-redux";
import { setUser } from "../../features/user";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormBase from "../../Components/Form/FormBase";
import InputUseForm from "../../Components/Form/InputUseForm";
import { getLocalStorage } from "../../services/utils/getLocalStorage";
import { setLocalStorage } from "../../services/utils/setLocalStorage";
import { cssMUI } from "../../services/utils/generiqueCssMUI";
import image from "../../assets/odoo.png";
import ErrorMessage from "../../Components/error";

const Login = () => {
    const localSto = getLocalStorage();
    const [messageError, setMessageError] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (localSto) return navigate("/homepage");
    }, []);

    const onSubmit = async (input) => {
        // const [data, error] = await login(input.email, input.password);
        const [data, error] = await login({ email: input.email.trim(), password: input.password.trim() });
        if (error) return setMessageError(error);
        setLocalStorage(data.token, data.user.id, data.user.isAdmin);
        dispatch(setUser({ ...data.user, token: data.token }));
        navigate("/homepage");
    };

    return (
        <Stack>
            <Stack alignItems={"center"} direction={{ sm: "row" }} gap={{ xs: "15px" }} mx="auto">
                <Typography variant="h1" sx={[cssMUI.pageTitle]}>
                    Bienvenue sur
                </Typography>
                <Box>
                    <img src={image} style={{ height: "clamp(36px, 5vw, 6em)" }} />
                </Box>
            </Stack>
            {messageError && <ErrorMessage message={messageError} />}

            <Box mt={"clamp(36px, 8vw, 6em)"}>
                <Typography textAlign={"center"} mb={3}>
                    Veuillez vous connecter
                </Typography>

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
