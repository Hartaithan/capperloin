export interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

export interface TodosState {
  list: Todo[];
}
