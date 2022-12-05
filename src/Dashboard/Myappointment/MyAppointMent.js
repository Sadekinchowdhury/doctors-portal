import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Button } from 'react-day-picker';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovide';

const MyAppointMent = () => {

    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/booking?email=${user?.email}`



    const { data: booking = [], refetch } = useQuery({

        queryKey: ['booking', user?.email],

        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }

            })
            const data = await res.json()
            return data;
            console.log(data)
            return data;

        }


    })
    return (
        <div>
            <h1 className='mb-7 text-3xl text-orange-600 font-bold'>My appointment </h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {booking.length &&
                            booking?.map((book, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{book.patiant}</td>

                                <td>{book.treatment}</td>
                                <td>{book.selectedDate}</td>
                                <td>{book.slot}</td>

                                <td>
                                    {
                                        book.price && !book.paid && <Link to={`/dashboard/payment/${book._id}`}><button className='btn btn-primary'>
                                            pay
                                        </button></Link>
                                    }
                                    {
                                        book.price && book.paid && <button
                                            className='btn btn-primary btn-disabled text-green-500'>
                                            Paid
                                        </button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointMent;