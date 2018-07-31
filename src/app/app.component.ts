import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { actions, State } from './state/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public todoInput: string;
  public todos: string[];

  constructor(private store: Store<State>) {
  }

  public onAddClick(): void {
    this.todoInput = this.todoInput.trim();
    if (!this.todoInput) {
      return;
    }
    this.store.dispatch(actions.addTood(this.todoInput));
    this.todoInput = '';
  }

  public ngOnInit(): void {
    this.store.subscribe(state => {
      console.log(state);

      this.todos = state.todo.todos;
    });
  }
}
