import {
  ProductInfoContainer,
  DetailsTabContainer,
  Tab,
  DetailsContainer,
  Details,
  MetaInformation,
} from "./ProductInfo.styled";

const ProductInfo = () => {
  return (
    <ProductInfoContainer>
      <DetailsTabContainer>
        <Tab active={true}>Details</Tab>
        <Tab>Delivery</Tab>
        <Tab>Fit</Tab>
        <Tab>Share</Tab>
      </DetailsTabContainer>
      <DetailsContainer>
        <Details>
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the sky. it
          has a straight fit with well defined shoulders and a shawl collar
          culminating in a button and has been flawlessly finished with three
          jet pockets with a sartorial feel.
        </Details>
      </DetailsContainer>
      <MetaInformation>See the EDITOR'S NOTE</MetaInformation>
      <MetaInformation>Learn about the DESIGNER</MetaInformation>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
