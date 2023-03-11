import styled from "styled-components";
import desktopWidth from "../../constants";

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
    @media (min-width: ${desktopWidth}) {
      font-size: 1.1rem;
      letter-spacing: 0.02em;
      line-height: 2.6;
    }
  }
  .month-number {
    font-size: 1.9rem;
    font-weight: 700;
    @media (min-width: ${desktopWidth}) {
      font-size: 3rem;
      line-height: 1;
    }
  }
  .percentage-number {
    font-weight: 700;
    text-align: end;
    line-height: 1;
    @media (min-width: ${desktopWidth}) {
      font-size: 1.17rem;
      line-height: 1;
    }
  }
  .percentage-text {
    opacity: 0.6;
    letter-spacing: -0.03em;
    @media (min-width: ${desktopWidth}) {
      font-size: 1.17rem;
      line-height: 1.6;
    }
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
