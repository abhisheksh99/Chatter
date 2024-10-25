import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/SideBar/Sidebar";


const Home = () => {
	return (
		<div className="flex min-h-[90vh] min-w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
			<div className="flex w-full max-w-6xl mx-auto p-6 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl">
				<Sidebar />
				<MessageContainer />
			</div>
		</div>
	);
};

export default Home;
