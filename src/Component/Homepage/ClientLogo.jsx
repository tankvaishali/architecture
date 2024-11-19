import React from 'react';

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
        <div className="my-5 clientlogo_bgImage">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center p-0 p-lg-4">
                    <div className="col-12 col-lg-4 p-4">
                        <div className="about-section justify-content-start">
                            <div className="line"></div>
                            <span>Our Partners</span>
                        </div>
                        <h1 className="Discover text-dark">A Legacy of Excellence with Premium Clients</h1>
                        <p className="pera">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur eligendi inventore officiis nesciunt, voluptates quae aspernatur, quaerat, dicta provident ipsum maiores debitis atque dignissimos dolorem.
                        </p>
                    </div>
                    <div className="col-12 col-lg-8 p-5">
                        <div className="logo-slider">
                            <div className="slide-track">
                                {logoRows.map((logo, index) => (
                                    <div className="slide" key={index}>
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