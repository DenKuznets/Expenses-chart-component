import React from "react";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
}

const StyledMain = styled.main`
  background-color: white;
  border-radius: 10px;
  margin-top: 1em;
  height: 422px;
  padding: 1.3em 1.3em;
  hr {
    margin-bottom: 1.2em;
    border: none;
    border-bottom: 2px solid;
    border-color: hsl(27, 66%, 92%);
  }
`;

function Main({ children }: Props) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
