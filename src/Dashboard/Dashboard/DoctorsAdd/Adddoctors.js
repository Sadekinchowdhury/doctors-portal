import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';

const Adddoctors = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()

    const imageHostkeyk = process.env.REACT_APP_IMG_KEY


    const { data: special = [] } = useQuery({
        queryKey: ['special'],
        queryFn: async () => {

            const res = await fetch('http://localhost:5000/appointments')
            const data = await res.json()
            return data;
        }

    })






    const handlAdddoctors = data => {

        // console.log(data.img.FileList[0])
        const image = data.img[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostkeyk}`
        fetch(url, {
            method: 'POST',
            body: formData


        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                }
                const doctors = {
                    name: data.name,
                    email: data.email,
                    special: data.special,
                    img: imgData.data.url
                }
                fetch('http://localhost:5000/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctors)


                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)

                        toast.success('doctors added successfully')

                    })

            })

    }


    return (
        <div className=' flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-4xl text-green-700 font-bold text-center'>Add doctors</h1>
                <form onSubmit={handleSubmit(handlAdddoctors)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">

                            <span className="label-text">Name</span></label>

                        <input type="text" {...register("name", {

                        })} className="input input-bordered w-full max-w-xs" />


                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">

                            <span className="label-text">email</span></label>

                        <input type="email" {...register("email", {
                            required: 'email is required'
                        })} className="input input-bordered w-full max-w-xs" />


                    </div>
                    <select
                        {...register('special')}
                        className="select mt-6 mb-6 select-bordered w-full max-w-xs">


                        {
                            special.map(spa =>
                                <option
                                    key={spa._key}
                                    spa={spa}
                                >
                                    {spa.name}

                                </option>

                            )
                        }



                    </select>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">

                            <span className="label-text">Photo</span></label>

                        <input type="file" {...register("img", {
                            required: 'img is required'
                        })} className="input input-bordered w-full max-w-xs" />


                    </div>

                    <input className='btn btn-accent w-full' type="submit" />

                </form>


            </div>
        </div>
    );
};

export default Adddoctors;