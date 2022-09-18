import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Typography,
} from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../features/modal";
import { deleteUser } from "../../services/fetch";
import { Stack } from "@mui/system";

const ModalDeleteUser = () => {
    const modal = useSelector((state) => state.modal.value);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setModal({ isOpen: false }));
    };

    const onDelete = () => {
        deleteUser(modal.deleteUserId);
        handleClose();
        location.reload();
    };
    return (
        <>
            <DialogTitle>{"Êtes vous sûre de vouloir supprimer l'utilisateur?"}</DialogTitle>
            <Divider />
            <DialogContent id="DialogContent">
                <Stack direction={"row"} alignItems="center" justifyContent={"center"}>
                    <WarningIcon color="warning" fontSize="large" />
                    <DialogContentText id={"alert-dialog-slide-description"} pl={2} color="#ffffffb3">
                        Attention cette action est IRREVERSIBLE ! <br /> L'utilisateur sera perdu à JAMAIS....
                    </DialogContentText>
                </Stack>
            </DialogContent>
            <DialogActions sx={{ justifyContent: { xs: "center", sm: "flex-end" } }}>
                <Button onClick={handleClose} sx={{ fontSize: "1.2em" }}>
                    Annuler
                </Button>
                <Button onClick={onDelete} color="error" sx={{ fontSize: "1.2em" }}>
                    Supprimer
                </Button>
            </DialogActions>
        </>
    );
};

export default ModalDeleteUser;
