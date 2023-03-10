import styled from "styled-components";

interface StyledProps {
  height?: number;
}

export const Bar = styled.div`
  height: ${(props: StyledProps) => 
    `${props.height ? props.height * 2.8 : ""}px`
  };
  /* outline: 1px solid red; */
  background-color: hsl(10, 79%, 65%);
  width: 3em;
  border-radius: 4px;
  margin-bottom: 1.2em;
`;

export const StyledSpending = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  

  h1 {
    font-size: 1.5rem;
    margin-bottom: 2.2em;
  }
  .graph-container {
    overflow: hidden;
    height: 184px;
    margin-bottom: 0.5em;
  }

  .graph {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .day {
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
  }
`;
