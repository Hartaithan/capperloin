import type { FC } from "react";
import { styled } from "styled-components";
import TodoInput from "./TodoInput";
import TodosList from "./TodosList";
import TodosFilters from "./TodosFilters";

const Container = styled.div`
  background: #ffffff;
  width: 500px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.2);
`;

const TodosContainer: FC = () => {
  return (
    <Container>
      <TodoInput />
      <TodosList />
      <TodosFilters />
    </Container>
  );
};

export default TodosContainer;
