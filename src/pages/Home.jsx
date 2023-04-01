import { useState } from "react";
import { TodoList } from "../components/TodoList";
import { Formulario } from "../components/Formulario";
import { ToDoProvider } from "../contexts/ToDoProvider";

export const Home = () => {
  const [toDos, setToDos] = useState([
    { id: 1, text: "Estudar React", done: false },
    { id: 2, text: "Praticar com um projeto", done: true },
    { id: 3, text: "Divulgar meu resultado no LinkedIn", done: false },
  ]);

  const addToDo = (text) => {
    const newToDo = {
      id: Date.now(),
      text,
      done: false,
    };
    setToDos([...toDos, newToDo]);
  };

  const markTodo = (id) => {
    const newToDos = toDos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setToDos(newToDos);
  };

  const completedToDos = toDos.filter((todo) => todo.done);
  const pendingToDos = toDos.filter((todo) => !todo.done);

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
