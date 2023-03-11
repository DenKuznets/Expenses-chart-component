import styled from "styled-components";
import desktopWidth from "../../../constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  margin: auto;
  padding: 4em 1em;
  gap: 16px;
  @media (min-width: ${desktopWidth}) {
    gap: 26px;
    max-width: 575px;  
  }
`;

export default Container;
