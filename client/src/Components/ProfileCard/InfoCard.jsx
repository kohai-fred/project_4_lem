import { Stack, Typography, Box } from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const InfoCard = ({ user }) => {
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
