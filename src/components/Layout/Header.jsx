import React from "react";
import {
  HeaderContainer,
  LogoWrapper,
  Logo,
  ItemContainer,
  Search,
  Cart,
  Menu,
  LinksContainer,
  Link,
} from "./Header.styled";

import { FiSearch, FiShoppingCart, FiMenu, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Logo>MY COMPANY.COM</Logo>
      </LogoWrapper>
      <LinksContainer>
        <Link>The Edit</Link>
        <Link>New Arrivals</Link>
        <Link>Designers</Link>
        <Link>Clothing</Link>
        <Link>Shoes</Link>
        <Link>Bags</Link>
        <Link>Accessories</Link>
        <Link>Jewelry</Link>
        <Link>Beauty</Link>
        <Link>home</Link>
      </LinksContainer>
      <ItemContainer>
        <Search>
          <FiSearch />
        </Search>
        <Cart>
          <FiShoppingCart />
        </Cart>
        <Menu>
          <FiUser />
        </Menu>
      </ItemContainer>
    </HeaderContainer>
  );
};

export default Header;
