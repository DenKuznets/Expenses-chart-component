import styled from "styled-components";
import desktopWidth from "../../constants";

interface StyledProps {
  amount?: number;
  currentDay?: boolean;
}

const StyledBar = styled.div`
  /* высота столбиков статистики высчитывается путем умножения потраченной суммы на 2.8 для попадания в размеры задания FrontendMentor. Можно прикрутить математику, взять самый высокий столбик за 100% и высоту остальных столбиков рассчитать относительно него*/
  height: ${(props: StyledProps) =>
    `${props.amount ? props.amount * 2.8 : ""}px`};
  background-color: ${(props: StyledProps) =>
    props.currentDay ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"};
  cursor: pointer;
  width: 3.2em;
  border-radius: 4px;
  margin-bottom: 1.2em;
  position: relative;
  display: flex;
  justify-content: center;

  @media (min-width: ${desktopWidth}) {
    margin-bottom: 0.5em;
  }
  &:hover {
    background-color: ${(props: StyledProps) =>
      props.currentDay
        ? "hsla(186, 34%, 60%, 0.7)"
        : "hsla(10, 79%, 65%, 0.7)"};
    .amount {
      opacity: 1;
    }
  }
  .amount {
    z-index: 1;
    opacity: 0;
    position: absolute;
    top: -50px;
    font-size: 1.1rem;
    font-weight: 700;
    color: white;
    background-color: hsl(25, 47%, 15%);
    width: 4.3em;
    height: 2.2em;
    border-radius: 6px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-out;
  }
`;

const Bar = (props: StyledProps) => {
  return (
    <StyledBar amount={props.amount} currentDay={props.currentDay}>
      <div className="amount">${props.amount}</div>
    </StyledBar>
  );
};

export default Bar;
