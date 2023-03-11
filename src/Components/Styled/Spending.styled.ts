import styled from "styled-components";
import desktopWidth from "../../../constants";

interface StyledProps {
  height?: number;
}

export const Bar = styled.div`
  height: ${(props: StyledProps) => 
    `${props.height ? props.height * 2.8 : ""}px`
  };
  background-color: hsl(10, 79%, 65%);
  width: 3.2em;
  border-radius: 4px;
  margin-bottom: 1.2em;
  @media (min-width: ${desktopWidth}) {
    
    margin-bottom: 0.5em;
  }
`;

export const StyledSpending = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: ${desktopWidth}) {
    font-size: 1.4rem;
  }
  
  
  h1 {
    font-size: 1.5em;
    margin-bottom: 2.2em;    
    @media (min-width: ${desktopWidth}) {
      margin-bottom: 1.9em;
      letter-spacing: -0.02em;
    }
    
  }
  .graph-container {
    overflow: hidden;
    height: 184px;
    margin-bottom: 0.5em;
    @media (min-width: ${desktopWidth}) {
     margin-bottom: 0.3em;
   }
  }

  .graph {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .day {
    font-size: 0.7em;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
  }
`;
