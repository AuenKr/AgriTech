import Navbar from "../components/Navbar";
import NavbarDashboard from "../components/NavbarDashboard";
import HomePage from "./HomePage";

function Dashboard() {
  return (
    <div className="grid grid-cols-10 bg-gradient-to-r from-green-200 to-green-100 -z-10">
      <div className="col-span-2">
        <Navbar />
      </div>
      <div className="col-span-8">
        <NavbarDashboard />
        <HomePage />
      </div>
    </div>
  );
}

export default Dashboard;
