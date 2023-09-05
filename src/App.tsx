import type { FC } from "react";
import Container from "./components/Container";
import TodosContainer from "./components/TodosContainer";
import Title from "./components/Title";

const App: FC = () => {
  return (
    <Container>
      <Title>todos</Title>
      <TodosContainer />
    </Container>
  );
};

export default App;
