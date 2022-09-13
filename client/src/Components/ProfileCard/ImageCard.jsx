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
                    backgroundColor: `${colorsTags[user.service]}`,
                    boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.6)",
                }}
            >
                <Typography variant="body-2" textAlign={"center"} color="#fff">
                    {user.service}
                </Typography>
            </Box>
        </Box>
    );
};

export default ImageCard;
