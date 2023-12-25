import "./ImageView.css";

const ImageView = ({ images, onClose }) => {
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
        <img src={images} alt="Project" className="image-view"/>
      </div>
    </div>
  );
};

export default ImageView;

