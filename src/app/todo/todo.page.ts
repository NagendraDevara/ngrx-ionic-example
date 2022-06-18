import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadBooks } from '../state/books/book.action';
import { selectAllBooks } from '../state/books/book.selector';
import { addTodo, removeTodo, loadTodos } from '../state/todos/todo.actions';
import { selectAllTodos } from '../state/todos/todo.selectors';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.page.html',
  styleUrls: ['todo.page.scss'],
})
export class TodoPage implements OnInit {
  // public allTodos$ = this.store.select(selectAllTodos);
  public allBooks$ = this.store.select(selectAllBooks);

  public todo = '';

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadBooks());
    // this.store.dispatch(loadTodos());
  }

  addTodo() {
    // this.store.dispatch(addTodo({ content: this.todo }));
    this.todo = '';
  }

  removeTodo(todo: Todo) {
    // this.store.dispatch(removeTodo({ id: todo.id }));
  }
}
