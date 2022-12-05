
import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { } from 'date-fns/locale';
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import AppointmentOption from './AppointmentOption';


const ApointmentLast = ({ selected }) => {
    // const [appointment, setAppointment] = useState([])
    const [tretment, setTreatment] = useState(null)

    const date = format(selected, 'PP')

    const { data: appointment = [], refetch } = useQuery({
        queryKey: ['appointment', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointment?date=${date}`, {

                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }

            })
            const data = await res.json();
            refetch()
            return data;
        }
    })
    // useEffect(() => {
    //     fetch('http://localhost:5000/appointment')
    //         .then(res => res.json())
    //         .then(data => setAppointment(data))
    // }, [])
    return (
        <section className='mt-9'>
            <div>
                <h1 className='text-center mb-8 text-4xl text-orange-600 py-3'> Availabe date on {format(selected, 'PP')}</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 '>
                {
                    appointment.length &&
                    appointment?.map(option => <AppointmentOption
                        key={option._id}
                        appintmentoption={option}
                        setTreatment={setTreatment}

                    >

                    </AppointmentOption>


                    )
                }
            </div>
            {
                tretment && <Modal
                    tretment={tretment}
                    refetch={refetch}
                    setTreatment={setTreatment}
                    selected={selected}

                ></Modal>
            }

        </section>
    );
};

export default ApointmentLast;