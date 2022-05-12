import React, { useEffect } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import Loading from '../Shared/Common/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword, u, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [user] = useAuthState(auth)
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    const from = location?.state?.from?.pathname || '/appointment';
    useEffect(() => {
        if (user) {
            navigate(from)
        }
    }, [user])
    if (loading) {
        return (<Loading></Loading>)
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="md:w-2/6  w-5/6 card  shadow-2xl">

                    <div className="  w-full  bg-base-100 card-body">
                        <h2 className="text-3xl text-center text-accent font-semibold">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
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
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Your Password" className="input input-bordered"
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
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-accent" value="Login" />
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