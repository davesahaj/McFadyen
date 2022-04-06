import { ProductPageContainer, Main } from "./ProductPage.styled";

import ProductCustomization from "./ProductCustomization/ProductCustomization";
import ProductFootNotes from "./ProductFootNotes/ProductFootNotes";
import ProductImageCard from "./ProductImageCard/ProductImageCard";
import ProductInfo from "./ProductInfo/ProductInfo";

const ProductPage = () => {
  return (
    <ProductPageContainer>
      <Main>
        <ProductInfo />
        <ProductImageCard />
        <ProductCustomization />
      </Main>
      <ProductFootNotes />
    </ProductPageContainer>
  );
};

export default ProductPage;
