import { BiLogOut } from "react-icons/bi"; 
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const {logout} = useLogout()
  return (
    <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300" onClick={logout}>
      <BiLogOut className="mr-2" /> 
     
    </button>
  );
};

export default LogoutButton;
