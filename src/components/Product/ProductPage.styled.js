import styled from "styled-components";

export const ProductPageContainer = styled.div`
  height: 60vh;
  width: 100%;
  margin-top: 70px;
  @media only screen and (max-width: 600px) {
    padding: 0rem 1rem;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0rem 3rem;
  }
`;
export const Main = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
  }

  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
