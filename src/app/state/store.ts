import { ActionReducerMap } from '@ngrx/store';

import * as todoActions from './todo.actions';
import { initialState as todoInitialState, reducer as todoReducer } from './todo.reducer';

export interface State {
  todo: todoActions.State;
}

export const initialState: State = {
  todo: todoInitialState,
};

export const actions = {
  addTood: (text: string) => new todoActions.AddTodo(text),
};

export const reducers: ActionReducerMap<State> = {
  todo: todoReducer,
};
