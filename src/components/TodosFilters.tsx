import type { FC } from "react";
import { css, styled } from "styled-components";
import { useDispatch, useSelector } from "../hooks/useStore";
import { selectFilter, selectFilteredCount } from "../store/todos/selectors";
import { changeFilter, clearCompletedTodos } from "../store/todos/actions";
import { FILTER } from "../models/todo";
import { breakpoints } from "../utils/media-query";

interface FilterProps {
  $active?: boolean;
}

const button = css`
  font-size: 0.75rem;
  padding: 4px 6px;
  border-radius: 4px;
  border: none;
  outline: none;
  background: transparent;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  @media ${breakpoints.md} {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  @media ${breakpoints.md} {
    order: 1;
    width: 100%;
    flex: unset;
    margin-bottom: 6px;
  }
`;

const Counter = styled.p`
  font-size: 0.75rem;
  @media ${breakpoints.md} {
    order: 2;
  }
`;

const Clear = styled.button`
  ${button}
  @media ${breakpoints.md} {
    order: 3;
  }
`;

const Filter = styled.button<FilterProps>`
  ${button}
  border: ${({ $active }) =>
    $active ? "1px solid #e9d9d8" : "1px solid transparent"};
`;

const TodosFilters: FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const count = useSelector(selectFilteredCount);

  return (
    <Container>
      <Counter>
        {count === 0 && "Empty"}
        {count > 0 && `${count} items left`}
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
      <Clear onClick={() => dispatch(clearCompletedTodos())}>
        Clear completed
      </Clear>
    </Container>
  );
};

export default TodosFilters;
