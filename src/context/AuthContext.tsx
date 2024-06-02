import { jwtDecode } from "jwt-decode";
import { PropsWithChildren, useState } from "react";
import { createContext } from "react";


export let AuthContext = createContext(null);

export default function AuthContextProvider(props:PropsWithChildren){

let [userData, setUserData ]= useState(null);
let saveUserData = () => {
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode (encodedToken);
    setUserData(decodedToken);
    
}
    return<AuthContext.Provider value={{ saveUserData , userData }}>
        {props.children}
    </AuthContext.Provider>
}

