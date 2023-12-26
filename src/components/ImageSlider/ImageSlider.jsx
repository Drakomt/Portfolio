import "./ImageSlider.css"
import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import { useDispatch } from "react-redux";
import { setImageIndex } from "../../store/imageSlice";
// import {
//     FaArrowLeft,
//     FaArrowRight,
//     FaCircle,
//     FaDotCircle,
//   } from "react-icons/fa";

function ImageSlider({ images, onImageClick}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();

  function showNextImage() {
    setCurrentImageIndex(index => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setCurrentImageIndex(index => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }

  function handleImageClick() {
    dispatch(setImageIndex(currentImageIndex));
    onImageClick();
  }

  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <button onClick={handleImageClick} className="img-btn">
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
          aria-hidden={currentImageIndex !== index}
          className="img-slider-img"
          style={{ translate: `${-100 * currentImageIndex}%` }}
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
            onClick={() => setCurrentImageIndex(index)}
          >
            {index === currentImageIndex ? (
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
  )
}

export default ImageSlider;