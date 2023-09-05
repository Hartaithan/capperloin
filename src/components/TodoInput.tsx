import type { FC, FormEventHandler } from "react";
import { styled } from "styled-components";
import ArrowIcon from "../icons/ArrowIcon";
import { useDispatch } from "../hooks/useStore";
import { addTodo } from "../store/todos/actions";

interface Form {
  todo: { value: string };
}

const Wrapper = styled.form`
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
  const dispatch = useDispatch();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement & Form;
    const todo = target.todo.value;
    dispatch(addTodo(todo));
    target.reset();
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <ArrowIcon color="#d9d9d9" />
      <Input placeholder="What needs to be done?" name="todo" autoFocus />
    </Wrapper>
  );
};

export default TodoInput;
