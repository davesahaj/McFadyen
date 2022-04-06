import styled from "styled-components";
export const ProductInfoContainer = styled.div`
  position: sticky;
  top: 70px;
  display: flex;
  flex-direction: column;

  height: 35%;
  width: 25%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 1200px) {
    display: flex;
  }
`;
export const DetailsTabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
`;
export const Tab = styled.button`
  cursor: pointer;
  background: inherit;
  color: #767676;
  margin-right: 1.5rem;
  padding: 0;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  text-transform: uppercase;
  border: none;

  ${({ active }) =>
    active &&
    `
  color:#000;
  font-weight: 600;
  `}
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
`;
export const Details = styled.p`
  font-family: "Roboto", sans-serif;
  line-height: 1.3rem;
`;
export const MetaInformation = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  margin-top: 1rem;
`;
