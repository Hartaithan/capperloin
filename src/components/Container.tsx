import { styled } from "styled-components";
import { breakpoints } from "../utils/media-query";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  @media ${breakpoints.xxl} {
    max-width: 90%;
  }
  @media ${breakpoints.lg} {
    padding-top: 32px;
  }
`;

export default Container;
