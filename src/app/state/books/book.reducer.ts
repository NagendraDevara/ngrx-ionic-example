import { BOOK } from "./book.model";
import { createReducer, on } from '@ngrx/store';
import { addBook, removeBook } from "./book.action";

export interface BooksState {
    books: BOOK[];
    error:string,
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const booksInitialState: BooksState = {
    books: [],
    error:null,
    status: 'pending'
};

export const bookReducer = createReducer(
    booksInitialState,
    on(addBook, (state, { content }) => ({
        ...state,
        books: [...state.books, { id: Date.now().toString(), content: content }]
    })),
    on(removeBook, (state, { id }) => ({
        ...state,
        books: state.books.filter((book) => book.id !== id)
    }))

)