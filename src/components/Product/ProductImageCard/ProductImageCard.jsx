import ImageCarousel from "./ImageCarousel/Carousel";
import ImageGrid from "./ImageGrid/ImageGrid";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const ProductImageCard = () => {
  const imageArray = useSelector((state) => state.product.images);

  const [width, setWidth] = useState(window.innerWidth);
  const mobileWidth = 600.1;
  const laptopWidth = 1199.9;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(() => window.innerWidth));
  });

  if (width < mobileWidth) {
    return <ImageCarousel images={imageArray} />;
  } else if (width > laptopWidth) {
    return <ImageGrid images={imageArray} />;
  }
};

export default ProductImageCard;
