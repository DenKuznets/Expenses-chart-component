import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  margin: auto;
  padding: 4em 1em;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    max-width: 575px;
    /* удалить paddint top после допила */
    padding-top: 11.5em;
  }
`;

export default Container;
