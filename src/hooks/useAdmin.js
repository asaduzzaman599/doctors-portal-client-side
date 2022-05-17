import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";


const useAdmin = () => {
    const [admin, setAdmin] = useState(false)
    const [user, loading] = useAuthState(auth)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (user) {
            fetch(`https://doctors-portal-asaduzzaman599.herokuapp.com/admin?email=${user?.email}`, {
                mathod: "GET",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                    setIsLoading(false)
                })
        }
    }, [user])
    return { admin, isLoading };
};

export default useAdmin;