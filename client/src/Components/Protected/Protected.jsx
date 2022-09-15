import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../features/user";
import axiosInstance from "../../services/fetch/axiosInstance";
import { getLocalStorage } from "../../services/utils/getLocalStorage";

const Protected = ({ children }) => {
    const localSto = getLocalStorage();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        if (!localSto) return navigate("/");

        if (user) return setIsConnected(true);
        const getUser = async () => {
            const [data, error] = await axiosInstance(`/collaborateurs/${localSto.id}`);
            if (error) return navigate("/");
            dispatch(setUser({ ...data, isAdmin: localSto.isAdmin }));
            setIsConnected(true);
        };
        getUser();
    }, []);

    if (!isConnected) return;
    return <>{children}</>;
};

export default Protected;
