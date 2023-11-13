import { Navigate } from "react-router-dom";
import { useAuth } from "./auth.js";
import React from "react";

export const RequireAuth=({children})=>{
    const auth=useAuth();

if(!auth.username){
    return <Navigate to='/login' />
}

return children

}