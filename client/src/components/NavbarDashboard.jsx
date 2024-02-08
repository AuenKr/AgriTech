import { useNavigate } from "react-router-dom";

function NavbarDashboard({ label = "Home" }) {
  const navigate = useNavigate();

  const signOutHandler = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <div className="bg-seaBlue text-white font-bold text-3xl flex justify-between items-center">
      <h1 className="grow text-center">{label}</h1>
      <div
        className="p-1 cursor-pointer rounded-l-full transition hover:bg-red-700 hover:scale-105 hover:shadow-lg"
        onClick={signOutHandler}
      >
        Sign Out
      </div>
    </div>
  );
}

export default NavbarDashboard;
