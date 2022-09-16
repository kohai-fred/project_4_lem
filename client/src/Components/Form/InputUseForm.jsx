import { Stack, TextField, Typography } from "@mui/material";
import React from "react";

const InputUseForm = ({ label, type = "text", defaultValue, register, errors, name, onHandler }) => {
    return (
        <Stack direction={"column"}>
            <TextField
                id={label}
                label={label}
                type={type}
                variant="filled"
                sx={{
                    flex: { sm: 1 },
                    borderRadius: "5px",
                    background:
                        "linear-gradient(180deg, rgba(255,255,255,0.24833683473389356) 0%, rgba(255,255,255,1) 50%)",
                }}
                defaultValue={defaultValue}
                onKeyUp={onHandler}
                {...register}
            />
            <Typography variant="caption" color={"darkred"}>
                {errors[name]?.message}
            </Typography>
        </Stack>
    );
};

export default InputUseForm;
