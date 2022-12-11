import { ITodo } from "@/types";
import React from "react";
import { Button, Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
interface IProps {
  todo: ITodo;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}
function Item(Props: IProps) {
  const { todo, toggleTodo, removeTodo } = Props;
  const { id, content, completed } = todo;
  const onChange = (e: CheckboxChangeEvent) => {
    // console.log(`checked = ${e.target.checked}`);
    toggleTodo(id);
  };
  return (
    <>
      <Checkbox onChange={onChange} checked={completed}>
        Checkbox
      </Checkbox>
      <span>{content}</span>
      <Button onClick={() => removeTodo(id)}></Button>
    </>
  );
}

export default Item;
