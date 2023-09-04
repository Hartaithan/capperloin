export interface Todo {
  id: string;
  content: string;
  completed: boolean;
}

export interface TodosState {
  list: Todo[];
}
