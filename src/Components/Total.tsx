import React from "react";
import styled from "styled-components";

const StyledTotal = styled.div`
  display: flex;
  justify-content: space-between;
  .total__container {
    display: flex;
    flex-direction: column;
  }
  
`;

function Total() {
  return (
    <StyledTotal>
      <div className="total__container">
        <span className="total-month__text">Total this month</span>
        <span className="total-month__number">$478.33</span>
      </div>
      <div className="total__container">
        <span className="number">+2.4%</span>
        <span className="text">from last month</span>
      </div>
    </StyledTotal>
  );
}

export default Total;
