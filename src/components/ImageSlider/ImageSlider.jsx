import { useState } from "react"
// import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import {
    FaArrowLeft,
    FaArrowRight,
    FaCircle,
    FaDotCircle,
  } from "react-icons/fa";
  import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import "./ImageSlider.css"
import ImageView from "../ImageView/ImageView";

function ImageSlider({ images, onImageClick}) {
  const [imageIndex, setImageIndex] = useState(0);
  // const [isViewOpen, setIsViewOpen] = useState(false);

  function showNextImage() {
    setImageIndex(index => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }

  // const openImageView = () => {
  //   setIsViewOpen(true);
  // };

  // const closeImageView = () => {
  //   setIsViewOpen(false);
  // };

  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <button onClick={onImageClick}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map(({ url, alt }, index) => (
          <img
          key={url}
          src={url}
          alt={alt}
          aria-hidden={imageIndex !== index}
          className="img-slider-img"
          style={{ translate: `${-100 * imageIndex}%` }}
          // onClick={openImageView}
        />
        ))}
      </div>
      </button>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        {/* <FaArrowLeft aria-hidden /> */}
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        {/* <FaArrowRight aria-hidden /> */}
        <ArrowBigRight aria-hidden />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              // <FaDotCircle aria-hidden/>
              <CircleDot aria-hidden />
            ) : (
              // <FaCircle aria-hidden />
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
      {/* {isViewOpen && (
        <ImageView
          imageUrl={images[imageIndex].url}
          alt={images[imageIndex].alt}
          onClose={closeImageView}
          onPrev={showPrevImage}
          onNext={showNextImage}
        />
      )} */}
    </section>
  )
}

export default ImageSlider;