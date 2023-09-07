import { styled } from "styled-components";
import { breakpoints } from "../utils/media-query";

const Title = styled.h1`
  color: #e9d9d8;
  font-size: 5rem;
  font-weight: 100;
  margin-bottom: 8px;
  @media ${breakpoints.md} {
    font-size: 3rem;
  }
`;

export default Title;
