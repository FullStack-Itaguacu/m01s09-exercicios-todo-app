import { useContext } from "react";
import { todoContext } from "./ToDoProvider";

export const useToDos = () => {
  const context = useContext(todoContext);

  if (context) {
    return context;
  } else {
    throw new Error("useTodos não está dentro do ToDoProvider");
  }
};
