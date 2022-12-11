import { ITodo } from "@/types";
import React from "react";
import Item from "./Item";
interface IProps {
  todoList: ITodo[];
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}
function MyList(props: IProps) {
  const { todoList, removeTodo, toggleTodo } = props;
  return (
    <div>
      {todoList &&
        todoList.map((todo) => (
          <Item
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            key={todo.id}
          />
        ))}
    </div>
  );
}

export default MyList;
