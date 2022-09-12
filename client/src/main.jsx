import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/NavBar";
import Login from "./views/Login";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Navbar />
        <Login />
    </React.StrictMode>
);
