import React from 'react';

import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Testominal from '../Tesstominl/Testominal';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Info></Info>

            <Testominal></Testominal>
        </div>
    );
};

export default Home;