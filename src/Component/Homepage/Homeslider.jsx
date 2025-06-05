

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RxDoubleArrowRight } from 'react-icons/rx';

const images = [
  { image: 'https://www.mindscapedesign.co.in/slider/big_img/86956.jpeg', name: 'commercial', link: '/project/commercial' },
  { image: 'https://www.mindscapedesign.co.in/slider/big_img/ADARSHBHAI990.jpeg', name: 'residental', link: '/project/residental' },
  // { image: 'https://www.mindscapedesign.co.in/slider/big_img/Screenshot%202024-07-18%20140911695.png', name: 'hospitality', link: '/project/hospitality' },
  { image: 'https://www.mindscapedesign.co.in/slider/big_img/IGI802.jpeg', name: 'interior_design', link: '/project/interior_design' },
  { image: 'https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?ga=GA1.1.1634177100.1727245223&semt=ais_hybrid', name: 'upcoming', link: '/project/upcoming' },
];

function Homeslider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();  // Move to the next slide
    }, 3000); // 3000ms = 3 seconds

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixedh" style={{ marginTop: '-92px' }}>
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ''}`}
          >
            <img
              src={image.image}
              alt={`House by the river - View ${index + 1}`}
              className="image w-100 object-fit-cover"
              style={{ boxShadow: 'inset 0px 0px 1500px 100px rgba(3, 1, 1, 0.5)' }}
            />
            <div className="breadcrumb justify-content-sm-start justify-content-center">
              <span><Link to={'/project'} className='text-decoration-none project'>PROJECTS</Link> </span>
              <h1 className='px-2'><RxDoubleArrowRight /> <Link to={image.link} className='text-decoration-none text-light'>{image.name}</Link></h1>
            </div>
          </div>
        ))}
      </div>

      <div className="navigation">
        <button
          onClick={goToPrevious}
          className="navButton d-sm-block d-none"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={goToNext}
          className="navButton d-sm-block d-none"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default Homeslider;
