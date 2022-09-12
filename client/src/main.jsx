import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/NavBar";
import Login from "./views/Login";
import { store } from "./features/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <Navbar />
        <Login />
    </Provider>
);
