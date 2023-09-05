import type { FC } from "react";
import type { Todo } from "../models/todo";
import { styled } from "styled-components";

interface TodoProps {
  todo: Todo;
  border?: boolean;
}

interface StyleProps {
  $border: TodoProps["border"];
}

const Container = styled.div<StyleProps>`
  display: flex;
  padding: 12px;
  border-bottom: ${({ $border }) => ($border ? "1px solid #F7F7F7" : "none")};
`;

const Content = styled.p``;

const TodoItem: FC<TodoProps> = (props) => {
  const { todo, border = false } = props;

  return (
    <Container $border={border}>
      <Content>{todo.content}</Content>
    </Container>
  );
};

export default TodoItem;
