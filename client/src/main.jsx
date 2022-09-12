import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./features/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Login from "./views/Login";
import Homepage from "./views/Homepage";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="homepage" element={<Homepage />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);
