import React from "react";
import styled from "styled-components";

const StyledTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .total__container {
    display: flex;
    flex-direction: column;
  }
  .month-text {
    letter-spacing: -0.02em;
    opacity: 0.6;
  }
  .month-number {
    font-size: 1.9rem;
    font-weight: 700;
  }
  .percentage-number {
    font-weight: 700;
    text-align: end;
    line-height: 1;
  }
  .percentage-text {
    opacity: 0.6;
    letter-spacing: -0.03em;
  }
`;

function Total() {
  return (
    <StyledTotal>
      <div className="total__container">
        <span className="month-text">Total this month</span>
        <span className="month-number">$478.33</span>
      </div>
      <div className="total__container">
        <span className="percentage-number">+2.4%</span>
        <span className="percentage-text">from last month</span>
      </div>
    </StyledTotal>
  );
}

export default Total;
