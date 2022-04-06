import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ImageCarousel = (props) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      dynamicHeight
      swipeable={true}
      emulateTouch={true}
      showThumbs={false}
      showStatus={false}
    >
      {props.images.map((image, index) => {
        return (
          <div key={index}>
            <img
              src={`assets/${image}`}
              alt="Product"
              style={{
                msUserSelect: "none",
                MozUserSelect: "none",
                WebkitUserSelect: "none",
                WebkitTouchCallout: "none",
                khtmlUserSelect: "none",
                userSelect: "none",
              }}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default ImageCarousel;
