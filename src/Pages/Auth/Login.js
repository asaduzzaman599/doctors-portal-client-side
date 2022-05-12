import React from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import Loading from '../Shared/Common/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword, u, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [user] = useAuthState(auth)
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    if (loading) {
        return (<Loading></Loading>)
    }
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="md:w-2/6  w-5/6 card  shadow-2xl">

                    <div class="  w-full  bg-base-100 card-body">
                        <h2 class="text-3xl text-center text-accent font-semibold">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)} class="">
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
                                <input type="submit" class="btn btn-accent" value="Login" />
                            </div>
                        </form>
                        <p className='text-center'>New to Doctors Portal? <Link to='/signup' className='text-secondary'>Create new account</Link></p>


                        <SocialLogin error={error}></SocialLogin>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;