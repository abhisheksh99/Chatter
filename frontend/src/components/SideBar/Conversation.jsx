import React from 'react'

const Conversation = () => {
	return (
		<>
			<div className='flex gap-2 items-center hover:bg-sky-500 rounded-lg p-2 transition duration-300 cursor-pointer'>
				<div className='avatar online'>
					<div className='w-12 h-12 rounded-full overflow-hidden border-2 border-white'>
						<img
							src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
							alt='user avatar'
							className='w-full h-full object-cover'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex justify-between items-center'>
						<p className='font-bold text-gray-200 text-lg'>John Doe</p>
						
					</div>
					{/* You can add a status message or timestamp here */}
					<p className='text-black-400 text-sm'>Last message preview or timestamp</p>
				</div>
			</div>

			<div className='divider my-0 h-1 bg-gray-600' />
		</>
	);
};

export default Conversation;