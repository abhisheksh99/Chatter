import React, { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';
import { toast } from "react-hot-toast";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setUser } = useAuthContext();

    const login = async (username, password) => {
        const success = handleInputErrors({  username, password });
        if (!success) return;
        setLoading(true);
        try {
            const { data } = await axios.post("http://localhost:3000/api/auth/login", {username,password},
             
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                   
                }
            );
            console.log('Login response:', data);

            localStorage.setItem("userInfo", JSON.stringify(data));
            setUser(data);

            toast.success('Logged in successfully');
            return data;
        } catch (error) {
            toast.error(error.response?.data?.message || 'Login failed');
            throw error; 
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
};

export default useLogin;

function handleInputErrors({ username, password }) {
    if (!username || !password ) {
        toast.error('Please fill all the fields');
        return false;
    }

    if (password.length < 8) {
        toast.error('Password must be at least 8 characters');
        return false;
    }
    return true;
}