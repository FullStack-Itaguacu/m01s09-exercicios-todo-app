import { TodoList } from "../components/TodoList";

export const Home = () => {
  return (
    <div className="row">
      <TodoList
        name="A fazer"
        list={[
          { id: 1, text: "Estudar React", done: false },
          { id: 2, text: "Estudar React", done: true },
          { id: 3, text: "Estudar React", done: false },
        ]}
      />
      <TodoList
        name="Finalizados"
        list={[{ id: 2, text: "Estudar React", done: true }]}
      />
    </div>
  );
};
