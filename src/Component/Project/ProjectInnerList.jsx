import React, { useState, useRef, useEffect } from 'react';
import HOC from '../../HOC/HOC';
import { useParams } from 'react-router-dom';
import { ProjectList } from './ProjectListItem';
import { Image } from 'react-bootstrap';
import Slider from 'react-slick';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { ArrowBigLeft, ArrowBigRight, Settings, X } from 'lucide-react';

function ProjectInnerList() {
    const { id, id2 } = useParams();
    const [currentIndex, setCurrentIndex] = useState(null);
    const thumbnailRefs = useRef([]);

    const selectedProject = ProjectList.find((item) => item.id === id);
    const selectedInnerData = selectedProject?.inner_data.find(
        (inner) => inner.id === id2
    );

    const openImageBox = (index) => {
        setCurrentIndex(index);
    };

    const closeImageBox = () => {
        setCurrentIndex(null);
    };

    const showPrevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : selectedInnerData?.img.length - 1
        );
    };

    const showNextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < selectedInnerData?.img.length - 1 ? prevIndex + 1 : 0
        );
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 10000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 2 },
            },
        ],
    };

    useEffect(() => {
        if (currentIndex !== null && thumbnailRefs.current[currentIndex]) {
            thumbnailRefs.current[currentIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
            });
        }
    }, [currentIndex]);

    const modalStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        zIndex: 1000,
    };

    const thumbnailContainerStyle = {
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        padding: '10px 5px',
        zIndex: 1001,
        display: 'flex',
        alignItems: 'center',
    };

    const thumbnailStyle = (isActive) => ({
        width: '90px',
        height: '70px',
        margin: '0 5px',
        border: isActive ? '2px solid #fff' : '2px solid transparent',
        cursor: 'pointer',
        objectFit: 'cover',
        flexShrink: 0
    });

    return (
        <>
            <div className="gallery-container my-5">
                <Slider {...settings} >
                    {selectedInnerData?.img.map((item, i) => (
                        <div key={i} className="gallery-item my-5">
                            <Image
                                src={item}
                                width={600}
                                height={600}
                                priority={item === '01'}
                                onClick={() => openImageBox(i)}
                                style={{ cursor: 'pointer' }}
                            />
                            <span className="gallery-number">0{i + 1}</span>
                            <button
                                className="view-button"
                                onClick={() => openImageBox(i)}
                            >
                                <button
                                    type="button"
                                    className="bg_button Inter text-white fs-6 ps-4 pe-5 py-2 fw-bold position-relative"
                                >
                                    View
                                    <span className="bg_iconbtn py-3 px-2 text-dark position-absolute end-0">
                                        <HiOutlineArrowSmRight className="fs-5" />
                                    </span>
                                </button>
                            </button>
                        </div>
                    ))}
                </Slider>
            </div>

            {currentIndex !== null && (
                <div className="modal text-center" style={modalStyle}>
                    <button
                        onClick={closeImageBox}
                        className="btn btn-secondary"
                        style={{ position: 'fixed', top: '6%', right: '3%' }}
                    >
                        <X />
                    </button>

                    <button
                        onClick={showPrevImage}
                        className="btn btn-secondary"
                        style={{ position: 'absolute', top: '50%', left: '5%' }}
                    >
                        <ArrowBigLeft />
                    </button>

                    <img
                        src={selectedInnerData?.img[currentIndex]}
                        alt={`Image ${currentIndex + 1}`}
                        style={{ maxWidth: '90%', maxHeight: '70%' }}
                    />

                    <button
                        onClick={showNextImage}
                        className="btn btn-secondary"
                        style={{ position: 'absolute', top: '50%', right: '5%' }}
                    >
                        <ArrowBigRight />
                    </button>

                    <div className="thumbnail-container justify-content-start justify-content-lg-center" style={thumbnailContainerStyle}>
                        {selectedInnerData?.img.map((thumbnail, index) => (
                            <img
                                key={index}
                                ref={(el) => (thumbnailRefs.current[index] = el)}
                                src={thumbnail}
                                alt={`Thumbnail ${index + 1}`}
                                style={thumbnailStyle(currentIndex === index)}
                                onClick={() => setCurrentIndex(index)} // Update modal image
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default HOC(ProjectInnerList);
