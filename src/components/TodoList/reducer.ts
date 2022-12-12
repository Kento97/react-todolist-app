import { ACTION_TYPE, IAction, IState, ITodo } from "@/types";

export function todoReducer(state: IState, action: IAction): IState {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, payload as ITodo],
      };

    case ACTION_TYPE.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== payload),
      };

    case ACTION_TYPE.TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          return todo.id === payload
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : {
                ...todo,
              };
        }),
      };

    default:
      return state;
  }
}
