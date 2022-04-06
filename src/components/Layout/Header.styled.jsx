import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.15);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    height: 60px;
    padding: 0rem 0.5rem;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    height: 60px;
    padding: 0rem 2rem;
  }
`;
export const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.div`
  color: black;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.3rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Link = styled.span`
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-weight: 400;

  cursor: pointer;
  margin: 0 0.5rem;
`;

export const ItemContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 600px) {
    height: 100%;
    width: 140px;
  }

  @media screen and (min-width: 1200px) {
    height: 100%;
    width: 200px;
  }
`;

export const Search = styled.div`
  color: black;
  cursor: pointer;
  font-size: 1.3rem;
`;
export const Cart = styled(Search)``;
export const Menu = styled(Search)``;
