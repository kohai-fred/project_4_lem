import React from "react";
import { Card, CardMedia, Typography, Stack } from "@mui/material";
import { Box } from "@mui/system";
import CakeIcon from "@mui/icons-material/Cake";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const ProfileCard = ({ user }) => {
    const fullName = `${user.firstname} ${user.lastname}`;
    const address = `${user.city}, ${user.country}`;
    const birthdate = new Date(user.birthdate);

    function age(birthday) {
        birthday = new Date(birthday);
        return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
    }
    return (
        <Stack
            sx={{
                position: "relative",
                borderRadius: "1rem",
                boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.6)",
                width: "300px",
                backgroundColor: "#fff",
                minHeight: "350px",
            }}
            padding={2}
            spacing={2}
        >
            <Box
                sx={{
                    width: "11rem",
                    margin: "-35px auto 0",
                }}
            >
                <Box position={"relative"}>
                    <img
                        src={user.photo}
                        alt={fullName}
                        style={{
                            boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.4)",
                            borderRadius: "1rem",
                            aspectRatio: "1/1",
                            width: "100%",
                        }}
                    />
                    <Box
                        position={"absolute"}
                        sx={{
                            top: "15px",
                            right: "-8px",
                            padding: "0.30em 0.55em",
                            borderRadius: "5px",
                            backgroundColor: "#600b28",
                            boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.6)",
                        }}
                    >
                        <Typography variant="body-2" textAlign={"center"} color="#fff">
                            {user.service}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Typography
                variant="h1"
                sx={{
                    textAlign: "center",
                    fontSize: "2em",
                    fontWeight: "500",
                    letterSpacing: "0.075em",
                    color: "#212121",
                }}
            >
                {fullName}
            </Typography>
            <Typography textAlign={"center"} color="#666666">
                {address}
            </Typography>
            <Stack direction={"column"}>
                <BlockInfo txt={user.email}>
                    <AlternateEmailIcon />
                </BlockInfo>
                <BlockInfo txt={user.phone}>
                    <PhoneInTalkIcon />
                </BlockInfo>
                <BlockInfo txt={`${user.birthdate} (${age(birthdate)} ans)`}>
                    <CakeIcon />
                </BlockInfo>
            </Stack>
        </Stack>
    );
};

const BlockInfo = ({ txt, children }) => {
    return (
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
            {children}
            <Typography color="#666666">{txt}</Typography>
        </Stack>
    );
};

export default ProfileCard;
