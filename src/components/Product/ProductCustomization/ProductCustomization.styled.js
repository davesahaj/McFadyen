import styled from "styled-components";

export const ProductCustomizationContainer = styled.div`
  position: sticky;
  top: 70px;
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 45%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 1200px) {
    width: 25%;
  }
`;
export const Description = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const Heading = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 3rem;
  text-transform: uppercase;

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 3rem;
  }
`;
export const SubHeading = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
`;
export const PriceTag = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  margin: 0.5rem 0;
`;

export const ColorSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

export const ColorText = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  margin: 0.5rem 0;
`;
export const Choices = styled.div``;
export const Choice = styled.img`
  transition: all 0.2s ease;
  min-height: 80px;
  min-width: 60px;
  max-height: 80px;
  max-width: 60px;
  margin-right: 0.5rem;
  cursor: pointer;
  border: 2px solid #e5e5e5;

  ${({ active }) =>
    active &&
    `
  border: 2px solid #000;
  `}
`;

export const SizeSelector = styled.div``;

export const SizeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SelectedSize = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  margin: 0.5rem 0;
`;
export const SizeGuide = styled.div``;

export const SizeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
export const SizeButton = styled.button`
  transition: all 0.3s ease;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  border: 1px solid #e5e5e5;
  color: #000;
  cursor: pointer;
  height: 25px;
  width: 75px;
  margin-right: auto;
  margin-top: 0.8rem;
  border-radius: 15px;
  background: #fff;

  &:disabled {
    background: #e5e5e5;
    cursor: default;
  }

  ${({ active }) =>
    active &&
    `
  color:#fff;
  border: 1px solid #000;
  background: #000;
  `}
`;
export const CartButtonWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
  width: 100%;
`;
export const CartButton = styled.button`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  text-transform: uppercase;
  color: #fff;
  border: 1px solid #000;
  background: #000;
  cursor: pointer;
  height: 45px;
  width: 100%;
  margin-right: auto;
  margin-top: 0.8rem;
  border-radius: 25px;
`;
export const OffersContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const Offer = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  margin: 0.5rem 0;
`;
