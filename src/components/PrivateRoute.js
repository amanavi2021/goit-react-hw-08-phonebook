import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export const PrivateRoute = ({
    redirectTo= '/',
    component:Component
}) => {
    const {isLoggedIn, isUpdating} = useAuth();
    const shouldRedirect= !isLoggedIn && !isUpdating;
    return  shouldRedirect ? <Navigate to={redirectTo}/> : Component
    ;
    
}