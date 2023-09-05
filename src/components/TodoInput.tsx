import type { FC } from "react";
import { styled } from "styled-components";
import ArrowIcon from "../icons/ArrowIcon";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  & > svg {
    margin-left: 12px;
  }
`;

const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  font-style: italic;
  font-size: 1rem;
  padding: 6px 12px;
  &::-webkit-input-placeholder {
    color: #d9d9d9;
  }
  &:-moz-placeholder {
    color: #d9d9d9;
  }
  &::placeholder {
    color: #d9d9d9;
  }
`;

const TodoInput: FC = () => {
  return (
    <Wrapper>
      <ArrowIcon color="#d9d9d9" />
      <Input placeholder="What needs to be done?" />
    </Wrapper>
  );
};

export default TodoInput;
