import { Box, Typography, Divider } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import FormBase from "../../Components/Form/FormBase";
import InputUseForm from "../../Components/Form/InputUseForm";
import SelectUseForm from "../../Components/Form/SelectUseForm";

const userTemplate = {
    gender: "male",
    firstname: "Clive",
    lastname: "Lopez",
    email: "owen.lopez@example.com",
    phone: "02-37-79-78-39",
    birthdate: "1992-12-26",
    city: "Villeurbanne",
    country: "France",
    photo: "https://randomuser.me/api/portraits/men/40.jpg",
    service: "Marketing",
    isAdmin: false,
};
const genders = ["male", "female"];
const services = ["Client", "Marketing", "Technique"];

const Form = () => {
    const user = useSelector((state) => state.user.value) || userTemplate;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log("🚀 ~ file: index.jsx ~ line 56 ~ onSubmit ~ data", data);
    };
    return (
        <>
            <Typography variant="h1" textAlign={"center"} fontSize={"clamp(24px, 8vw ,6rem)"} color="aliceblue">
                Modifier mon profil
            </Typography>
            <Box m={"25px 0px 75px"}>
                <Divider color="#fff" />
            </Box>
            <FormBase handleSubmit={handleSubmit(onSubmit)} txtButton={"Modifier"}>
                {/* <GenericFormControlSelect label={"Civilité"} data={genders} value={gender} setFunc={setGender} />
                <GenericFormControlSelect label={"Catégorie"} data={services} value={service} setFunc={setService} /> */}
                <SelectUseForm label={"Civilité"} data={genders} register={register("services")} />
                <SelectUseForm label={"Catégorie"} data={services} register={register("services")} />
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
                    label={"Mot de passe"}
                    register={register("password")}
                    errors={errors}
                    name={"password"}
                    type="password"
                />
                <InputUseForm
                    label={"Confirmation"}
                    register={register("confirmPassword")}
                    errors={errors}
                    name={"confirmPassword"}
                    type="password"
                />
                <InputUseForm
                    label={"Téléphone"}
                    defaultValue={user.phone}
                    register={register("phone", { required: "Le numéro de tel est obligatoire" })}
                    errors={errors}
                    name={"phone"}
                    type="tel"
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
            </FormBase>
        </>
    );
};

export default Form;
