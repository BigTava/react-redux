import { createSelector } from "reselect";

export const getTodos = (state) => state.todos.data;
export const getTodosLoading = (state) => state.todos.isLoading;

/*
    createSelector uses memoization. It does not recompute the output
  when a same input is given again. It saves the output
    When we use createSelector, the return value of this function
  only changes when the return value of the selectors that we 
  pass as arguments changes.
*/
export const getIncompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todo.isCompleted)
);

export const getCompletedTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.isCompleted)
);
