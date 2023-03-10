import Header from "./Components/Header";
import Container from "./Components/Styled/Container.styled";
import "./App.css";
import Main from "./Components/Main";
import Spending from "./Components/Spending";
import Total from "./Components/Total";
import data from "../data.json";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Main>
          <Spending data={data} />
          <hr />
          <Total />
        </Main>
      </Container>
    </div>
  );
}

export default App;
