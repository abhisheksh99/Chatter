import { BiLogOut } from "react-icons/bi"; 

const LogoutButton = () => {
  return (
    <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300">
      <BiLogOut className="mr-2" /> 
     
    </button>
  );
};

export default LogoutButton;
