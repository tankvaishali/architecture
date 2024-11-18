"use client";

import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  {
    id: 1,
    title: "Geometric Wonder",
    architect: "Zaha Hadid",
    year: "2023",
    description: "A masterpiece of parametric design, pushing the boundaries of form and function.",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Urban Oasis",
    architect: "Bjarke Ingels",
    year: "2024",
    description: "Blending nature with urban living, creating a sustainable haven in the city center.",
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww",
  },
];

export default function Homeslider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setProgress(0);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    setProgress(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          goToNext();
          return 0;
        }
        return prevProgress + 1;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <TransitionGroup>
        <CSSTransition key={currentIndex} classNames="slide" timeout={800}>
          <div className="carousel-slide">
            <div className="carousel-image-container">
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="carousel-image"
              />
            </div>
            <div className="carousel-content">
              <Container>
                <Row className="justify-content-end">
                  <Col md={8} lg={6}>
                    <h2 className="carousel-title">{projects[currentIndex].title}</h2>
                    <p className="carousel-subtitle">
                      {projects[currentIndex].architect} | {projects[currentIndex].year}
                    </p>
                    <p className="carousel-description">{projects[currentIndex].description}</p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <div className="carousel-controls">
        <Button variant="outline-light" onClick={goToPrevious} className="carousel-control">
          <ChevronLeft size={24} />
        </Button>
        <Button variant="outline-light" onClick={goToNext} className="carousel-control">
          <ChevronRight size={24} />
        </Button>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          height: 84vh;
          overflow: hidden;
          background-color: #1a1a1a;
        }

        .carousel-image-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease, filter 0.8s ease;
        }

        .carousel-slide:hover .carousel-image {
          transform: scale(1.05);
          filter: blur(5px);
        }

        .carousel-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          color: white;
          z-index: 2;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
        }

        .carousel-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          transform: translateX(-20px);
          opacity: 0;
          animation: fadeInUp 1s forwards;
        }

        .carousel-subtitle {
          font-size: 1.2rem;
          font-weight: 400;
          margin-bottom: 1rem;
          color: #bbb;
          transform: translateX(-20px);
          opacity: 0;
          animation: fadeInUp 1s 0.3s forwards;
        }

        .carousel-description {
          font-size: 1rem;
          line-height: 1.6;
          transform: translateX(-20px);
          opacity: 0;
          animation: fadeInUp 1s 0.5s forwards;
        }

        .carousel-controls {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1rem;
          z-index: 10;
        }

        .carousel-control {
          background-color: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 50%;
          padding: 0.5rem;
          transition: all 0.3s;
        }

        .carousel-control:hover {
          background-color: rgba(255, 255, 255, 0.3);
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
        }

        .progress-bar-container {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background-color: rgba(255, 255, 255, 0.2);
        }

        .progress-bar {
          height: 100%;
          background-color: white;
          transition: width 0.1s linear;
        }

        /* New Slide Transition Effect */
        .slide-enter {
          opacity: 0;
          transform: translateX(100%);
        }

        .slide-enter-active {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 800ms, transform 800ms;
        }

        .slide-exit {
          opacity: 1;
          transform: translateX(0);
        }

        .slide-exit-active {
          opacity: 0;
          transform: translateX(-100%);
          transition: opacity 800ms, transform 800ms;
        }

        /* Keyframes for Text Fade In */
        @keyframes fadeInUp {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
