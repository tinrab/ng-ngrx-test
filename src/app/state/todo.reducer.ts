import { ActionsUnion, ActionTypes, State } from './todo.actions';

export const initialState: State = {
  todos: [],
};

export function reducer(state: State = initialState, action: ActionsUnion): State {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          action.text,
          ...state.todos,
        ],
      };
    default:
      return state;
  }
}
