import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="md:w-2/6  w-5/6 card  shadow-2xl">

                    <div class="  w-full  bg-base-100 card-body">
                        <h2 class="text-3xl text-center text-accent font-semibold">Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)} class="">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" class="input input-bordered"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required"
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Your Email" class="input input-bordered"
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
                                <label class="label">
                                    {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Your Password" class="input input-bordered"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is required"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Password length not less then 6'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <input type="submit" class="btn btn-accent" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center'>Already have account? <Link to='/login' className='text-secondary'>Please Login</Link></p>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;