import { TextField } from "@mui/material";
import React from "react";

/**
 *
 * @param {String} value
 * @param {Function} setInput function of useState
 * @param {String} label
 * @param {String} type Optional Valid HTML input type
 * @param {Boolean} required Optional
 * @param {Boolean} error
 */
const GenericInputs = ({ value, setInput, label, type = "text", required = false, error }) => {
    return (
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
            value={value}
            onChange={(e) => setInput(e.target.value)}
            required={required}
            error={error ? true : false}
        />
    );
};

export default GenericInputs;
