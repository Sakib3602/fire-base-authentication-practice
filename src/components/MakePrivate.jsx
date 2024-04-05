import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";


const MakePrivate = ({children}) => {
    const {person} = useContext(AuthContext)
    if(person){
        return children
    }
    return <Navigate to={"/register"}></Navigate>
};

export default MakePrivate;