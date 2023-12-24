import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "./ImageView.css";

const ImageView = ({ imageUrl, alt, onClose, onPrev, onNext }) => (
  <div className="img-view">
    <img src={imageUrl} alt={alt} className="img-view-img" />
    <button onClick={onPrev} className="img-view-btn" style={{ left: 0 }} aria-label="View Previous Image">
      <ArrowBigLeft aria-hidden />
    </button>
    <button onClick={onNext} className="img-view-btn" style={{ right: 0 }} aria-label="View Next Image">
      <ArrowBigRight aria-hidden />
    </button>
    <div className="img-view-overlay" onClick={onClose}></div>
  </div>
);

export default ImageView;