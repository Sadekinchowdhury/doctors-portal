import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUser = () => {


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users', {


            });
            const data = await res.json()
            refetch()
            return data;

        }
    })

    console.log(users)
    const haNdlAdminId = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin make successfully')
                }
                console.log(data)
                refetch()
            })
    }

    return (
        <div className=''>


            <div className="">
                <table className="table">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className=''>

                        {
                            users.length &&
                            users.map((user, i) =>
                                <tr
                                    key={user._id}
                                    user={user}
                                >
                                    <th>{i + 1}</th>
                                    <td> {user.name} </td>
                                    <td> {user.email} </td>

                                    <td>{user?.role !== 'admin' && <button onClick={() => haNdlAdminId(user._id)} className='btn btn-xs btn-primary'>make admin</button>} </td>

                                    <td> <button className='btn btn-xs btn-warning' >Delete</button> </td>
                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;