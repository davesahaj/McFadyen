import { ImageContainer, Image } from "./ImageGrid.styled";

const ImageGrid = ({ images }) => {
  return (
    <ImageContainer>
      {images.map((image, idx) => (
        <Image
          key={idx}
          big={(idx + 3) % 3 === 0 ? 1 : idx === images.length - 1}
        >
          <img src={`assets/${image}`} alt="demo" />
        </Image>
      ))}
    </ImageContainer>
  );
};

export default ImageGrid;
