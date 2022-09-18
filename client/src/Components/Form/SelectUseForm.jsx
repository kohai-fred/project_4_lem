import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { cssMUI } from "../../services/utils/generiqueCssMUI";
/**
 *
 * @param {String} label
 * @param {Function} register function of "react-hook-form"
 * @param {[String]} data
 * @returns
 */
const SelectUseForm = ({ label, register, data, defaultValue }) => {
    return (
        <FormControl
            variant="filled"
            sx={
                ({
                    width: { xs: "100%", sm: "auto" },
                    m: 1,
                    minWidth: 120,
                },
                [cssMUI.input])
            }
        >
            <InputLabel id={label + "-label"} sx={{ color: "primary" }}>
                {label}
            </InputLabel>
            <Select
                labelId={label + "-label"}
                id={label + "-label"}
                label={label}
                defaultValue={defaultValue}
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
