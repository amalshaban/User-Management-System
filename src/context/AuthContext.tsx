import { jwtDecode } from "jwt-decode";
import { PropsWithChildren } from "react";
import { createContext } from "react";


export let AuthContext = createContext(null);

export default function AuthContextProvider(props:PropsWithChildren){


let saveUserData = () => {
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode (encodedToken);
console.log(decodedToken);
    
}
    return<AuthContext.Provider value={{ saveUserData }}>
        {props.children}
    </AuthContext.Provider>
}

