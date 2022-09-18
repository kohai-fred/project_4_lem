import { Box, Typography } from "@mui/material";
import React from "react";

const ImageCard = ({ user, fullName }) => {
    const colorsTags = {
        Client: "#126782",
        Marketing: "#FD9E02",
        Technique: "#B3300B",
    };
    return (
        <Box position={"relative"}>
            <img
                src={user.photo}
                alt={fullName}
                style={{
                    boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.4)",
                    borderRadius: "50%",
                    aspectRatio: "1/1",
                    width: "100%",
                }}
            />
            <Box
                position={"absolute"}
                sx={{
                    bottom: "-5px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "0.30em 0.55em",
                    borderRadius: "5px",
                    backgroundColor: `${colorsTags[user.service]}`,
                    boxShadow: `0px 0px 25px #000000aa, inset 5px 5px 4px #30303082, inset -5px -5px 4px #ffffff2e`,
                }}
            >
                <Typography fontSize={"0.8em"} textAlign={"center"} color="#fff">
                    {user.service}
                </Typography>
            </Box>
        </Box>
    );
};

export default ImageCard;
