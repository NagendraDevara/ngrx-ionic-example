import { BooksState } from './books/book.reducer';
import { TodoState } from './todos/todo.reducer';

export interface AppState {
  todos: TodoState,
  books:BooksState
}
