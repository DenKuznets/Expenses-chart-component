import Header from "./Components/Header";
import Container from "./Components/Styled/Container.styled";
import "./App.css";
import Main from "./Components/Main";
import Spending from "./Components/Spending";
import Total from "./Components/Total";
import data from "../data.json";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    desktop: "768px",
  }
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Main>
            <Spending data={data} />
            <hr />
            <Total />
          </Main>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
