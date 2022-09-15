import { Box, Button, Stack } from "@mui/material";

/**
 *
 * @param {Function} handleSubmit
 * @param {String} txtButton
 */
const FormBase = ({ handleSubmit, txtButton, children }) => {
    return (
        <Stack direction={"column"} component={"form"} onSubmit={handleSubmit} spacing={3} sx={stylesForm}>
            {/* First child of Stack has padding... */}
            <Box></Box>
            {children}
            <Stack justifyContent={"center"} alignItems={"center"}>
                <Button type="submit" variant="contained" sx={{ width: "70%", marginTop: "60px" }} size="large">
                    {txtButton}
                </Button>
            </Stack>
        </Stack>
    );
};

const stylesForm = {
    padding: { xs: 2, sm: 5 },
    width: "clamp(275px, 65vw, 600px)",
    border: "1px solid #198eaa36",
    borderRadius: "8px",
    backgroundColor: "#001621d6",
    boxShadow:
        "5px 5px 8px #000, 25px 25px 25px #000f17fc, -5px -5px 20px #000f17fc, 8px 8px 15px #000f17fc, -8px 8px 15px #000f17fc",
    mx: "auto",
};

export default FormBase;
