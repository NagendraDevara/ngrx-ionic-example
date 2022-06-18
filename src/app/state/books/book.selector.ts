import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { BooksState } from "./book.reducer";

export const selectBooks = (state: AppState) => state.books;
export const selectAllBooks = createSelector(
  selectBooks,
  (state: BooksState) => {
    console.log(state)
    return state.books}
);