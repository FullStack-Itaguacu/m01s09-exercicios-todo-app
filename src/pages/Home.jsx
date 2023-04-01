import { useState } from "react";
import { TodoList } from "../components/TodoList";
import { Formulario } from "../components/Formulario";
import { ToDoProvider } from "../contexts/ToDoProvider";

export const Home = () => {
  return (
    <ToDoProvider>
      <div className="row">
        <Formulario onSubmit={addToDo} />
      </div>
      <div className="row">
        <TodoList name="A fazer" list={pendingToDos} onClick={markTodo} />
        <TodoList name="Finalizados" list={completedToDos} onClick={markTodo} />
      </div>
    </ToDoProvider>
  );
};
