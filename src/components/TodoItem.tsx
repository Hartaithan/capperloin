import type { ChangeEventHandler, FC } from "react";
import type { Todo } from "../models/todo";
import { styled } from "styled-components";
import Checkbox from "./Checkbox";
import { useDispatch } from "../hooks/useStore";
import { toggleTodo } from "../store/todos/actions";
import { breakpoints } from "../utils/media-query";

interface TodoProps {
  todo: Todo;
  border?: boolean;
}

interface ContainerProps {
  $border: TodoProps["border"];
}

interface ContentProps {
  $completed: Todo["completed"];
}

const Container = styled.div<ContainerProps>`
  display: flex;
  padding: 12px;
  align-items: center;
  border-bottom: ${({ $border }) => ($border ? "1px solid #F7F7F7" : "none")};
`;

const Content = styled.p<ContentProps>`
  margin-left: 12px;
  transition: color 0.3s ease;
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "unset"};
  color: ${({ $completed }) => ($completed ? "#d9d9d9" : "inherit")};
  word-break: break-word;
  @media ${breakpoints.md} {
    font-size: 0.875rem;
  }
`;

const TodoItem: FC<TodoProps> = (props) => {
  const { todo, border = false } = props;
  const dispatch = useDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <Container $border={border} data-testid="todo-item">
      <Checkbox checked={todo.completed} onChange={handleChange} />
      <Content $completed={todo.completed}>{todo.content}</Content>
    </Container>
  );
};

export default TodoItem;
