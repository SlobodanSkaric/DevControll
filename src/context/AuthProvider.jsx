import { createContext, useEffect, useRef, useState } from "react";

const AuthContext = createContext({});


export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState("");
   
    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        setAuth(storedUsername);
    },[])

    return (
        <AuthContext.Provider value={{ auth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;