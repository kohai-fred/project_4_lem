import { Typography } from "@mui/material";
import { cssMUI } from "../../services/utils/generiqueCssMUI";

const ErrorMessage = ({ message }) => {
    return (
        <Typography variant="h5" sx={[cssMUI.errorTitle]}>
            {message}
        </Typography>
    );
};

export default ErrorMessage;
