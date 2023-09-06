import type { FC } from "react";
import { styled } from "styled-components";
import { useSelector } from "../hooks/useStore";
import { selectIncompleteCount } from "../store/todos/selectors";

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

const Counter = styled.p`
  font-size: 12px;
`;

const Filter = styled.button`
  font-size: 12px;
  border: none;
  outline: none;
  background: transparent;
`;

const TodosFilters: FC = () => {
  const incomplete = useSelector(selectIncompleteCount);

  return (
    <Container>
      <Counter>
        {incomplete === 0 && "You don't have tasks"}
        {incomplete > 0 && `${incomplete} items left`}
      </Counter>
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
