import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
	return (
		<form className='flex items-center gap-2'>
			<input
				type='text'
				placeholder='Search…'
				className='flex-1 px-4 py-2 rounded-full bg-white bg-opacity-20 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300'
			/>
			<button
				type='submit'
				className='p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition duration-300'
			>
				<IoSearchSharp className='w-6 h-6' />
			</button>
		</form>
	);
};

export default SearchInput;
