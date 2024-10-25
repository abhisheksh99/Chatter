import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className="border-r border-slate-500 p-4 flex flex-col h-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-l-xl shadow-lg">
			{/* Search Input */}
			<div className="mb-4">
				<SearchInput />
			</div>
			<div className="border-b border-gray-300 mb-4"></div>
			{/* Conversations */}
			<div className="flex-1 overflow-y-auto">
				<Conversations />
			</div>
			{/* Logout Button */}
			<div className="mt-4">
				<LogoutButton />
			</div>
		</div>
	);
};

export default Sidebar;
