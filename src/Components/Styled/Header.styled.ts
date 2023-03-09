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

  .balance {
    display: flex;
    flex-direction: column;
    margin-right: auto;
  }

  .balance__numbers {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .balance__white-circle {
    height: ${circleSize};
    width: ${circleSize};
    border-radius: 50%;
    border: 2px solid white;
    position: relative;
    left: 20px;
  }

  .balance__black-circle {
    height: ${circleSize};
    width: ${circleSize};
    border-radius: 50%;
    background-color: black;
  }
`;

export default StyledHeader;
