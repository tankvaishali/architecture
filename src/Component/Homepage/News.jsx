import { ArrowUpRight } from 'lucide-react'
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import videolink from "../../Assets/Video/contact_architecture.mp4"


export default function News() {
    const newsItems = [
        {delay:200,
            category: "NEWS 1",
            date: "JUNE 2023",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {delay:400,
            category: "NEWS 2",
            date: "JUNE 2023",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {delay:600,
            category: "NEWS 3",
            date: "JUNE 2023",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        }
    ]

    return (
        <div className=" newsbg py-3 py-lg-5 overflow-hidden" >
               <video
            className="news_video_bg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videolink} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
            <div className="container">
                <section className="news-section">
                    <div className="news-content">
                        <div className="news-header"               data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                            <h1>Latest<br />News & Blogs</h1>
                            <p          className='text-white'     data-aos="fadfe-down" data-aos-duration="1500" data-aos-once="true">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button
                                          data-aos="fade-right" data-aos-duration="1500" data-aos-once="true"
                                type="button"
                                className="bg_button text-white Inter fs-6 ps-4 pe-5 py-2 fw-bold  position-relative">
                                Contact Us
                                <span className="bg_iconbtn py-3 px-2 text-dark position-absolute end-0">
                                    <HiOutlineArrowSmRight className="fs-5" />
                                </span>
                            </button>
                        </div>
                        <div className="news-list">
                            {newsItems.map((item, index) => (
                                <a key={index} href="#" className="news-item" data-aos="fade-left" data-aos-duration="1500" data-aos-once="true" data-aos-delay={item.delay}>
                                    <div>
                                        <span className="text-white fw-bold fs-5 me-4">{item.category}</span>
                                        <span className="fs-6 text-white fw-bold fs-5">{item.date}</span>
                                    </div>
                                    <div className="news-item-content mt-2">
                                        <h2 className='fs-6 lh-lg category'>{item.title}</h2>
                                        <ArrowUpRight className="arrow-icon text-white" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}