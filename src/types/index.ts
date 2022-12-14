export interface ITodo {
  id: string;
  content: string;
  completed: boolean;
}

export interface IState {
  todoList: ITodo[];
}

export interface IAction {
  type: ACTION_TYPE;
  payload: ITodo | string;
}

export enum ACTION_TYPE {
  ADD_TODO = "addTodo",
  REMOVE_TODO = "removeTodo",
  TOGGLE_TODO = "toggleTodo",
}
