import React, { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';
import { toast } from 'react-hot-toast';

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const { data } = await axios.post("http://localhost:3000/api/auth/logout", {}, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            localStorage.removeItem("userInfo");
            setUser(null);

            toast.success('Logged out successfully');
            return data;
        } catch (error) {
            toast.error(error.response?.data?.message || 'Logout failed');
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
};

export default useLogout;