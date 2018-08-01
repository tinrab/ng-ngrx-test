import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { actions, State } from './state/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public todoInput: string;
  public todos$: Observable<string[]>;

  constructor(private store: Store<State>) {
    this.todos$ = store.pipe(select(state => state.todo.todos));
  }

  public onAddClick(): void {
    this.todoInput = this.todoInput.trim();
    if (!this.todoInput) {
      return;
    }
    this.store.dispatch(actions.addTood(this.todoInput));
    this.todoInput = '';
  }
}
