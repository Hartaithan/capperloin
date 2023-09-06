export enum FILTER {
  All = "all",
  Active = "active",
  Completed = "completed",
}

export interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

export interface TodosState {
  list: Todo[];
  filter: FILTER;
}
