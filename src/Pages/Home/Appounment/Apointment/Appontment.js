import React, { useState } from 'react';
import AppointmentBanner from '../AppoinmentBanner/AppointmentBanner';
import ApointmentLast from '../appointmentlast/ApointmentLast';

const Appontment = () => {
    const [selected, setselected] = useState(new Date())
    return (
        <div>
            <AppointmentBanner
                selected={selected}
                setselected={setselected}
            ></AppointmentBanner>

            
            <ApointmentLast

                selected={selected}
            ></ApointmentLast>
        </div>
    );
};

export default Appontment;