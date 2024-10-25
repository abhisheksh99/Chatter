import { BsSend } from "react-icons/bs";

const MessageInput = () => {
	return (
		<form className='relative px-4 my-3'>
			<div className='w-full flex items-center'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:ring focus:ring-blue-500 focus:outline-none'
					placeholder='Send a message'
				/>
				<button
					type='submit'
					className='ml-2 flex items-center justify-center p-2 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
				>
					<BsSend className='text-white' />
				</button>
			</div>
		</form>
	);
};

export default MessageInput;
