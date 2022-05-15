import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../firebase.init";


const useToken = (user) => {
    const [token, setToken] = useState('')

    useEffect(() => {
        if (user) {
            const userInfo = { email: user?.email, name: user?.displayName, photoURL: user?.photoURL };

            fetch(`http://localhost:5000/user/${user?.email}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            }).then(res => res.json())
                .then(({ token }) => {
                    localStorage.setItem('access_token', token)
                    setToken(token)
                })
        }
    }, [user])
    return { token }
};

export default useToken;