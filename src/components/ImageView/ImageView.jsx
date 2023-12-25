import "./ImageView.css";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
// import {
//     FaArrowLeft,
//     FaArrowRight,
//     FaCircle,
//     FaDotCircle,
//   } from "react-icons/fa";

const ImageView = ({ images, onClose }) => {
  const [imageIndex, setImageIndex] = useState(0);

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

    const handleClose = (e) => {
        // Use currentTarget to get the element the event listener is attached to
        const isOutsideImage = e.target.classList.contains("image-view-container");
        const isNotCloseButton = !e.target.classList.contains("close-button");

        if (isOutsideImage && isNotCloseButton) {
            onClose();
        }
        
    };

  return (
    <div className="image-view-container" onClick={handleClose}>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <div className="image-container">
        <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
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
        />
        ))}
      </div>
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
    </section>
      </div>
    </div>
  );
};

export default ImageView;

