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
import Protected from "./Components/Protected/Protected";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <Navbar />
            <Box p={4}>
                <Container maxWidth="xl">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route
                            path="homepage"
                            element={
                                <Protected>
                                    <Homepage />
                                </Protected>
                            }
                        />
                        <Route
                            path="collaborateurs"
                            element={
                                <Protected>
                                    <Collaborators />
                                </Protected>
                            }
                        />
                        <Route
                            path="formulaire"
                            element={
                                <Protected>
                                    <Form />
                                </Protected>
                            }
                        />
                    </Routes>
                </Container>
            </Box>
        </BrowserRouter>
    </Provider>
);
