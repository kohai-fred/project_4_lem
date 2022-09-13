import { useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, Box, Stack, Button } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import { NavLink } from "react-router-dom";
import PopupMenuProfile from "../PopupMenuProfile";
import { useEffect } from "react";
import getWithAxios from "../../services/fetch/getWithAxios";

const Navbar = () => {
    const user = useSelector((state) => state.user.value);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        if (!user) return;
        console.log("USER", user);
    }, [user]);
    return (
        <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            p={2}
            mb={4}
            sx={{
                background: "linear-gradient(113deg, rgba(159,216,242,1) 0%, rgba(26,143,171,1) 45%)",
            }}
        >
            <NavLink to={user ? "/homepage" : "/"}>
                <ForumIcon />
            </NavLink>
            {user && (
                <Box>
                    <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                    >
                        <Avatar alt={user.firstname} src={user.photo} />
                    </Button>
                    <PopupMenuProfile
                        open={open}
                        handleClose={handleClose}
                        anchorEl={anchorEl}
                        isAdmin={user.isAdmin}
                    />
                </Box>
            )}
        </Stack>
    );
};

export default Navbar;
