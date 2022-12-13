import { ACTION_TYPE, IAction, IState, ITodo } from "@/types";

export function todoReducer(state: IState, action: IAction): IState {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.ADD_TODO:
      // return {
      //   ...state,
      //   todoList: [...state.todoList, payload as ITodo],
      // };
      state.todoList.push(payload as ITodo);
      return state;

    case ACTION_TYPE.REMOVE_TODO:
      state.todoList = state.todoList.filter((todo) => todo.id !== payload);
      // return {
      //   ...state,
      //   todoList: state.todoList.filter((todo) => todo.id !== payload),
      // };
      return state;
    case ACTION_TYPE.TOGGLE_TODO:
      // return {
      //   ...state,
      //   todoList: state.todoList.map((todo) => {
      //     return todo.id === payload
      //       ? {
      //           ...todo,
      //           completed: !todo.completed,
      //         }
      //       : {
      //           ...todo,
      //         };
      //   }),
      // };
      const targetTodoIndex = state.todoList.findIndex(
        (todo) => todo.id === payload
      );
      state.todoList[targetTodoIndex].completed =
        !state.todoList[targetTodoIndex].completed;
      return state;
    default:
      return state;
  }
}
