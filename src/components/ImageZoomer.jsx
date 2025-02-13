import React, { useState } from "react";
import ReactDOM from "react-dom";

function ImageZoomer() {
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="image-container">
      <div
        className="zoom-image"
        style={{
          backgroundImage: "url('https://via.placeholder.com/600')",
          backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`
        }}
        onMouseMove={handleMouseMove}
      >
        <img
          src="https://via.placeholder.com/600"
          alt="Zoomable"
          className="main-image"
        />
      </div>
    </div>
  );
}

export default ImageZoomer
