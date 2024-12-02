import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'
import { Link } from 'react-router-dom'

function MainSection(text) {
    return (
        <div className="p-0 container-fluid container-xxxl">
            <div className='maincontentimg'>
                <div className={`mainsection d-flex align-items-center ${text.classs}`}>
                    <div className='container'>
                        <div className="bg-dark border border-5 border-light col-lg-5 col-md-8 col-9 d-flex align-items-center justify-content-center text-center mainsecbg">
                            <div className='text-light'>
                                <h1>{text.text}</h1>
                                <p><Link to={"/"} className='lendingTittle text-white text-decoration-none'>Home</Link> <MdDoubleArrow /> {text.text} <MdDoubleArrow /> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSection