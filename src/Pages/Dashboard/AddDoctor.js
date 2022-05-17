import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';
import DashBoardTitle from '../Shared/Common/DashBoardTitle';
import Loading from '../Shared/Common/Loading';

const AddDoctor = () => {

    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { data: treatments, isLoading } = useQuery('treatmentName', () => (fetch('http://localhost:5000/treatmentname').then(res => res.json())))

    const [user, loading] = useAuthState(auth)


    useEffect(() => {

    }, [])
    const onSubmit = async ({ name, email, specialization }) => {

        // console.log(data)
        const formatData = new FormData()
        const fileField = document.querySelector('input[type="file"]')

        formatData.append('image', fileField.files[0])
        const imgBBUrl = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGEBB_APIKEY}`
        fetch(imgBBUrl, {
            method: 'POST',
            body: formatData
        })
            .then(res => res.json())
            .then(({ data: { url } }) => {
                const doctor = {
                    name,
                    email,
                    specialization,
                    img: url
                }
                fetch(`http://localhost:5000/doctor?email=${user?.email}`, {
                    method: 'POST',
                    headers: {
                        'content-type': "application/json",
                        authorization: `Bearer ${localStorage.getItem('access_token')}`
                    },
                    body: JSON.stringify(doctor)
                })
                    .then(res => res.json())
                    .then(({ insertedId }) => {
                        if (insertedId) {
                            toast.success(`Doctor : ${name} added successfully`)
                        } else {
                            toast.error('something is Wrong')
                        }
                    }).catch(error => console.log(error))
            })
        console.log()



    }

    if (isLoading || loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="md:w-4/6  card ">

                    <div className="  w-full  bg-base-100 card-body">
                        <h2 className="text-3xl text-center text-accent font-semibold">Doctor' Info</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span class="block mb-2 text-sm font-medium text-gray-500" >Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span class="block mb-2 text-sm font-medium text-gray-500" >Email</span>
                                </label>
                                <input type="text" placeholder="Your Email" className="input input-bordered"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is required"
                                        },
                                        pattern: {
                                            value: /^\S+@\S+\.\S+$/,
                                            message: 'Invalid email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span class="block mb-2 text-sm font-medium text-gray-500" >Specialization</span>
                                </label>
                                <select class="select select-bordered w-full max-w-xs" {...register("specialization", {
                                    required: {
                                        value: true,
                                        message: "Specialization is required"
                                    },

                                })}>

                                    {
                                        treatments?.map(({ name, _id }) => <option key={_id}>{name}</option>)
                                    }
                                </select>

                                <label className="label">
                                    {errors.specialization?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                </label>
                            </div>
                            <div className="form-control">

                                <label class="block mb-2 text-sm font-medium text-gray-500" for="file_input">Upload file</label>
                                <input type='file' class=" border-2 w-full max-w-xs outline-hidden file:but" {...register("image", {
                                    required: {
                                        value: true,
                                        message: "Image is required"
                                    },

                                })}>
                                </input>

                                <label className="label">
                                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}

                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-accent" value="Add" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;