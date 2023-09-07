import type { FC } from "react";
import { css, styled } from "styled-components";
import TodoInput from "./TodoInput";
import TodosList from "./TodosList";
import TodosFilters from "./TodosFilters";
import { breakpoints } from "../utils/media-query";

const shadow = css`
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.2);
`;

const card = css`
  content: "";
  position: absolute;
  height: 100%;
  left: 50%;
  background: #ffffff;
  transform: translateX(-50%);
`;

const Container = styled.div`
  position: relative;
  background: #ffffff;
  width: 500px;
  ${shadow}
  &:after {
    z-index: -1;
    bottom: -5px;
    width: 98%;
    ${shadow}
    ${card}
  }
  &:before {
    z-index: -2;
    bottom: -10px;
    width: 96%;
    ${shadow}
    ${card}
  }
  @media ${breakpoints.md} {
    width: 100%;
  }
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
