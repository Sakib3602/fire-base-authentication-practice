import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate,useLocation } from "react-router-dom";


const MakePrivate = ({children}) => {
    const location = useLocation()
    // console.log(location,"location")
    const {person} = useContext(AuthContext)
    if(person){
        return children;
    }
    return <Navigate to={"/login"} state={location.pathname}></Navigate>
};

export default MakePrivate;