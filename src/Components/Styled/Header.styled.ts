import styled from "styled-components";
const circleSize = "2.5em";

const StyledHeader = styled.header`
  background-color: hsl(10, 79%, 65%);
  color: white;
  border-radius: 10px;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 1em 1.2em;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    padding: 0 1.8em;
    height: 120px;
    border-radius: 16px;
    font-size: 1.2rem;
  }

  .balance {
    display: flex;
    flex-direction: column;
    margin-right: auto;
  }
  .balance__header {
    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 0.9em;
      line-height: 1.8;
    }
  }

  .balance__numbers {
    font-size: 1.5rem;
    font-weight: 700;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 2rem;
    }
  }

  .balance__white-circle,
  .balance__black-circle {
    height: ${circleSize};
    width: ${circleSize};
    border-radius: 50%;   
  }

  .balance__white-circle {
    border: 2px solid white;
    position: relative;
    left: 20px;
    z-index: 1;
  }

  .balance__black-circle {
    background-color: black;
  
  }
`;

export default StyledHeader;
