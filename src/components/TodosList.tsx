import type { FC } from "react";
import { styled } from "styled-components";
import { useSelector } from "../hooks/useStore";
import { selectFilteredTodos } from "../store/todos/selectors";
import TodoItem from "./TodoItem";
import { breakpoints } from "../utils/media-query";

const Container = styled.div`
  width: 100%;
  border-top: 1px solid #f7f7f7;
  border-bottom: 1px solid #f7f7f7;
`;

const Empty = styled.p`
  width: 100%;
  text-align: center;
  font-size: 0.875rem;
  margin: 12px 0px;
  @media ${breakpoints.md} {
    font-size: 0.75rem;
  }
`;

const TodosList: FC = () => {
  const todos = useSelector(selectFilteredTodos);
  return (
    <Container>
      {todos.length === 0 && (
        <Empty>List is empty. Let&apos;s add something!</Empty>
      )}
      {todos.map((todo, index) => {
        const isLast = todos.length === index + 1;
        return <TodoItem key={todo.id} todo={todo} border={!isLast} />;
      })}
    </Container>
  );
};

export default TodosList;
