import React from 'react';
import testo from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/icons/quote.svg'
import people2 from '../../../assets/icons/quote.svg'
import people3 from '../../../assets/icons/quote.svg'
import Myreviw from './Myreviw';


const Testominal = () => {

    const Myrevew = [
        {
            _id: 1,
            name: 'rumel',
            img: people1,
            rivew: 'i am happy for apsodif asopdifsf',
            location: 'californina'
        },
        {
            _id: 2,
            name: 'rumel',
            img: people2,
            rivew: 'i am happy for apsodif asopdifsf',
            location: 'californina'
        },
        {
            _id: 3,
            name: 'rumel',
            img: people3,
            rivew: 'i am happy for apsodif asopdifsf',
            location: 'californina'
        }
    ]


    return (
        <section className='mt-11'>
            <div className='flex  justify-between'>
                <div>
                    <h1 className='text-3xl text-orange-600'>Testominal</h1>
                </div>
                <div>
                    <figure>
                        <img className='w-24 lg:w-48' src={testo} alt="" />
                    </figure>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    Myrevew.map(rev => <Myreviw
                        key={rev._id}
                        rev={rev}
                    >

                    </Myreviw>
                    )
                }
            </div>
        </section>
    );
};

export default Testominal;