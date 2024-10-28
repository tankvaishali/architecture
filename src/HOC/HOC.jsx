import React from 'react'
import Header from './Header'
import Footer from './Footer'

function HOC(Content) {

    function hoccomponent() {
        return (
            <>
                <Header />
                <Content />
                <Footer />
            </>
        )
    }
    return hoccomponent
}


export default HOC