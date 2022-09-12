import { useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, Box, Stack, Menu, MenuItem, Button } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";

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

    return (
        <Stack direction="row" justifyContent={"space-between"} alignItems={"center"} p={2}>
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
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "basic-button",
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Box>
            )}
        </Stack>
    );
};

export default Navbar;
