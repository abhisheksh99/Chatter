import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaArrowRight } from 'react-icons/fa';
import GenderCheckbox from './GenderCheckbox';
import useSignup from '../hooks/useSignup';


const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const { loading, signup } = useSignup();

    const handleCheckBoxChange = (gender) => {
        setInputs((prevInputs) => ({ ...prevInputs, gender }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div className="flex items-center justify-center min-h-[90vh] min-w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            <div className="w-full max-w-3xl p-12 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl">
                <h1 className="text-5xl font-extrabold text-center text-white mb-10">
                    Sign Up for <span className="text-yellow-300">ChatApp</span>
                </h1>
                <form className="space-y-8" onSubmit={submitHandler}>
                    <div className="relative">
                        <FaUser className="absolute top-4 left-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full pl-12 pr-4 py-3 bg-white bg-opacity-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300 text-white placeholder-gray-300"
                            required
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>
                    <div className="relative">
                        <FaUser className="absolute top-4 left-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full pl-12 pr-4 py-3 bg-white bg-opacity-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300 text-white placeholder-gray-300"
                            required
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>
                    <div className="relative">
                        <FaLock className="absolute top-4 left-4 text-gray-400" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full pl-12 pr-4 py-3 bg-white bg-opacity-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300 text-white placeholder-gray-300"
                            required
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div className="relative">
                        <FaLock className="absolute top-4 left-4 text-gray-400" />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full pl-12 pr-4 py-3 bg-white bg-opacity-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300 text-white placeholder-gray-300"
                            required
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>
                    <div>
                        <GenderCheckbox onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender} />
                    </div>
                    <div className="flex justify-between items-center">
                        <Link to="/login" className="text-sm text-white hover:text-yellow-300 transition duration-300">
                            Already have an account? Login
                        </Link>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300 flex items-center justify-center space-x-2"
                        disabled={loading}
                    >
                        <span>{loading ? 'Signing Up...' : 'Sign Up'}</span>
                        <FaArrowRight />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
