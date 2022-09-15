import { NavLink } from "react-router-dom";
import { Menu, MenuItem, Divider, ListItemIcon, Avatar, Link } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import PersonAdd from "@mui/icons-material/PersonAdd";
import ListIcon from "@mui/icons-material/List";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/user";
import { useNavigate } from "react-router-dom";

const PopupMenuProfile = ({ open, handleClose, anchorEl, isAdmin, id }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("projet_intranet");
        dispatch(setUser());
        navigate("/");
    };
    return (
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
            <NavLink to={"collaborateurs"}>
                <MenuItem>
                    <ListItemIcon>
                        <ListIcon fontSize="small" />
                    </ListItemIcon>
                    Liste
                </MenuItem>
            </NavLink>
            <NavLink to={`formulaire/${id}`}>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Modifier ses infos
                </MenuItem>
            </NavLink>

            {isAdmin && (
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Créer un utilisateur
                </MenuItem>
            )}
            <Divider />
            <MenuItem onClick={logout}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Déconnexion
            </MenuItem>
        </Menu>
    );
};

export default PopupMenuProfile;
