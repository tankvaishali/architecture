import { ArrowUpRight } from 'lucide-react'
import { HiOutlineArrowSmRight } from 'react-icons/hi'

export default function News() {
    const newsItems = [
        {
            category: "NEWS 1",
            date: "JUNE 2023",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            category: "NEWS 2",
            date: "JUNE 2023",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            category: "NEWS 3",
            date: "JUNE 2023",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        }
    ]

    return (
        <div className="awardbg" style={{ boxShadow: " inset 0px 0px 1500px 1000px #5a717c70" }}>
            <div className="container">
                <section className="news-section">
                    <div className="news-content">
                        <div className="news-header">
                            <h1>Latest<br />News</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button
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
                                <a key={index} href="#" className="news-item">
                                    <div>
                                        <span className="category fw-bold fs-6 me-4">{item.category}</span>
                                        <span className="fs-6">{item.date}</span>
                                    </div>
                                    <div className="news-item-content mt-2">
                                        <h2 className='fs-6 lh-lg'>{item.title}</h2>
                                        <ArrowUpRight className="arrow-icon" />
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