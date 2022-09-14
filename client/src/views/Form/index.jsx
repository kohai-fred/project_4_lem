import { FormGroup, Stack, Button, Box, Typography, Divider } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import GenericFormControlSelect from "../../Components/Form/GenericFormControlSelect";
import FormBase from "../../Components/Form/FormBase";
import GenericInputs from "../../Components/Form/GenericInputs";

const userTemplate = {
    gender: "male",
    firstname: "Owen",
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
    const [gender, setGender] = useState(genders[0]);
    const [service, setService] = useState(services[0]);
    const [firstname, setFirstname] = useState(user.firstname);
    const [lastname, setLastname] = useState(user.lastname);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState(user.phone);
    const [birthdate, setBirthdate] = useState(user.birthdate);
    const [city, setCity] = useState(user.city);
    const [country, setCountry] = useState(user.country);
    const [photo, setPhoto] = useState(user.photo);

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <Typography variant="h1" textAlign={"center"} fontSize={"clamp(24px, 8vw ,6rem)"} color="aliceblue">
                Modifier mon profil
            </Typography>
            <Box m={"25px 0px 75px"}>
                <Divider color="#fff" />
            </Box>
            <FormBase handleSubmit={handleSubmit} txtButton={"Modifier"}>
                <GenericFormControlSelect label={"Civilité"} data={genders} value={gender} setFunc={setGender} />
                <GenericFormControlSelect label={"Catégorie"} data={services} value={service} setFunc={setService} />
                <GenericInputs label={"Nom"} value={firstname} setInput={setFirstname} required={true} error={false} />
                <GenericInputs label={"Prénom"} value={lastname} setInput={setLastname} required={true} error={error} />
                <GenericInputs
                    label={"Email"}
                    value={email}
                    setInput={setEmail}
                    required={true}
                    error={error}
                    type={"email"}
                />
                <GenericInputs
                    label={"Mot de passe"}
                    value={password}
                    setInput={setPassword}
                    error={error}
                    type={"password"}
                />
                <GenericInputs
                    label={"Confirmation"}
                    value={confirmPassword}
                    setInput={setConfirmPassword}
                    error={error}
                    type={"password"}
                />
                <GenericInputs
                    label={"Téléphone"}
                    value={phone}
                    setInput={setPhone}
                    required={true}
                    error={error}
                    type={"tel"}
                />
                <GenericInputs
                    label={"Date de naissance"}
                    value={birthdate}
                    setInput={setBirthdate}
                    required={true}
                    error={error}
                    type={"date"}
                />
                <GenericInputs label={"Ville"} value={city} setInput={setCity} required={true} error={error} />
                <GenericInputs label={"Pays"} value={country} setInput={setCountry} required={true} error={error} />
                <GenericInputs
                    label={"URL de la photo"}
                    value={photo}
                    setInput={setPhoto}
                    required={true}
                    error={error}
                />
            </FormBase>
        </>
    );
};

export default Form;
