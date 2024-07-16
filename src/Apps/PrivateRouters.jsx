import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRouters = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>   
    }
    if(user){
        return children;
    }

    return <Navigate to={'/login'}></Navigate>
};

PrivateRouters.propTypes={
    children: PropTypes.object
}
export default PrivateRouters;