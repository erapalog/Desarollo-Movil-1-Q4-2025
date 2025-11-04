import { createContext } from "react";
import { Usuario } from "../Modelos/Usuario";

export const contextUsuario=createContext({
    listaUsuario: [] as Usuario[],
    agregarUsuario: (usuario:Usuario)=>{}
})