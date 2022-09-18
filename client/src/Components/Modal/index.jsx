import Dialog from "@mui/material/Dialog";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../features/modal";
import ModalDeleteUser from "./ModalDeleteUser";

export default function Modal() {
    const modal = useSelector((state) => state.modal.value);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(setModal({ isOpen: false }));
    };

    return (
        <>
            {modal && (
                <Dialog
                    open={modal.isOpen}
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                    sx={{
                        top: modal.top,
                        height: "100vh",
                        backgroundColor: "#060D15CC",
                        ".MuiPaper-root": {
                            backgroundColor: "rgb(18, 18, 18)",
                            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))",
                            color: "#fff",
                        },
                    }}
                >
                    {modal.deleteUserId && <ModalDeleteUser />}
                </Dialog>
            )}
        </>
    );
}
