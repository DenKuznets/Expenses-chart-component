import React from "react";
import styled from "styled-components";
import desktopWidth from "../../constants";
interface Props {
  children: React.ReactNode;
}

const StyledMain = styled.main`
  background-color: white;
  border-radius: 10px;
  height: 422px;
  padding: 1.3em 1.3em;
  @media (min-width: ${desktopWidth}) {
    padding-top: 0.9em;
    font-size: 2rem;
    border-radius: 18px;
    height: 522px;
  }
  hr {
    margin-bottom: 1.2em;
    border: none;
    border-bottom: 2px solid;
    border-color: hsl(27, 66%, 92%);
    @media (min-width: ${desktopWidth}) {
       margin-bottom: 0.7em;

     }
  }
`;

function Main({ children }: Props) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
