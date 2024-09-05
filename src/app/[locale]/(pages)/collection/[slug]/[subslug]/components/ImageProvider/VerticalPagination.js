import Slider from "react-slick";

const VerticalPagination = ({ images, activeIndex, onThumbnailClick }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: images.length < 5 ? images.length : 5,
    slidesToScroll: images.length < 5 ? images.length : 5,
    centerMode: false,
    arrows: true,
    dots: false,
    focusOnSelect: true,
  };

  return (
    <div className="relative w-full h-full">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div
            key={index}
            className={`!flex justify-center items-center cursor-pointer rounded-md transition-all duration-300  ${
              index === activeIndex ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => onThumbnailClick(index)}
          >
            <img
              src={item.resim}
              alt={`Thumbnail ${index}`}
              className={`w-[98%] aspect-[16/9] object-cover`} // Adjust max-height based on number of images
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VerticalPagination;
