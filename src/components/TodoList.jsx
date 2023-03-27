import { TodoItem } from "./TodoItem";

export const TodoList = ({ name, list }) => {
  return (
    <section className="col p-2 m-2 border rounded-1">
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        {list.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </section>
  );
};
