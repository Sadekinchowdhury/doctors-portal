
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckOutForm';





const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData()


    const { treatment, price, slot, selectedDate } = booking
    return (
        <div>
            <p className="text-4xl mt-7 text-orange-700">

                payment for {treatment}
            </p>
            <p>
                please pay <strong>{price}</strong> for {selectedDate} and {slot}
            </p>
            <div className='w-96 my-11'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;