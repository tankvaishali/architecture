"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Component() {
  const [position, setPosition] = useState(50);
  const [selectedCategory, setSelectedCategory] = useState("Residential");

  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const images = {
    Residential: {
      before: "https://happylifeclub.tokotema.com/wp-content/uploads/2023/09/portrait-of-a-successful-mature-businessman-inside-2023-02-08-23-57-44-utc-1.jpg",
      after: "https://happylifeclub.tokotema.com/wp-content/uploads/2023/09/successful-asian-boss-near-the-office-looks-at-the-2022-12-08-03-58-39-utc-1.jpg",
    },
    Commercial: {
      before: "https://happylifeclub.tokotema.com/wp-content/uploads/2023/09/businesswomen-using-laptop-and-having-a-discussion-2021-08-28-16-45-18-utc-1.jpg",
      after: "https://happylifeclub.tokotema.com/wp-content/uploads/2023/09/businesswomen-sitting-in-armchair-and-having-a-con-2021-08-28-16-45-26-utc-1-1024x521.png",
    },
    "Lighting Design": {
      before: "https://example.com/lighting-before.jpg",
      after: "https://example.com/lighting-after.jpg",
    },
    "Art Deco": {
      before: "https://example.com/artdeco-before.jpg",
      after: "https://example.com/artdeco-after.jpg",
    },
  };

  const handleMove = useCallback(
    (event) => {
      if (!isDragging.current || !containerRef.current) return;

      const { left, width } = containerRef.current.getBoundingClientRect();
      const x = event.touches ? event.touches[0].clientX : event.clientX;
      const relativeX = x - left;
      setPosition(Math.min(Math.max((relativeX / width) * 100, 0), 100));
    },
    []
  );

  useEffect(() => {
    const handleMouseUp = () => (isDragging.current = false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [handleMove]);

  const startDrag = () => (isDragging.current = true);

  const styles = {
    container: {
      height: "80vh", // Responsive height based on viewport
      maxHeight: "480px",
      overflow: "hidden",
      position: "relative",
      userSelect: "none",
    },
    beforeImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(${images[selectedCategory].before})`,
      backgroundSize: "cover",
      zIndex: 1,
    },
    afterImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(${images[selectedCategory].after})`,
      backgroundSize: "cover",
      clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
      zIndex: 2,
    },
    slider: {
      position: "absolute",
      top: 0,
      left: `${position}%`,
      width: "30px", // Smaller slider for mobile
      height: "100%",
      transform: "translateX(-50%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "ew-resize",
      zIndex: 3,
    },
    sliderIcon: {
      width: "30px",
      height: "30px",
      padding:"20px" ,
      backgroundColor: "white",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
    },
    label: {
      position: "absolute",
      padding: "0.3rem 0.7rem", // Smaller padding for mobile
      backgroundColor: "#8B7355",
      color: "white",
      fontSize: "0.7rem",
      letterSpacing: "0.1em",
      zIndex: 4,
    },
    beforeLabel: {
      left: "0.5rem",
      bottom: "0.5rem",
    },
    afterLabel: {
      right: "0.5rem",
      bottom: "0.5rem",
    },
  };

  return (
    <div className="container py-5">
      <header className="text-center mb-3">
        <div className="text-muted mb-2" style={{ letterSpacing: "0.1em" }}>
          BEFORE AND AFTER MAGIC
        </div>
        <h1 className="font-weight-bold mb-4" style={{ fontSize: "2rem" }}> {/* Adjust font size for mobile */}
          Witness The Design Evolution
        </h1>
        <nav className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {Object.keys(images).map((label, i) => (
            <button
              key={label}
              className={`btn ${
                selectedCategory === label ? "btn-primary" : "btn-outline-primary"
              } d-flex align-items-center gap-2`}
              onClick={() => setSelectedCategory(label)}
            >
              <i className={`bi ${["bi-house", "bi-building", "bi-lightbulb", "bi-palette"][i]}`} />
              {label}
            </button>
          ))}
        </nav>
      </header>

      <div
        ref={containerRef}
        style={styles.container}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        <div style={styles.beforeImage} />
        <div style={styles.afterImage} />

        <div style={styles.slider}>
          <div style={styles.sliderIcon} >
            <i className="bi bi-arrows-angle-expand" />Drag
          </div>
        </div>

        <div style={{ ...styles.label, ...styles.beforeLabel }}>BEFORE</div>
        <div style={{ ...styles.label, ...styles.afterLabel }}>AFTER</div>
      </div>
    </div>
  );
}
