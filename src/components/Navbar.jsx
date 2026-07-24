import { FaSearch, FaUserCircle } from "react-icons/fa";

function Navbar() {
  const today = new Date().toLocaleDateString();

  return (
    <div className="topbar">

      <div>
        <h1>Student ERP Dashboard</h1>
        <p>{today}</p>
      </div>

      <div className="nav-right">

        <div className="search-box">
          <FaSearch />
          <input type="text" placeholder="Search..." />
        </div>
        
        <img
  src="https://i.pravatar.cc/150?img=32"
  alt="Student"
  className="avatar"
/>
      </div>

    </div>
  );
}

export default Navbar;