import { Action } from '@ngrx/store';

export enum ActionTypes {
  ADD_TODO = 'ADD_TODO',
}

export class AddTodo implements Action {
  readonly type = ActionTypes.ADD_TODO;

  constructor(public text: string) {
  }
}

export type ActionsUnion = AddTodo;

export interface State {
  todos: string[];
}
