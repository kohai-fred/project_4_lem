import { Typography, Stack } from "@mui/material";
import { Box } from "@mui/system";
import ImageCard from "./ImageCard";
import InfoCard from "./InfoCard";
import { useSelector } from "react-redux";

const ProfileCard = ({ user }) => {
    const connectedUser = useSelector((state) => state.user.value);
    const fullName = `${user.firstname} ${user.lastname}`;
    const address = `${user.city}, ${user.country}`;

    return (
        <Stack
            sx={{
                position: "relative",
                borderRadius: "1rem",
                boxShadow: "inset 9px 9px 18px #7d7d7d,inset -9px -9px 18px #ffffff",
                maxWidth: "65vw",
                minWidth: "200px",
                backgroundColor: "#fff",
                minHeight: "400px",
            }}
            padding={2}
            spacing={2}
            justifyContent="center"
        >
            <Box
                sx={{
                    width: "11rem",
                    margin: "-45px auto 10px",
                }}
            >
                <ImageCard user={user} fullName={fullName} />
            </Box>
            <Stack height={"75px"} justifyContent="center" alignItems="center">
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
            </Stack>
            <Typography textAlign={"center"} color="#666666">
                {address}
            </Typography>
            <InfoCard user={user} connectedIsAdmin={connectedUser.isAdmin} />
        </Stack>
    );
};

export default ProfileCard;
