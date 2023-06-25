import { useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn, selectIsUpdating} from "../redux/auth/selectors";

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isUpdating = useSelector(selectIsUpdating);
    const user = useSelector(selectUser);

    return {
        isLoggedIn,
        isUpdating,
        user,
    };
};