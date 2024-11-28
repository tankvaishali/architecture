import React from 'react';
import MainHeadings from '../../HOC/MainHeadings';

function ClientLogo() {
    const logos = [
        'logo-1-removebg-preview.png',
        'logo-2.jpg',
        'logo-3-removebg-preview.png',
        'logo-4.png',
        'logo-5-removebg-preview.png',
        'logo-6.jpeg',
        'logo-7.jpeg',
        'logo-8-removebg-preview.png',
        'logo-9-removebg-preview.png',
    ];

    const logoRows = [...logos, ...logos];

    return (
        <div className="py-5 clientlogo_bgImage">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center p-0 p-lg-4">
                    <div className="col-12 col-lg-4 p-4" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
                       
                      <div><MainHeadings title={"A Legacy of Excellence with Premium Clients"} name={"OUR PARTNERS"}/></div>
                        <p className="pera" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur eligendi inventore officiis nesciunt, voluptates quae aspernatur, quaerat, dicta provident ipsum maiores debitis atque dignissimos dolorem.
                        </p>
                    </div>
                    <div className="col-12 col-lg-8 p-2 p-lg-4 ">
                        <div className="logo-slider">
                            <div className="slide-track">
                                {logoRows.map((logo, index) => (
                                    <div className="slidelogo" key={index}>
                                        <img
                                            src={require(`../../Assets/Image/Logo/${logo}`)}
                                            alt={`Client Logo ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientLogo;