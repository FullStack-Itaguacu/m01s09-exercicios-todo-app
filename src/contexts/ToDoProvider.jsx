import { createContext } from "react";

export const todoContext = createContext();

export const ToDoProvider = (props) => {
  return (
    <todoContext.Provider value={"meu contexto"}>
      {props.children}
    </todoContext.Provider>
  );
};
