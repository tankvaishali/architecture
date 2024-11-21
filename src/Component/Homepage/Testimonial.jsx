import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";

function Testimonial() {
  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, suscipit. Repellendus, voluptatem! Magni pariatur reprehenderit praesentium ipsa ipsam, facere atque illum nulla error dolore omnis. Quos, omnis. Quisquam, rem maxime, voluptas fuga quia ipsa asperiores perferendis id aliquam laborum iusto sapiente cum atque est tempore repudiandae at assumenda, necessitatibus cumque!",
      name: "parishi ",
      title: "LOREM",
      img: "https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/avatar_003.png",
      logo: "https://www.mindscapedesign.co.in/testimonial/big_img/evoq703.jpeg",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, suscipit. Repellendus, voluptatem! Magni pariatur reprehenderit praesentium ipsa ipsam, facere atque illum nulla error dolore omnis. Quos, omnis. Quisquam, rem maxime, voluptas fuga quia ipsa asperiores perferendis id aliquam laborum iusto sapiente cum atque est tempore repudiandae at assumenda, necessitatibus cumque!",
      name: "Fine Star",
      title: "LOREM",
      img: "https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/avatar_002.png",
      logo: "https://www.mindscapedesign.co.in/testimonial/big_img/fine%20star356.jpeg",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, suscipit. Repellendus, voluptatem! Magni pariatur reprehenderit praesentium ipsa ipsam, facere atque illum nulla error dolore omnis. Quos, omnis. Quisquam, rem maxime, voluptas fuga quia ipsa asperiores perferendis id aliquam laborum iusto sapiente cum atque est tempore repudiandae at assumenda, necessitatibus cumque!",
      name: "Asian Star",
      title: "LOREM",
      img: "https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/avatar_003.png",
      logo: "https://www.mindscapedesign.co.in/testimonial/big_img/evoq703.jpeg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
  };

  return (
    <>
      <div className="my-5">
        <div className="testi_bg">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center align-content-center py-3">
              <div className=" col-12 col-lg-6 p-3">
                <div className="h-100 d-flex">
                  <div className="sec1_imgtesti h-100">
                    <img
                      src={
                        "https://demo2.themelexus.com/kitchor/wp-content/uploads/2023/04/h8-image-9.jpg"
                      }
                      alt=""
                      className="img-fluid w-100"
                      data-aos="fade-right"
                      data-aos-duration="1800"
                      data-aos-once="true"
                    />
                    <div className="my-3 h-100">
                      <img
                        src={
                          "https://demo2.themelexus.com/kitchor/wp-content/uploads/2023/04/h8-gallery-1.jpg"
                        }
                        alt=""
                        className="img-fluid w-100"
                        data-aos="fade-right"
                        data-aos-duration="1800"
                        data-aos-once="true"
                      />
                    </div>
                  </div>
                  <div className="sectesti_img ms-3"  data-aos="zoom-in"
                        data-aos-duration="1800"
                        data-aos-once="true">
                    <img
                      src={
                        "https://demo2.themelexus.com/kitchor/wp-content/uploads/2023/04/h8-image-10.jpg"
                      }
                      alt=""
                      className="img-fluid w-100 h-100"
                    />
                  </div>
                </div>
                <div className="p-0 aboutslide_sec overflow-hidden">
                  <div className="aboutslider ms-auto m-0 overflow-hidden">
                    <div className="p-0 m-0 overflow-hidden border border-5 border-white">
                      <div className="slider_imageaboutus"  data-aos="zoom-in"
                        data-aos-duration="1800"
                        data-aos-once="true">
                        <img
                          src={
                            "https://demo2.themelexus.com/kitchor/wp-content/uploads/2023/04/h8-image-11.jpg"
                          }
                          alt=""
                          className="img-fluid w-100 h-100 object-fit-cover "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-100 col-12 col-lg-6 p-5">
                <div>
                  <div
                    className="about-section"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    <div className="line"></div>
                    <span>TESTIMONIAL</span>
                  </div>
                  <h1
                    className="Discover text-dark py-2"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    WHAT OUR CLIENT SAYS
                  </h1>
                </div>
                <Slider {...settings}>
                  {testimonials.map((testimonial, index) => (
                    <div
                      className="px-0 px-lg-5  py-3"
                      key={index}
                      data-aos="fade-left"
                      data-aos-duration="1500"
                      data-aos-once="true"
                    >
                      <div>
                        <FaQuoteLeft className="fs-1 text-secondary" />
                      </div>
                      <div className="py-4" style={{ textAlign: "justify" }}>
                        {testimonial.quote}
                      </div>
                      <div className="d-flex align-items-center align-content-center">
                        <div>
                          <img
                            src={testimonial.img}
                            alt={testimonial.name}
                            className="img-fluid rounded"
                          />
                        </div>
                        <div className="ms-3">
                          <h4 className="text-uppercase">{testimonial.name}</h4>
                          <div className="text-secondary text-capitalize">
                            {testimonial.title}
                          </div>
                        </div>
                        <div className="border border-1 border-dark p-1 rounded w-25 h-25 ms-auto m-1">
                          <img
                            src={testimonial.logo}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
