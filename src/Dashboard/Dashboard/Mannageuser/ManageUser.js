import { useQuery } from '@tanstack/react-query';
import { da } from 'date-fns/locale';
import { React, useState } from 'react';
import toast from 'react-hot-toast';
import Confirmmodal from '../../modalconfirem/confirmmodal';

const ManageUser = () => {
    const [deletemodal, setDeletemodal] = useState(null)

    const canCellebtn = () => {
        setDeletemodal(null)
    }

    const delteDoctor = doc => {
        fetch(`http://localhost:5000/doctors/${doc._id}`, {
            method: 'DELETE',
            headers: {

            }
        })

            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    refetch()
                    toast.success('Yeahoo deleted successfully')
                }
                console.log(data)
            })
    }
    const { data: doctors = [], refetch } = useQuery({

        queryKey: ['doctors'],
        queryFn: async () => {

            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }

                })


                const data = await res.json()

                return data;

            }
            catch (errror) {

            }
        }


    })

    return (
        <div className="w-full">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Specialiy</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {
                        doctors.map((doc, i) =>
                            <tr key={doc._id}>
                                <th>{i + 1}</th>

                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={doc.img} alt='' />
                                        </div>
                                    </div>


                                </td>
                                <td>{doc.name}</td>
                                <td>{doc.email}</td>
                                <td>{doc.special}</td>
                                <td>

                                    < label onClick={() => setDeletemodal(doc)} htmlFor="deletemodal" className="btn btn-xs btn-error">Delete</label>
                                </td>


                            </tr>
                        )
                    }

                </tbody>
            </table>
            {
                deletemodal && <Confirmmodal
                    title={`Are you sure to delete `}
                    message={`if you delete ${deletemodal.special} you can not un done it `}
                    canCellebtn={canCellebtn}
                    delteDoctor={delteDoctor}
                    delteData={deletemodal}

                ></Confirmmodal>
            }
        </div>
    );
};

export default ManageUser;