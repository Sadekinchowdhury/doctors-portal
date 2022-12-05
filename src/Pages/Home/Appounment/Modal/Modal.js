import { format } from 'date-fns';

import { React, useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Context/Authprovide';

const Modal = ({ selected, tretment, setTreatment, refetch }) => {

    const { slots, name: treatmentName, price } = tretment

    const { user } = useContext(AuthContext)
    const date = format(selected, 'PP')

    const handSubmit = event => {
        console.log(event)
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const name = form.name.value;
        const phone = form.phone.value;
        const slot = form.slot.value;


        const booking = {
            selectedDate: date, slot, phone, email, price,
            treatment: treatmentName,
            patiant: name,
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('successfully added')
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
                console.log(data)
            })
        console.log(booking)
    }

    return (

        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>


                    <form onSubmit={handSubmit}>
                        <input type="text" disabled value={selected} className="input w-full mt-10 input-bordered" />
                        <select name='slot' className="select select-bordered w-full mt-10">

                            {
                                slots.map(slot =>
                                    <option value={slot}>
                                        {slot}

                                    </option>
                                )
                            }
                        </select>

                        <input type="text" name='name' defaultValue={user?.dislplayName} placeholder="name" className="input w-full mt-10   input-bordered " />

                        <input type="email" name='email' defaultValue={user?.email} readOnly disabled placeholder="email" className="input w-full mt-10   input-bordered " />

                        <input type="number" name='price' defaultValue={price} readOnly disabled placeholder="price" className="input w-full mt-10  input-bordered " />



                        <input type="text" name='phone' placeholder="phone" className="input w-full mt-10   input-bordered " />



                        <input className='w-full btn-accent mt-10' type="submit" value="submit" />
                    </form>
                </div>
            </div></>
    );
};

export default Modal;