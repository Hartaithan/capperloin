import type { FC } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 8px 12px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const Counter = styled.p``;

const Filter = styled.button`
  border: none;
  outline: none;
  background: transparent;
`;

const TodosFilters: FC = () => {
  return (
    <Container>
      <Counter>2 items left</Counter>
      <Content>
        <Filter>All</Filter>
        <Filter>Active</Filter>
        <Filter>Completed</Filter>
      </Content>
      <Filter>Clear completed</Filter>
    </Container>
  );
};

export default TodosFilters;
