import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./features/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Login from "./views/Login";
import Homepage from "./views/Homepage";
import Collaborateurs from "./views/Collaborateurs";
import "./main.css";
import { Box } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <Navbar />
            <Box p={4}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="homepage" element={<Homepage />} />
                    <Route path="collaborateurs" element={<Collaborateurs />} />
                </Routes>
            </Box>
        </BrowserRouter>
    </Provider>
);
