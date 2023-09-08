import type { FC, FormEventHandler } from "react";
import { styled } from "styled-components";
import ArrowIcon from "../icons/ArrowIcon";
import { useDispatch } from "../hooks/useStore";
import { addTodo } from "../store/todos/actions";
import { breakpoints } from "../utils/media-query";

const Form = styled.form`
  display: flex;
  align-items: center;
  height: 50px;
  & > svg {
    margin-left: 12px;
  }
  @media ${breakpoints.md} {
    height: 40px;
  }
`;

const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  font-size: 1rem;
  font-family: inherit;
  padding: 6px 12px;
  &::-webkit-input-placeholder {
    color: #d9d9d9;
    font-style: italic;
  }
  &:-moz-placeholder {
    color: #d9d9d9;
    font-style: italic;
  }
  &::placeholder {
    color: #d9d9d9;
    font-style: italic;
  }
  @media ${breakpoints.md} {
    font-size: 0.875rem;
  }
`;

const TodoInput: FC = () => {
  const dispatch = useDispatch();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const target = event.currentTarget;
    const todo = target.elements.namedItem("todo") as HTMLInputElement;
    dispatch(addTodo(todo.value));
    target.reset();
  };

  return (
    <Form onSubmit={handleSubmit} data-testid="todo-form">
      <ArrowIcon color="#d9d9d9" />
      <Input
        placeholder="What needs to be done?"
        name="todo"
        autoFocus
        data-testid="todo-input"
      />
    </Form>
  );
};

export default TodoInput;
