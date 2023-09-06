import type { FC } from "react";
import { styled } from "styled-components";
import { useSelector } from "../hooks/useStore";
import { selectFilteredTodos } from "../store/todos/selectors";
import TodoItem from "./TodoItem";

const Container = styled.div`
  width: 100%;
  border-top: 1px solid #f7f7f7;
  border-bottom: 1px solid #f7f7f7;
`;

const TodosList: FC = () => {
  const todos = useSelector(selectFilteredTodos);
  return (
    <Container>
      {todos.map((todo, index) => {
        const isLast = todos.length === index + 1;
        return <TodoItem key={todo.id} todo={todo} border={!isLast} />;
      })}
    </Container>
  );
};

export default TodosList;
