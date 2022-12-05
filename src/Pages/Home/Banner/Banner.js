import React from 'react';
import img1 from '../../../assets/images/chair.png'
const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img1} className="lg:w-1/2 max-w-sm rounded-lg shadow-2xl" alt='' />

                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>


                    <button className="btn bg-gradient-to-r from-primary to-secondary">Get Started</button>

                </div>
            </div>
        </div>
    );
};

export default Banner;