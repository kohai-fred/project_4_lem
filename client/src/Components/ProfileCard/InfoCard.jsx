import { Stack, Typography, Box, Button } from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Link } from "react-router-dom";

const InfoCard = ({ user, connectedIsAdmin }) => {
    // *Calculate user age
    function age(birthday) {
        birthday = new Date(birthday);
        return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
    }

    return (
        <Stack direction={"column"}>
            <BlockInfo txt={user.email}>
                <AlternateEmailIcon />
            </BlockInfo>
            <BlockInfo txt={user.phone}>
                <PhoneInTalkIcon />
            </BlockInfo>
            <BlockInfo txt={`${user.birthdate} (${age(new Date(user.birthdate))} ans)`}>
                <CakeIcon />
            </BlockInfo>
            {connectedIsAdmin && (
                <Stack direction={"row"} justifyContent="center" spacing={2} mt={3} mb={2}>
                    <Link to={`/formulaire/${user.id}`}>
                        <Button variant="contained">Éditer</Button>
                    </Link>
                    <Button variant="contained" color="error">
                        Supprimer
                    </Button>
                </Stack>
            )}
        </Stack>
    );
};

const BlockInfo = ({ txt, children }) => {
    return (
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Box color="#212121">{children}</Box>
            <Typography
                sx={{
                    color: "#666666",
                    display: "-webkit-box",
                    WebkitLineClamp: "1",
                    WebkitTextOrientation: "vertical",
                    overflow: "hidden",
                }}
            >
                {txt}
            </Typography>
        </Stack>
    );
};

export default InfoCard;
