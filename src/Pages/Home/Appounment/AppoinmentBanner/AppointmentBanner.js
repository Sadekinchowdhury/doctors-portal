import { React, useState } from 'react';
import chire from '../../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
const AppointmentBanner = ({ selected, setselected }) => {


    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
    return (
        <div className="hero my-6 flex justify-center">
            <div className="hero-content ">
                <img src={chire} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='mr-6'>
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setselected}
                        footer={footer}

                    />

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;