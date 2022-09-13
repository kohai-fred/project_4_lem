import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const GenericFormControl = ({ label, data, value, setFunc }) => {
    return (
        <FormControl
            fullWidth
            variant="filled"
            sx={{
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
                value={value}
                label={label}
                onChange={(e) => setFunc(e.target.value)}
                sx={{
                    color: "#212121",
                }}
            >
                {data.map((name) => (
                    <MenuItem key={name} value={name}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default GenericFormControl;
