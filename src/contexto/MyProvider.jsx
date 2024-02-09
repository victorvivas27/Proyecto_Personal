import { useState } from "react";
import { MyContext } from "./MyContext"
export const MyProvider = ({children}) => {
  const [usuario, setUsuario] = useState(null);
  const [actualizar, setActualizar] = useState(false);
  return (
  <MyContext.Provider value={{
      usuario,setUsuario,actualizar,setActualizar
  }} >
    {children}
  </MyContext.Provider>
  )
}

