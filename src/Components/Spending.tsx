import {Bar, StyledSpending} from './Styled/Spending.styled'

interface Props {
  data: {
    day: string;
    amount: number;
  }[];
}

const Spending: React.FC<Props> = ({ data }) => {
  const days = data.map((obj, index) => {
    return (
      <div key={index} className="day">
        <Bar height={obj.amount}></Bar>
        {obj.day}
      </div>
    );
  });
  return (
    <StyledSpending>
      <h1>Spending - Last 7 days</h1>
      <div className="graph-container">
        <div className="graph">{days}</div>
      </div>
    </StyledSpending>
  );
};

export default Spending;
