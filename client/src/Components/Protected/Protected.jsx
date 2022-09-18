import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { setUser } from "../../features/user";
import { getUser } from "../../services/fetch";
import { getLocalStorage } from "../../services/utils/getLocalStorage";

const Protected = ({ children }) => {
    const localSto = getLocalStorage();
    const { id } = useParams();
    const user = useSelector((state) => state.user.value);
    const [isConnected, setIsConnected] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const gettingUser = async () => {
        const [data, error] = await getUser(localSto.id);
        if (error) return navigate("/");
        dispatch(setUser({ ...data, isAdmin: localSto.isAdmin }));
        setIsConnected(true);
    };

    useEffect(() => {
        if (!localSto) return navigate("/");
        if (user) return setIsConnected(true);

        gettingUser();
    }, [user]);

    if (!isConnected) return;

    if (user && !user.isAdmin && location.pathname.includes("formulaire") && user.id !== id)
        return navigate("/homepage");

    return <>{children}</>;
};

export default Protected;
