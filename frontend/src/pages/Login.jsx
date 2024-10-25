import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaArrowRight } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-[90vh] min-w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-3xl p-12 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl">
        <h1 className="text-5xl font-extrabold text-center text-white mb-10">
          Welcome to <span className="text-yellow-300">ChatApp</span>
        </h1>
        <form className="space-y-8">
          <div className="relative">
            <FaUser className="absolute top-4 left-4 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-12 pr-4 py-3 bg-white bg-opacity-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300 text-white placeholder-gray-300"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute top-4 left-4 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 bg-white bg-opacity-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300 text-white placeholder-gray-300"
            />
          </div>
          <div className="flex justify-between items-center">
            <Link
              to="/signup"
              className="text-sm text-white hover:text-yellow-300 transition duration-300"
            >
               Don't have an account? Sign up
            </Link>
          </div>
          <button type="submit" className="w-full py-3 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300 flex items-center justify-center space-x-2">
            <span>Login</span>
            <FaArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;