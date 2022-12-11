import React, { useRef } from "react";
import { Button, Input, InputRef } from "antd";
import { ITodo } from "@/types";

interface IProps {
  addTodo: (todo: ITodo) => void;
  todoList: ITodo[];
}

function MyInput(props: IProps) {
  const { addTodo, todoList } = props;
  const inputRef = useRef<InputRef>(null);
  const uniqueId = new Date().getTime().toString();
  const addItem = (): void => {
    const val: string = inputRef.current?.input?.value!;
    if (val) {
      const isExist = todoList.find((todo) => todo.content === val);
      if (isExist) {
        alert("已存在");
        return;
      }
      addTodo({
        id: uniqueId,
        content: val,
        completed: false,
      });
    }
  };
  return (
    <>
      <Input placeholder="Please Input..." ref={inputRef} />
      <Button onClick={addItem}>添加</Button>
    </>
  );
}

export default MyInput;
