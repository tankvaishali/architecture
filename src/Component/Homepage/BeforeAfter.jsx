"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HiOutlineArrowSmRight } from "react-icons/hi";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const [selectedCategory, setSelectedCategory] = useState("Residential");

  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const images = {
    Commercial: {
      before: "https://wdtwelcome.wpengine.com/wp-content/uploads/2024/07/After-2.webp",
      after: "https://wdtwelcome.wpengine.com/wp-content/uploads/2024/07/Before-2.webp",
    },
   
    "Light Design": {
      before: "https://wdtwelcome.wpengine.com/wp-content/uploads/2024/07/After-4.webp",
      after: "https://wdtwelcome.wpengine.com/wp-content/uploads/2024/07/Before-4.webp",
    },
    Residential: {
      before: "https://img.freepik.com/free-photo/shot-panoramic-composition-living-room_23-2150315646.jpg?t=st=1731407482~exp=1731411082~hmac=6152e8a429c6f0d0fd715cb2f17713bdadd08ddd0425b423c1fbdc65a77d29ea&w=1060",
      after: "https://img.freepik.com/free-photo/shot-panoramic-composition-living-room_23-2150315647.jpg?t=st=1731407518~exp=1731411118~hmac=0bf957a4804f89f5304c04cc6933fa278b6d7b825a956a41814acf9159453283&w=1060",
    },
    "Art Deco": {
      before: "https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/projects-8-850x520.jpg",
      after: "https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/projects-11-850x520.jpg",
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
      maxHeight: "700px",
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
      objectFit: "fill"
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
      padding: "20px",
      backgroundColor: "white",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
    },
    label: {
      position: "absolute",
      //   padding: "0.3rem 0.7rem", // Smaller padding for mobile
      backgroundColor: "var(--theme--)",
      color: "white",

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
    <div className="container py-3 mb-5">
      <div className="my-3">
        <div class="about-section justify-content-center " data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
          <div class="line"></div>
          <span>BEFORE AND AFTER MAGIC</span>
        </div>
        <h1 class=" Discover  text-dark py- text-center" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">Witness The Design Evolution</h1>
      </div>
      <header className="text-center ">



        <nav className=" d-block d-lg-flex mx-auto flex-wrap justify-content-center gap-3 gap-lg mb-5 pb-3 pb-lg-4">
          {Object.keys(images).map((label, i) => (
            <button
              key={label}
              type="button"

              className={` bg_button text-white Inter  ps-4 pe-5 py-2 my-2  position-relative ${selectedCategory === label ? "btn-primary" : "btn-outline-primary"
                } d-flex align-items-center  `}
              onClick={() => setSelectedCategory(label)}
              
            >
              <span className="bg_iconbtn py-3 px-2 text-dark position-absolute end-0">
                <HiOutlineArrowSmRight className="fs-5" />
              </span>
              {/* <i className={`bi ${["bi-house", "bi-building", "bi-lightbulb", "bi-palette"][i]}`} /> */}
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
        className="w-100"
                      data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true"
      >
        <div style={styles.beforeImage} />
        <div style={styles.afterImage} />
        <div style={styles.slider}>
          <div style={styles.sliderIcon} >
            <i className="bi bi-arrows-angle-expand shadow-lg" />Drag
          </div>
        </div>

        <div className="fw-bold p-2" style={{ ...styles.label, ...styles.beforeLabel }}>BEFORE</div>
        <div className="fw-bold p-2" style={{ ...styles.label, ...styles.afterLabel }}>AFTER</div>
      </div>
    </div>
  );
}
