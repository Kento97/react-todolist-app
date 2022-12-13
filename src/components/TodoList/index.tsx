import { useCallback, useMemo, useReducer, useEffect } from "react";
import MyInput from "@/components/TodoList/MyInput";
import MyList from "@/components/TodoList/MyList";
import { ACTION_TYPE, IState, ITodo } from "@/types";
import { todoReducer } from "./reducer";
import { useImmerReducer } from "use-immer";

function TodoList() {
  function init(): IState {
    const localTodoList: ITodo[] | null = JSON.parse(
      localStorage.getItem("todoList") as string
    );
    return {
      todoList: localTodoList ?? [],
    };
  }
  const [state, dispatch] = useImmerReducer(todoReducer, [], init);
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(state.todoList));
  }, [state]);

  const addTodo = useCallback((todo: ITodo) => {
    dispatch({
      type: ACTION_TYPE.ADD_TODO,
      payload: todo,
    });
  }, []);
  const removeTodo = useCallback((id: string) => {
    dispatch({
      type: ACTION_TYPE.REMOVE_TODO,
      payload: id,
    });
  }, []);
  const toggleTodo = useCallback((id: string) => {
    dispatch({
      type: ACTION_TYPE.TOGGLE_TODO,
      payload: id,
    });
  }, []);
  return (
    <div>
      <MyInput todoList={state.todoList} addTodo={addTodo} />
      <MyList
        todoList={state.todoList}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default TodoList;
