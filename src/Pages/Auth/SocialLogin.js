import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const SocialLogin = ({ error }) => {
    const [signInWithGoogle, u, loading, gerror] = useSignInWithGoogle(auth);
    return (
        <div>
            <p className='text-center text-red-500'>{error?.message || gerror?.message}</p>
            <div class="divider">OR</div>
            <button class="btn btn-outline w-full" onClick={() => signInWithGoogle()}>CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default SocialLogin;