
import React from 'react';


const AppointmentOption = ({ appintmentoption, setTreatment }) => {
    const { name, slots, price } = appintmentoption

    console.log(appintmentoption)
    return (
        <div className="card  shadow-xl">

            <div className="card-body text-center">
                <h2 className="text-2xl text-lime-600 text-center font-bold">{name}</h2>
                <p>price {price}</p>
                <p className='text-red-600'>{slots.length > 0 ? slots[0] : 'try another day'}</p>
                <p className='font-bold'>{slots.length} {slots.length > 0 ? 'peaces' : 'peace'} Availabe</p>
                <div className="justify-center">

                    <label onClick={() => setTreatment(appintmentoption)} htmlFor="booking-modal" className="btn">Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;