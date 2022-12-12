import { ITodo } from "@/types";
import { memo } from "react";
import Item from "./Item";
interface IProps {
  todoList: ITodo[];
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}
function MyList(props: IProps) {
  const { todoList, removeTodo, toggleTodo } = props;
  const MemoItem = memo(Item);
  return (
    <div>
      {!!todoList?.length &&
        todoList.map((todo) => (
          <MemoItem
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
