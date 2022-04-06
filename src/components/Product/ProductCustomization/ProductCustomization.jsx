import React, { useState } from "react";

import {
  ProductCustomizationContainer,
  Description,
  Heading,
  SubHeading,
  PriceTag,
  ColorSelector,
  ColorText,
  Choices,
  Choice,
  SizeSelector,
  SelectedSize,
  SizeInfo,
  SizeGuide,
  SizeButtonContainer,
  SizeButton,
  CartButtonWrapper,
  CartButton,
  OffersContainer,
  Offer,
} from "./ProductCustomization.styled";
import { useSelector } from "react-redux";

const ProductCustomization = () => {
  const availableSizes = useSelector((state) => state.product.sizes);
  const availableColors = useSelector((state) => state.product.colors);

  const [selectedSize, setSelectedSize] = useState(availableSizes[0]);
  const [selectedColor, setSelectedColor] = useState(availableColors[0]);

  return (
    <ProductCustomizationContainer>
      <Description>
        <Heading>JONATHAN SIMKHAI</Heading>
        <SubHeading>Lurex Linen Viscose Jacket in Conchiglia</SubHeading>
        <PriceTag>$225</PriceTag>
      </Description>

      <ColorSelector>
        <ColorText>Color</ColorText>
        <Choices>
          {availableColors.map((colorImage, idx) => (
            <Choice
              src={`assets/${colorImage}`}
              active={selectedColor === availableColors[idx]}
              onClick={() => setSelectedColor(() => availableColors[idx])}
            />
          ))}
        </Choices>
      </ColorSelector>

      <SizeSelector>
        <SizeInfo>
          <SelectedSize>Size L</SelectedSize>
          <SizeGuide>Size Guide</SizeGuide>
        </SizeInfo>
        <SizeButtonContainer>
          <SizeButton
            disabled={availableSizes.includes("xs") ? false : true}
            onClick={() => setSelectedSize(() => "xs")}
            active={selectedSize === "xs"}
          >
            XS
          </SizeButton>
          <SizeButton
            disabled={availableSizes.includes("s") ? false : true}
            onClick={() => setSelectedSize(() => "s")}
            active={selectedSize === "s"}
          >
            S
          </SizeButton>
          <SizeButton
            disabled={availableSizes.includes("m") ? false : true}
            onClick={() => setSelectedSize(() => "m")}
            active={selectedSize === "m"}
          >
            M
          </SizeButton>
          <SizeButton
            disabled={availableSizes.includes("l") ? false : true}
            onClick={() => setSelectedSize(() => "l")}
            active={selectedSize === "l"}
          >
            L
          </SizeButton>
          <SizeButton
            disabled={availableSizes.includes("xxl") ? false : true}
            onClick={() => setSelectedSize(() => "xxl")}
            active={selectedSize === "xxl"}
          >
            XXL
          </SizeButton>
        </SizeButtonContainer>
      </SizeSelector>

      <CartButtonWrapper>
        <CartButton>Add to bag</CartButton>
      </CartButtonWrapper>

      <OffersContainer>
        <Offer>
          Get 4 interest-free payments of $196.25 with Klarna LEARN MORE
        </Offer>
        <Offer>Speak to a Personal Stylist CHAT NOW</Offer>
      </OffersContainer>
    </ProductCustomizationContainer>
  );
};

export default ProductCustomization;
