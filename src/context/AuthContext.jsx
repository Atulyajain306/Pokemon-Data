import { useContext,createContext } from "react";
import { useState } from "react";
export const AuthContext=createContext();

export const useAuthContext=()=>{
     return useContext(AuthContext);
}

export const AuthContextProvider=({children})=>{
    const [PokemonAll, setPokemonAll] = useState([]);
    return (
        <AuthContext.Provider value={{PokemonAll, setPokemonAll}}>
             {children}
        </AuthContext.Provider>
    )
}