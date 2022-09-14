import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./features/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Login from "./views/Login";
import Homepage from "./views/Homepage";
import Collaborators from "./views/Collaborators";
import "./main.css";
import { Box, Container } from "@mui/material";
import Form from "./views/Form";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <Navbar />
            <Box p={4}>
                <Container maxWidth="xl">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="homepage" element={<Homepage />} />
                        <Route path="collaborateurs" element={<Collaborators />} />
                        <Route path="formulaire" element={<Form />} />
                    </Routes>
                </Container>
            </Box>
        </BrowserRouter>
    </Provider>
);
