import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'

function MainSection() {
    return (
        <div className='maincontentimg'>
            <div className='mainsection d-flex align-items-center '>
                <div className='container'>
                    <div className="bg-dark border border-5 border-light col-lg-5 col-md-8 col-9 d-flex align-items-center justify-content-center text-center mainsecbg">
                        <div className='text-light'>
                            <h1>ABOUT US</h1>
                            <p>home <MdDoubleArrow /> about us <MdDoubleArrow /> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSection