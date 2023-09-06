import type { FC } from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "../hooks/useStore";
import { selectActiveCount, selectFilter } from "../store/todos/selectors";
import { changeFilter, clearCompletedTodos } from "../store/todos/actions";
import { FILTER } from "../models/todo";

interface FilterProps {
  $active?: boolean;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;
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

const Filter = styled.button<FilterProps>`
  font-size: 12px;
  padding: 4px 6px;
  border-radius: 4px;
  border: ${({ $active }) =>
    $active ? "1px solid #e9d9d8" : "1px solid transparent"};
  outline: none;
  background: transparent;
`;

const TodosFilters: FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const active = useSelector(selectActiveCount);

  return (
    <Container>
      <Counter>
        {active === 0 && "You don't have tasks"}
        {active > 0 && `${active} items left`}
      </Counter>
      <Content>
        <Filter
          $active={filter === FILTER.All}
          onClick={() => dispatch(changeFilter(FILTER.All))}
        >
          All
        </Filter>
        <Filter
          $active={filter === FILTER.Active}
          onClick={() => dispatch(changeFilter(FILTER.Active))}
        >
          Active
        </Filter>
        <Filter
          $active={filter === FILTER.Completed}
          onClick={() => dispatch(changeFilter(FILTER.Completed))}
        >
          Completed
        </Filter>
      </Content>
      <Filter onClick={() => dispatch(clearCompletedTodos())}>
        Clear completed
      </Filter>
    </Container>
  );
};

export default TodosFilters;
