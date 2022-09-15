import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectUseForm = ({ label, register, data }) => {
    return (
        <FormControl
            variant="filled"
            sx={{
                width: { xs: "100%", sm: "auto" },
                m: 1,
                minWidth: 120,
                borderRadius: "5px",
                background:
                    "linear-gradient(180deg, rgba(255,255,255,0.24833683473389356) 0%, rgba(255,255,255,1) 50%)",
            }}
        >
            <InputLabel id={label + "-label"} sx={{ color: "primary" }}>
                {label}
            </InputLabel>
            <Select
                labelId={label + "-label"}
                id={label + "-label"}
                label={label}
                defaultValue={data[0]}
                sx={{
                    color: "#212121",
                }}
                {...register}
            >
                {data?.map((name) => (
                    <MenuItem key={name} value={name}>
                        <Box sx={{ minHeight: "20px" }} id="TOTO">
                            {name}
                        </Box>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default SelectUseForm;
