import { createContext } from "react";

export const contextOperaciones= createContext({
    contador:0,
    sumarContador:()=>{},
    restarContador: ()=>{}
})