import React from 'react';

const GenderCheckbox = () => {
	return (
		<div className='flex justify-center space-x-8 mb-6'>
			<label className='flex items-center space-x-3 cursor-pointer'>
				<input
					type='radio'
					name='gender'
					value='Male'
					className='form-radio text-blue-500 focus:ring-blue-500 w-5 h-5'
				/>
				<span className='text-gray-200 font-medium text-lg'>Male</span>
			</label>
			<label className='flex items-center space-x-3 cursor-pointer'>
				<input
					type='radio'
					name='gender'
					value='Female'
					className='form-radio text-pink-500 focus:ring-pink-500 w-5 h-5'
				/>
				<span className='text-gray-200 font-medium text-lg'>Female</span>
			</label>
		</div>
	);
};

export default GenderCheckbox; 
