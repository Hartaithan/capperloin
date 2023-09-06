import type { ComponentPropsWithoutRef, FC } from "react";
import styled from "styled-components";
import CheckIcon from "../icons/CheckIcon";

interface CheckboxProps extends ComponentPropsWithoutRef<"input"> {
  size?: number;
}

interface ContainerProps {
  $size: number;
}

const Container = styled.label<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => $size + "px"};
  height: ${({ $size }) => $size + "px"};
  border: 1px solid #d9d9d9;
  border-radius: 50%;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const Checkbox: FC<CheckboxProps> = (props) => {
  const { checked, size = 20, ...rest } = props;
  return (
    <Container $size={size}>
      <Input {...rest} checked type="checkbox" />
      <CheckIcon
        width={size - 8}
        height={size - 8}
        rotate={-10}
        opacity={checked ? 1 : 0}
      />
    </Container>
  );
};

export default Checkbox;
