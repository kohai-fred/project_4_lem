import { useMemo, useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import JSConfetti from "js-confetti";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../features/user";
import { getUser, editUser, addUser } from "../../services/fetch";
import { Box, Typography, Divider } from "@mui/material";
import FormBase from "../../Components/Form/FormBase";
import InputUseForm from "../../Components/Form/InputUseForm";
import SelectUseForm from "../../Components/Form/SelectUseForm";
import { handleChangePhone } from "../../services/utils/form/handleChangePhone";
import { cleanData } from "../../services/utils/form/cleanData";
import { cssMUI } from "../../services/utils/generiqueCssMUI";

const GENDERS = ["male", "female"];
const SERVICES = ["Client", "Marketing", "Technique"];
const IS_ADMIN = ["false", "true"];

const Form = () => {
    const { id } = useParams();
    const [user, setUserForm] = useState(null);
    const connectedUser = useSelector((state) => state.user.value);
    const [collaborator, setCollaborator] = useState(null);
    const [isEdit, setIsEdit] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const location = useLocation();
    const [count, setCount] = useState(0);
    const startLocation = structuredClone(location);
    const jsConfetti = new JSConfetti();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        clearErrors,
        getValues,
        setValue,
    } = useForm();

    const handlePhone = (e) => handleChangePhone(getValues, setValue, setError, e);

    useMemo(() => {
        /**
         * When we are administrator and we want to change form
         * Between Modify collaborator/himself or Add a new user,
         * MUI does not accept on-the-fly change selection input.
         * For this problem, we have to reload the page and it's OK.
         */
        if (count >= 1) window.location.reload();
        setCount(count + 1);
    }, [location]);

    useMemo(() => {
        /*
         * Automatic form filling
         */
        // If no ID in URL, it's a creating user form
        if (!id) {
            setUserForm({ ...Object.keys(connectedUser) });
            setIsEdit(false);
            return;
        }
        // If URL ID is same as connected user we don't nedd a request, just fill
        if (id === connectedUser.id) return setUserForm(structuredClone(connectedUser));

        // Else request user by ID...
        const gettingUser = async () => {
            const [resUser, errUser] = await getUser(id);
            if (errUser) return setErrorMessage(errUser);
            setUserForm(resUser);
        };
        gettingUser();
        return;
    }, []);

    useMemo(() => {
        if (!collaborator) return;
        setUserForm(collaborator);
        if (id === connectedUser.id) dispatch(setUser(collaborator));
        jsConfetti.addConfetti();
    }, [collaborator]);

    const onSubmit = async (data, e) => {
        e.preventDefault();

        const cleanedData = cleanData(data, setError);

        if (!cleanedData) return;

        if (isEdit) {
            const [resEdit, errEdit] = await editUser(cleanedData, id);
            resEdit ? setCollaborator(resEdit.collaborateur) : setErrorMessage("Une erreur est survenue");
        }
        const [resAdd, errAdd] = await addUser(cleanedData);
        resAdd ? setCollaborator(resAdd.collaborateur) : setErrorMessage("Une erreur est survenue");
    };

    return (
        <>
            <Typography variant="h1" sx={[cssMUI.pageTitle]}>
                {id
                    ? `Modifier les informations ${!user ? "" : `de ${user.firstname} ${user.lastname}`}`
                    : "Créer un utilisateur"}
            </Typography>
            <Box m={"25px 0px 75px"}>
                <Divider color="#fff" />
            </Box>
            {errorMessage && <Typography sx={[cssMUI.errorTitle]}>{errorMessage}</Typography>}
            {user && (
                <FormBase handleSubmit={handleSubmit(onSubmit)} txtButton={isEdit ? "Modifier" : "Ajouter"}>
                    <SelectUseForm
                        label={"Civilité"}
                        data={GENDERS}
                        register={register("gender")}
                        defaultValue={user.gender || "male"}
                    />
                    <SelectUseForm
                        label={"Catégorie"}
                        data={SERVICES}
                        register={register("service")}
                        defaultValue={user.service || "Client"}
                    />
                    <InputUseForm
                        label={"Prénom"}
                        defaultValue={user.firstname}
                        register={register("firstname", { required: "Le prénom est obligatoire" })}
                        errors={errors}
                        name={"firstname"}
                    />
                    <InputUseForm
                        label={"Nom"}
                        defaultValue={user.lastname}
                        register={register("lastname", { required: "Le nom est obligatoire" })}
                        errors={errors}
                        name={"lastname"}
                    />
                    <InputUseForm
                        label={"Email"}
                        defaultValue={user.email}
                        register={register("email", { required: "L'email est obligatoire" })}
                        errors={errors}
                        name={"email"}
                    />
                    <InputUseForm
                        label={"Mot de passe"}
                        register={register("password", {
                            required: isEdit ? false : "Le mot de passe est obligatoire",
                        })}
                        errors={errors}
                        name={"password"}
                        type="password"
                    />
                    <InputUseForm
                        label={"Confirmation"}
                        register={register("confirmPassword", {
                            required: isEdit ? false : "Confirmer Le mot de passe",
                        })}
                        errors={errors}
                        name={"confirmPassword"}
                        type="password"
                    />
                    <InputUseForm
                        label={"Téléphone"}
                        defaultValue={user.phone}
                        register={register("phone", {
                            required: "Le numéro de tel est obligatoire",
                        })}
                        errors={errors}
                        name={"phone"}
                        type="tel"
                        onHandler={handlePhone}
                    />
                    <InputUseForm
                        label={"Date de naissance"}
                        defaultValue={user.birthdate}
                        register={register("birthdate", { required: "La date de naissance est obligatoire" })}
                        errors={errors}
                        name={"birthdate"}
                        type="date"
                    />
                    <InputUseForm
                        label={"Ville"}
                        defaultValue={user.city}
                        register={register("city", { required: "Le nom de la ville est obligatoire" })}
                        errors={errors}
                        name={"city"}
                    />
                    <InputUseForm
                        label={"Pays"}
                        defaultValue={user.country}
                        register={register("country", { required: "Le nom du pays est obligatoire" })}
                        errors={errors}
                        name={"country"}
                    />
                    <InputUseForm
                        label={"URL de la photo"}
                        defaultValue={user.photo}
                        register={register("photo", { required: "L'URL de la photo est obligatoire" })}
                        errors={errors}
                        name={"photo"}
                    />
                    {connectedUser.isAdmin && (
                        <SelectUseForm
                            label={"Administrateur ?"}
                            data={IS_ADMIN}
                            register={register("isAdmin")}
                            defaultValue={user.isAdmin || "false"}
                        />
                    )}
                </FormBase>
            )}
        </>
    );
};

export default Form;
