import { createAction,props } from "@ngrx/store";


export const addBook = createAction(
    '[Book Page] Add Book',
    props<{ content: string }>()
  );
  
  export const removeBook = createAction(
    '[Book Page] Remove Book',
    props<{ id: string }>()
  );
  export const loadTodos = createAction('[Book Page] Load Books');
